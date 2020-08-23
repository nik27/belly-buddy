import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Avatar, Input, Menu } from 'antd'
import {
  HomeTwoTone,
  BookTwoTone,
  PlusOutlined,
  BellTwoTone,
  SearchOutlined,
  ExperimentTwoTone
} from '@ant-design/icons'
import './style.scss'

function HeaderContent(props) {
  const { Search } = Input
  const { SubMenu } = Menu

  return (
    <div className="header-wrap">
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="home">
          <Link to="/">
            <HomeTwoTone twoToneColor="#FFC742" />
          </Link>
        </Menu.Item>
        <Menu.Item key="bookmarks">
          <Link to="/bookmarked">
            <BookTwoTone twoToneColor="#97D191" />
          </Link>
        </Menu.Item>
        <Menu.Item key="explore">
          <Link to="/explore">
            <ExperimentTwoTone twoToneColor="#91B7D1" />
          </Link>
        </Menu.Item>
      </Menu>
      <div className="search-wrap">
        <Search
          placeholder="Search..."
          enterButton={<SearchOutlined />}
          size="large"
          allowClear
          onSearch={value => console.log(value)}
        />
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="addNew">
          <PlusOutlined style={{ color: '#97D191' }} />
        </Menu.Item>
        <Menu.Item key="notifications">
          <BellTwoTone twoToneColor="#91B7D1" />
        </Menu.Item>
        <SubMenu
          className="profile-avatar"
          icon={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }>
          <Menu.Item key="menu:1">
            <Link to="/profile">View profile</Link>
          </Menu.Item>
          <Menu.Item key="menu:2">
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  )
}

HeaderContent.propTypes = {}

export default HeaderContent
