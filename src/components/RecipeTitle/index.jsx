import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Avatar, Button, Space, Tooltip, Typography } from 'antd'
import { BookFilled, BookOutlined } from '@ant-design/icons'
import './style.scss'

function RecipeTitle(props) {
  const { Text, Title } = Typography
  const { user, recipeId, title, bookmarked } = props

  return (
    <div className="recipe-title">
      <div className="user-wrap">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <div className="user-text">
          <Text>{user.name}</Text>
          <br />
          <Text type="secondary">@{user.handle}</Text>
        </div>
      </div>
      <div className="title-wrap">
        <Link className="title-link" to={`/${user.id}/${recipeId}`}>
          <Title level={2}>{title}</Title>
        </Link>
        <div className="buttons-wrap">
          <Space>
            <Tooltip
              title="Bookmark this recipe"
              color="#97D191"
              key="bookmark">
              <Button
                shape="circle"
                icon={
                  bookmarked ? (
                    <BookFilled style={{ color: '#97D191' }} />
                  ) : (
                    <BookOutlined style={{ color: '#97D191' }} />
                  )
                }
                size="large"
              />
            </Tooltip>
          </Space>
        </div>
      </div>
    </div>
  )
}

RecipeTitle.propTypes = {
  user: PropTypes.instanceOf(Object).isRequired,
  bookmarked: PropTypes.bool.isRequired,
  recipeId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default RecipeTitle
