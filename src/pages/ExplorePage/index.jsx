import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Empty, Typography } from 'antd'
import { getRecipeExplore, getRecipeExploreNext } from '../../redux/actions'
import {
  getExploreRecipeSuper,
  getExploreLoading,
  getExploreNextLoading
} from '../../redux/selectors'
import Post from '../../containers/Post'
import PostSkeleton from '../../containers/Post/skeleton'
import './style.scss'

function ExplorePage() {
  const dispatch = useDispatch()
  const category = 'explore'
  const initialExplore = useSelector(state => getExploreRecipeSuper(state))
  const isLoading = useSelector(state => getExploreLoading(state))
  const isNextLoading = useSelector(state => getExploreNextLoading(state))

  useEffect(() => {
    dispatch(getRecipeExplore())
  }, [dispatch])

  const loadMore = () => {
    const lastTimestamp = initialExplore.slice(-1).pop().createdAt

    dispatch(getRecipeExploreNext(lastTimestamp))
  }

  return (
    <div className="explore-page">
      {(isLoading && (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      )) ||
        (initialExplore &&
          initialExplore.length > 0 &&
          initialExplore.map(recipe => (
            <Post
              key={recipe.id}
              recipe={recipe}
              likeCount={recipe.likeCount}
              commentCount={recipe.commentCount}
              bookmarkCount={recipe.bookmarkCount}
              category={category}
            />
          ))) || (
          <Empty className="empty" description={<span></span>}>
            <>
              <span>
                <Typography.Title level={3}>
                  You are already following everyone!{' '}
                  <span role="img" aria-label="Tada Emoji">
                    🎉
                  </span>
                </Typography.Title>
                <br />
                <Typography.Title level={4}>
                  Invite more people to use Belly Buddy
                  <br />{' '}
                  <span role="img" aria-label="Backhand Index Pointing Down">
                    🧍‍♀️ 🧍‍♂️ 🧍{' '}
                  </span>
                  so all of us could have some new and creative recipes!{' '}
                  <span role="img" aria-label="Backhand Index Pointing Down">
                    🧍 🧍‍♂️ 🧍‍♀️{' '}
                  </span>
                </Typography.Title>
              </span>
              <Link to="/">
                <Button type="primary" size="large">
                  Home
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
      {initialExplore.length >= 10 && !isNextLoading && (
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

export default ExplorePage
