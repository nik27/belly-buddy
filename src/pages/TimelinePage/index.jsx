import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Empty, Typography } from 'antd'
import { getRecipeTimeline, getRecipeTimelineNext } from '../../flex/actions'
import {
  getTimelineRecipeSuper,
  getTimelineLoading,
  getTimelineNextLoading
} from '../../flex/selectors'
import Post from '../../containers/Post'
import PostSkeleton from '../../containers/Post/skeleton'
import './style.scss'

function Timeline() {
  const dispatch = useDispatch()
  const initialTimeline = useSelector(state => getTimelineRecipeSuper(state))
  const isLoading = useSelector(state => getTimelineLoading(state))
  const isNextLoading = useSelector(state => getTimelineNextLoading(state))

  useEffect(() => {
    dispatch(getRecipeTimeline())
  }, [dispatch])

  const loadMore = () => {
    const lastTimestamp = initialTimeline.slice(-1).pop().createdAt

    dispatch(getRecipeTimelineNext(lastTimestamp))
  }

  return (
    <div className="timeline-page">
      {(isLoading && (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      )) ||
        (initialTimeline &&
          initialTimeline.length > 0 &&
          initialTimeline.map(recipe => (
            <Post
              key={recipe.id}
              recipe={recipe}
              likeCount={recipe.likeCount}
              commentCount={recipe.commentCount}
              bookmarkCount={recipe.bookmarkCount}
            />
          ))) || (
          <Empty className="empty" description={<span></span>}>
            <>
              <span>
                <Typography.Title level={3}>
                  You are not following anyone...{' '}
                  <span role="img" aria-label="Hushed Face Emoji">
                    😯
                  </span>
                </Typography.Title>
                <br />
                <Typography.Title level={4}>
                  When you find profile you want to follow, press the follow
                  button next to their name{' '}
                  <span role="img" aria-label="Backhand Index Pointing Down">
                    👉 <Button size="small">Follow</Button>
                  </span>
                </Typography.Title>
                <br />
                <Typography.Title level={4}>
                  <span role="img" aria-label="Backhand Index Pointing Down">
                    👇
                  </span>{' '}
                  Head over to Explore and find new friends{' '}
                  <span role="img" aria-label="Backhand Index Pointing Down">
                    👇
                  </span>
                </Typography.Title>
              </span>
              <Link to="/explore">
                <Button type="primary" size="large">
                  Explore
                </Button>
              </Link>
            </>
          </Empty>
        )}
      {isNextLoading && (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      )}
      {initialTimeline.length >= 10 && !isNextLoading && (
        <Button
          size="large"
          type="dashed"
          className="load-more-button"
          onClick={() => loadMore()}>
          View More
        </Button>
      )}
    </div>
  )
}

export default Timeline
