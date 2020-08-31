import React from 'react'
import PropTypes from 'prop-types'
import { List, Skeleton } from 'antd'
import './style.scss'

const listData = [1, 2, 3, 4, 5, 6, 7]

function CommentsContainerSkeleton(props) {
  const { show } = props

  return (
    (show && (
      <div className="comments-container-wrap">
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item key={item}>
              <Skeleton active avatar></Skeleton>
            </List.Item>
          )}
        />
      </div>
    )) || <div></div>
  )
}

CommentsContainerSkeleton.propTypes = {
  show: PropTypes.bool
}

CommentsContainerSkeleton.defaultProps = {
  show: false
}

export default CommentsContainerSkeleton
