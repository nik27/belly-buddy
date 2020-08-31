import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile, getCurrentSessionUser } from '../../flex/actions'
import {
  getSelectedProfile,
  isSelectedProfileLoading
} from '../../flex/selectors'
import { uploadProfilePicture } from '../../api/session'
import ProfileContainer from '../../containers/Profile'
import ProfileContainerSkeleton from '../../containers/Profile/skeleton'
import './style.scss'

function Profile() {
  const dispatch = useDispatch()
  const { userHandle } = useParams()
  const profile = useSelector(state => getSelectedProfile(state))
  const isProfileLoading = useSelector(state => isSelectedProfileLoading(state))

  const changeProfilePicture = async options => {
    const { onSuccess, onError, file } = options

    const formData = new FormData()
    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    formData.append('image', file)

    try {
      await uploadProfilePicture(formData, config)
      dispatch(getCurrentSessionUser())
      dispatch(getProfile(userHandle))
      onSuccess('Ok')
    } catch (err) {
      const error = new Error('Some error')
      onError({ error })
    }
  }

  useEffect(() => {
    if (userHandle) {
      dispatch(getProfile(userHandle))
    }
  }, [dispatch, userHandle])

  return (
    <div className="profile-page">
      {isProfileLoading ? (
        <ProfileContainerSkeleton />
      ) : (
        profile && (
          <ProfileContainer
            user={profile.user}
            recipes={profile.recipes}
            changeProfilePicture={changeProfilePicture}
          />
        )
      )}
    </div>
  )
}

export default Profile
