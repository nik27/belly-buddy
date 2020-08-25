import React from 'react'
// import PropTypes from 'prop-types'
import { AutoComplete, Input } from 'antd'
import './style.scss'
import { SearchOutlined, UserOutlined } from '@ant-design/icons'

const renderTitle = title => (
  <span>
    {title}
    <a
      style={{
        float: 'right'
      }}
      href="https://www.google.com/search?q=antd"
      target="_blank"
      rel="noopener noreferrer">
      more
    </a>
  </span>
)

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      {title}
      <span>
        <UserOutlined /> {count}
      </span>
    </div>
  )
})

const options = [
  {
    label: renderTitle('Recipes'),
    options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)]
  },
  {
    label: renderTitle('Users'),
    options: [
      renderItem('AntDesign UI FAQ', 60100),
      renderItem('AntDesign FAQ', 30010)
    ]
  },
  {
    label: renderTitle('Tags'),
    options: [renderItem('AntDesign design language', 100000)]
  }
]

function SearchBarContainer(props) {
  // const { options } = props

  return (
    <AutoComplete
      dropdownClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={500}
      options={options}
      className="search-bar">
      <Input.Search
        placeholder="Search..."
        enterButton={<SearchOutlined />}
        size="large"
        allowClear
      />
    </AutoComplete>
  )
}

SearchBarContainer.propTypes = {}

export default SearchBarContainer
