import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import {
  Button,
  Divider,
  Form,
  Input,
  InputNumber,
  Space,
  TimePicker,
  Tooltip,
  Typography
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import './style.scss'
import FormTagSelect from '../../components/FormTagSelect'
import DynamicFields from '../../components/FormDynamicFields'
import FormImageUpload from '../../components/FormImageUpload'

const options = [
  { value: 'gold' },
  { value: 'lime' },
  { value: 'green' },
  { value: 'cyan' }
]

function FormAddRecipeContainer(props) {
  const [files, setFiles] = useState([
    {
      uid: '-1',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-1',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-1',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }
  ])

  return (
    <>
      <Typography.Title level={1}>Add new recipe</Typography.Title>
      <Divider />
      <Form
        initialValues={{
          ingredients: [''],
          steps: [''],
          tips: ['']
        }}
        labelAlign="left">
        <Form.Item label="Title" name="title" required>
          <Input placeholder="Veggie lasagne" />
        </Form.Item>
        <div className="form-items-inline">
          <Form.Item label="# of Portions" name="portions" required>
            <InputNumber placeholder="6" />
          </Form.Item>
          <Form.Item label="Preparation Time" name="prepTime" required>
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
          <FormTagSelect options={options} />
        </Form.Item>
        <Form.Item label="Intro" name="intro" required>
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
        <Form.Item>
          <FormImageUpload files={files} />
        </Form.Item>
        <Form.Item>
          <Space size="middle">
            <Button size="large" danger>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit" size="large">
              Add Recipe
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

FormAddRecipeContainer.propTypes = {}

export default FormAddRecipeContainer
