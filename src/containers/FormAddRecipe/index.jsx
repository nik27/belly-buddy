import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Result,
  Space,
  Spin,
  TimePicker,
  Tooltip,
  Typography
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { uploadRecipeImage, deleteRecipeImage } from '../../api/recipe'
import { addNewRecipe } from '../../redux/actions'
import {
  getTags,
  isCreateRecipeLoading,
  getCurrentUserHandle
} from '../../redux/selectors'
import history from '../../utils/history'
import FormTagSelect from '../../components/FormTagSelect'
import DynamicFields from '../../components/FormDynamicFields'
import FormImageUpload from '../../components/FormImageUpload'
import './style.scss'

function FormAddRecipeContainer() {
  const dispatch = useDispatch()
  const tags = useSelector(state => getTags(state))
  const currentUser = useSelector(state => getCurrentUserHandle(state))
  const createLoading = useSelector(state => isCreateRecipeLoading(state))

  const [form] = Form.useForm()
  const [success, setSuccess] = useState(false)
  const [files, setFiles] = useState([])
  const [mainFiles, setMainFiles] = useState([])
  const [tempFiles, setTempFiles] = useState([])
  const [mainPicture, setMainPicture] = useState(null)

  const onFinish = fieldsValue => {
    const hours = fieldsValue.prepTime.format('HH')
    const minutes = fieldsValue.prepTime.format('mm')
    let prepTime

    if (hours !== '00') {
      if (minutes !== '00') {
        prepTime = `${hours[0] === '0' ? hours[1] : hours} h ${
          minutes[0] === '0' ? minutes[1] : minutes
        } min`
      } else {
        prepTime = `${hours[0] === '0' ? hours[1] : hours} h`
      }
    } else {
      if (minutes !== '00') {
        prepTime = `${minutes[0] === '0' ? minutes[1] : minutes} min`
      }
    }

    const final = {
      title: fieldsValue.title,
      time: prepTime,
      portions: fieldsValue.portions,
      intro: fieldsValue.intro,
      steps: fieldsValue.steps,
      tips: fieldsValue.tips,
      ingredients: fieldsValue.ingredients,
      mainPicture: mainPicture.url,
      pictures: tempFiles.length > 0 ? tempFiles.map(el => el.url) : [],
      tags: fieldsValue.tags
    }

    dispatch(addNewRecipe(final)).then(res => {
      setSuccess(true)
      form.resetFields()
      setFiles([])
      setMainFiles([])
      setTempFiles([])
      setMainPicture(null)
    })
  }

  const onCancel = () => {
    if (tempFiles) {
      tempFiles.forEach(file => onRemove(file))
    }
    if (mainPicture) {
      onRemove(mainPicture)
    }
    history.push('/')
  }

  const onAddAnother = () => {
    setSuccess(false)
  }

  const customUpload = async options => {
    const { onSuccess, onError, file } = options
    const formData = new FormData()
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    formData.append('image', file)

    try {
      const res = await uploadRecipeImage(formData, config)
      onSuccess('Ok')
      return res
    } catch (err) {
      const error = new Error('Some error')
      onError({ error })
      return false
    }
  }

  const imageUpload = options => {
    const { file, headers } = options
    customUpload(options).then(res => {
      if (res) {
        if (headers === 'true') {
          setMainPicture({
            uid: file.uid,
            name: res.data.name,
            url: res.data.url
          })
        } else {
          setTempFiles(old => [
            ...old,
            { uid: file.uid, name: res.data.name, url: res.data.url }
          ])
        }
      }
    })
  }

  const onRemove = file => {
    const toRemove = tempFiles.find(el => el.uid === file.uid)

    if (toRemove) {
      setTempFiles(tempFiles.filter(el => el.uid !== toRemove.uid))
      deleteRecipeImage(toRemove.name)
    } else {
      const mainRemove = mainFiles.find(el => el.uid === file.uid)
      if (mainRemove) {
        setMainFiles([])
        deleteRecipeImage(mainRemove)
      }
    }
  }

  const handleOnChange = fileList => {
    setFiles(fileList)
  }

  const handleOnChangeMain = fileList => {
    setMainFiles(fileList)
  }

  const checkMainPicture = () => {
    if (mainFiles.length > 0) {
      return Promise.resolve()
    } else {
      return Promise.reject(new Error('Please select main picture'))
    }
  }

  const checkPictures = () => {
    if (files.length > 0) {
      return Promise.resolve()
    } else {
      return Promise.reject(
        new Error('Please select at least one picture picture')
      )
    }
  }

  const checkTime = (rules, values) => {
    if (values) {
      const hours = values.format('HH')
      const minutes = values.format('mm')

      if (hours !== '00') {
        if (minutes !== '00') {
          return Promise.resolve()
        } else {
          return Promise.resolve()
        }
      } else {
        if (minutes !== '00') {
          return Promise.resolve()
        } else {
          return Promise.reject(
            new Error('Preparation time must be at least 1 minute')
          )
        }
      }
    }
    return Promise.reject(new Error('Please input time to prepare'))
  }

  return success ? (
    <Result
      status="success"
      title="Successfully Created Recipe!"
      subTitle="You can now view your recipe on profile page."
      extra={[
        <Link to={`/${currentUser}`} key="home">
          <Button type="dashed" size="large">
            Go to Profile
          </Button>
        </Link>,
        <Button key="new" type="primary" size="large" onClick={onAddAnother}>
          Add New Recipe
        </Button>
      ]}
    />
  ) : (
    <Spin spinning={createLoading}>
      <Typography.Title level={1}>Add new recipe</Typography.Title>
      <Divider />
      <Form
        form={form}
        onFinish={onFinish}
        initialValues={{
          ingredients: [''],
          steps: [''],
          tips: [''],
          portions: 1,
          prepTime: '',
          mainPicture: mainFiles,
          recipePictures: files
        }}
        labelAlign="left">
        <Form.Item
          label="Title"
          name="title"
          required
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please input title'
            }
          ]}>
          <Input placeholder="Veggie lasagne" />
        </Form.Item>
        <div className="form-items-inline">
          <Form.Item
            label="# of Portions"
            name="portions"
            required
            rules={[
              {
                type: 'number',
                min: 1,
                max: 50,
                required: true,
                whitespace: true,
                message: 'Please input # of portions'
              }
            ]}>
            <InputNumber placeholder="6" min={1} max={50} />
          </Form.Item>
          <Form.Item
            label="Preparation Time"
            name="prepTime"
            required
            rules={[
              {
                validator: (rules, values) => checkTime(rules, values)
              }
            ]}>
            <TimePicker format={'HH:mm'} placeholder="02:00" />
          </Form.Item>
        </div>
        <Form.Item
          label={
            <span className="form-item-label">
              Tags&nbsp;
              <Tooltip title="Add relevant tags so others could easily find your recipe">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          name="tags">
          <FormTagSelect options={tags} />
        </Form.Item>
        <Form.Item
          label="Intro"
          name="intro"
          required
          rules={[
            {
              required: true,
              whitespace: true,
              message: 'Please input intro'
            }
          ]}>
          <Input.TextArea
            placeholder="Roast sweet potato, peppers, courgette and spinach combine to make this easy veggie lasagne. We really do think this is the best vegetable lasagne recipe we've ever tried."
            autoSize={{ minRows: 2, maxRows: 6 }}
          />
        </Form.Item>
        <div className="form-dynamic-fields">
          <DynamicFields
            name="ingredient"
            required
            tooltip="What do we need to make this dish?"
            placeholder="2 yellow or red peppers, seeds removed, cut into roughly 2cm chunks"
          />
          <DynamicFields
            name="step"
            required
            tooltip="Describe the steps to create this dish"
            placeholder="Preheat the oven to 200C/180C Fan/Gas 6. Put the peppers, courgette and sweet potato into a large baking tray. Drizzle with 2 tablespoons of the oil, season with salt and pepper and toss together."
          />
          <DynamicFields
            name="tip"
            tooltip="Any tips for this dish?"
            placeholder="Don't open the oven while roasting"
          />
        </div>
        <Form.Item
          name="mainPicture"
          label={
            <span className="form-item-label">
              Main picture&nbsp;
              <Tooltip title="Picture used as recipe image">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          required
          rules={[
            {
              validator: checkMainPicture
            }
          ]}>
          <FormImageUpload
            value={mainFiles}
            imageUpload={imageUpload}
            onChange={handleOnChangeMain}
            onRemove={onRemove}
            isMain
          />
        </Form.Item>
        <Form.Item
          name="recipePictures"
          label={
            <span className="form-item-label">
              Recipe pictures&nbsp;
              <Tooltip title="Other pictures shown on recipe details">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          required
          rules={[
            {
              validator: checkPictures
            }
          ]}>
          <FormImageUpload
            value={files}
            imageUpload={imageUpload}
            onChange={handleOnChange}
            onRemove={onRemove}
            isMain={false}
          />
        </Form.Item>
        <Form.Item>
          <Space size="middle">
            <Button size="large" danger onClick={onCancel}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" size="large">
              Add Recipe
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default FormAddRecipeContainer
