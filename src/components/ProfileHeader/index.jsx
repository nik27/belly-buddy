import React from 'react'
import PropTypes from 'prop-types'
import { Image, Typography } from 'antd'
import { usePalette } from 'react-palette'
import './style.scss'

function ProfileHeader(props) {
  const { handle, profilePicture, name } = props
  const { Title } = Typography
  const { data } = usePalette(profilePicture)

  return (
    <div
      className="profile-header-wrap"
      style={{
        background: `linear-gradient(${data.vibrant}, ${data.lightMuted}, #fff)`
      }}>
      <div className="profile-image-wrap">
        <Image className="profile-image" src={profilePicture} />
      </div>
      <div className="profile-info-wrap">
        <Title level={1}>{name}</Title>
        <Title level={2}>@{handle}</Title>
      </div>
    </div>
  )
}

ProfileHeader.propTypes = {
  handle: PropTypes.string.isRequired,
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default ProfileHeader
