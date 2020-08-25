import React from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Divider, Space, Tooltip } from 'antd'
import {
  CommentOutlined,
  HeartOutlined,
  HeartFilled,
  PieChartTwoTone,
  ClockCircleTwoTone
} from '@ant-design/icons'
import './style.scss'

function RecipeInfo(props) {
  const { isLiked, recipe } = props

  return (
    <Col className="recipe-info">
      <Space>
        <Tooltip title="# of portions" color="#91B7D1" key="portions">
          <Button
            shape="round"
            icon={<PieChartTwoTone twoToneColor="#91B7D1" />}
            size="large">
            &nbsp;{recipe.portions}
          </Button>
        </Tooltip>
        <Tooltip title="Prep time" color="#97D191" key="time">
          <Button
            shape="round"
            icon={<ClockCircleTwoTone twoToneColor="#97D191" />}
            size="large">
            {recipe.time} min
          </Button>
        </Tooltip>
      </Space>
      <Divider type="vertical" />
      <Space>
        <Tooltip title="View comments" color="#91B7D1" key="comments">
          <Button
            shape="round"
            icon={<CommentOutlined style={{ color: '#91B7D1' }} />}
            size="large">
            15
          </Button>
        </Tooltip>
        <Tooltip
          title={`${isLiked ? 'Unlike' : 'Like'} this recipe`}
          color="#FF4E50"
          key="like">
          <Button
            shape="round"
            icon={
              isLiked ? (
                <HeartFilled style={{ color: '#FF4E50' }} />
              ) : (
                <HeartOutlined style={{ color: '#FF4E50' }} />
              )
            }
            size="large">
            29
          </Button>
        </Tooltip>
      </Space>
    </Col>
  )
}

RecipeInfo.propTypes = {
  isLiked: PropTypes.bool.isRequired,
  recipe: PropTypes.instanceOf(Object).isRequired
}

export default RecipeInfo
