import React from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'
import { Avatar, Badge, Menu } from 'antd'
import {
  HomeTwoTone,
  BookTwoTone,
  PlusOutlined,
  BellTwoTone,
  ExperimentTwoTone
} from '@ant-design/icons'
import './style.scss'
import SearchBarContainer from '../SearchBar'

function HeaderContent(props) {
  const pathname = useLocation().pathname
  const { count } = props

  return (
    <div className="header-wrap">
      <Menu mode="horizontal" selectedKeys={[`${pathname}`]}>
        <Menu.Item key="/" className="list-item select">
          <Link to="/">
            <HomeTwoTone twoToneColor="#FFC742" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/bookmarked" className="list-item select">
          <Link to="/bookmarked">
            <BookTwoTone twoToneColor="#97D191" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/explore" className="list-item select">
          <Link to="/explore">
            <ExperimentTwoTone twoToneColor="#91B7D1" />
          </Link>
        </Menu.Item>
      </Menu>
      <div className="search-wrap">
        <SearchBarContainer />
      </div>
      <Menu mode="horizontal" selectedKeys={[`${pathname}`]}>
        <Menu.Item key="/add-new" className="list-item">
          <Link to="/add-new">
            <PlusOutlined style={{ color: '#97D191' }} />
          </Link>
        </Menu.Item>
        <Menu.Item key="notifications" className="notification ">
          <Badge count={count}>
            <BellTwoTone twoToneColor="#91B7D1" />
          </Badge>
        </Menu.Item>
        <Menu.SubMenu
          className="list-item profile-avatar"
          icon={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }>
          <Menu.Item key="menu:1">
            <Link to="/profile">View profile</Link>
          </Menu.Item>
          <Menu.Item key="menu:2">
            <Link to="/settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="menu:3">
            <Link to="/logout">Logout</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>
  )
}

HeaderContent.propTypes = {
  count: PropTypes.number
}

HeaderContent.defaultProps = {
  count: 0
}

export default HeaderContent
