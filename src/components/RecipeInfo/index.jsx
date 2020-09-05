import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Divider, Space, Tooltip } from 'antd'
import {
  CommentOutlined,
  HeartOutlined,
  HeartFilled,
  PieChartTwoTone,
  ClockCircleTwoTone
} from '@ant-design/icons'
import { likeRecipe, unlikeRecipe } from '../../redux/actions'
import { getIsLiked, getIsUsers, isLoadingLike } from '../../redux/selectors'
import './style.scss'

function RecipeInfo(props) {
  const {
    recipe,
    likeCount,
    commentCount,
    userHandle,
    selectedRecipe,
    category
  } = props
  const dispatch = useDispatch()
  const isLiked = useSelector(state => getIsLiked(state, recipe.id, likeCount))
  const isUsers = useSelector(state => getIsUsers(state, userHandle))
  const isLoading = useSelector(state => isLoadingLike(state))

  const toggleLike = () => {
    if (isLiked) {
      dispatch(unlikeRecipe(recipe.id, likeCount - 1, selectedRecipe, category))
    } else {
      dispatch(likeRecipe(recipe.id, likeCount + 1, selectedRecipe, category))
    }
  }

  return (
    <Col className="recipe-info">
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
            {recipe.time}
          </Button>
        </Tooltip>
      </Space>
      <Divider type="vertical" />
      <Space>
        <Tooltip title="View comments" color="#91B7D1" key="comments">
          <Link to={`/${userHandle}/${recipe.id}/true`}>
            <Button
              shape="round"
              icon={<CommentOutlined style={{ color: '#91B7D1' }} />}
              size="large">
              &nbsp;
              {commentCount}
            </Button>
          </Link>
        </Tooltip>
        <Tooltip
          title={
            isUsers
              ? 'Number of likes'
              : `${isLiked ? 'Unlike' : 'Like'} this recipe`
          }
          color="#FF4E50"
          key="like">
          <Button
            shape="round"
            icon={
              isLiked ? (
                <HeartFilled style={{ color: '#FF4E50' }} />
              ) : (
                <HeartOutlined style={{ color: '#FF4E50' }} />
              )
            }
            size="large"
            onClick={isUsers ? null : () => toggleLike()}
            loading={isLoading}>
            &nbsp;
            {likeCount}
          </Button>
        </Tooltip>
      </Space>
    </Col>
  )
}

RecipeInfo.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
  likeCount: PropTypes.number.isRequired,
  commentCount: PropTypes.number.isRequired,
  userHandle: PropTypes.string.isRequired,
  selectedRecipe: PropTypes.bool,
  category: PropTypes.string.isRequired
}

RecipeInfo.defaultProps = {
  selectedRecipe: false
}

export default RecipeInfo
