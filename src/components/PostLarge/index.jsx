import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Avatar, Button, Col, Row, Space, Tag, Tooltip, Typography } from 'antd'
import {
  BookOutlined,
  //   BookFilled,
  CommentOutlined,
  HeartOutlined,
  //   HeartFilled,
  PieChartTwoTone,
  ClockCircleTwoTone
} from '@ant-design/icons'
import './style.scss'

function PostLarge(props) {
  const { user, recipe } = props
  const { Paragraph, Text, Title } = Typography

  return (
    <div className="post-wrap">
      <div className="image-wrap">
        <div className="image">
          <img alt={recipe.title} src="https://baconmockup.com/320/320" />
        </div>
      </div>
      <div className="recipe-wrap">
        <Row className="recipe-header">
          <Col className="header">
            <div className="user-wrap">
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              <div className="user-text">
                <Text>{user.name}</Text>
                <br />
                <Text type="secondary">@{user.handle}</Text>
              </div>
            </div>
            <div className="title-wrap">
              <Link className="title-link" to={`/${user.id}/${recipe.id}`}>
                <Title level={2}>{recipe.title}</Title>
              </Link>
              <div className="buttons-wrap">
                <Space>
                  <Tooltip
                    title="Bookmark this recipe"
                    color="#97D191"
                    key="bookmark">
                    <Button
                      shape="circle"
                      icon={<BookOutlined style={{ color: '#97D191' }} />}
                      size="large"
                    />
                  </Tooltip>
                </Space>
              </div>
            </div>
          </Col>
          <Col className="tags-wrap">
            <Tag color="magenta">magenta</Tag>
            <Tag color="red">red</Tag>
            <Tag color="volcano">volcano</Tag>
            <Tag color="orange">orange</Tag>
            <Tag color="gold">gold</Tag>
            <Tag color="lime">lime</Tag>
            <Tag color="green">green</Tag>
            <Tag color="cyan">cyan</Tag>
            <Tag color="blue">blue</Tag>
            <Tag color="geekblue">geekblue</Tag>
            <Tag color="purple">purple</Tag>
            <Tag color="magenta">magenta</Tag>
          </Col>
        </Row>
        <Row className="recipe-body">
          <Col>
            <Paragraph>{recipe.text}</Paragraph>
          </Col>
          <Col className="stats-wrap">
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
            <Space>
              <Tooltip title="View comments" color="#91B7D1" key="comments">
                <Button
                  shape="round"
                  icon={<CommentOutlined style={{ color: '#91B7D1' }} />}
                  size="large">
                  15
                </Button>
              </Tooltip>
              <Tooltip title="Like this recipe" color="#FF4E50" key="like">
                <Button
                  shape="round"
                  icon={<HeartOutlined style={{ color: '#FF4E50' }} />}
                  size="large">
                  29
                </Button>
              </Tooltip>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  )
}

PostLarge.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  recipe: PropTypes.instanceOf(Object).isRequired
}

export default PostLarge
