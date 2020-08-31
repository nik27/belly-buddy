import React from 'react'
// import PropTypes from 'prop-types'
import { AutoComplete, Input } from 'antd'
import './style.scss'
import { SearchOutlined } from '@ant-design/icons'

const renderTitle = title => <span>{title}</span>

const renderItem = (title, count) => ({
  value: title,
  label: (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
      {title}
    </div>
  )
})

const options = [
  {
    label: renderTitle('Recipes'),
    options: [renderItem('Recipe 1'), renderItem('Recipe 2')]
  },
  {
    label: renderTitle('Users'),
    options: [renderItem('User 1'), renderItem('User 2')]
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
