import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Image, Tooltip, Typography, Upload } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { followUser, unfollowUser } from '../../redux/actions'
import {
  getIsFollowed,
  getIsUsers,
  isLoadingFollow
} from '../../redux/selectors'
import ImgCrop from 'antd-img-crop'
import './style.scss'

function ProfileHeader(props) {
  const { handle, profilePicture, name, changeProfilePicture } = props
  const dispatch = useDispatch()
  const isUsers = useSelector(state => getIsUsers(state, handle))
  const isFollowed = useSelector(state => getIsFollowed(state, handle))
  const isLoading = useSelector(state => isLoadingFollow(state))

  const toggleFollow = () => {
    if (isFollowed) {
      dispatch(unfollowUser(handle))
    } else {
      dispatch(followUser(handle))
    }
  }

  return (
    <div className="profile-header-wrap">
      <div className="profile-image-wrap">
        <Image className="profile-image" src={profilePicture} />
        {isUsers && (
          <Tooltip title="Change profile picture" color="#97D191">
            <ImgCrop shape="round" rotate>
              <Upload
                accept="image/*"
                customRequest={changeProfilePicture}
                beforeUpload={() => true}
                showUploadList={false}>
                <Button
                  className="profile-image-button"
                  shape="circle"
                  loading={isLoading}
                  icon={<EditOutlined />}
                />
              </Upload>
            </ImgCrop>
          </Tooltip>
        )}
      </div>
      <div className="profile-info-wrap">
        <Typography.Title level={1}>{name}</Typography.Title>
        <Typography.Title level={3}>@{handle}</Typography.Title>
        {!isUsers
          ? (isFollowed && (
              <Button size="large" loading={isLoading} onClick={toggleFollow}>
                Unfollow
              </Button>
            )) || (
              <Button
                size="large"
                type="primary"
                loading={isLoading}
                onClick={toggleFollow}>
                Follow
              </Button>
            )
          : null}
      </div>
    </div>
  )
}

ProfileHeader.propTypes = {
  handle: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeProfilePicture: PropTypes.func.isRequired
}

export default ProfileHeader
