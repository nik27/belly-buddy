import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Empty, Typography } from 'antd'
import { SaveOutlined } from '@ant-design/icons'
import { getRecipeBookmark, getRecipeBookmarkNext } from '../../flex/actions'
import {
  getBookmarkRecipeSuper,
  getBookmarkLoading,
  getBookmarkNextLoading
} from '../../flex/selectors'
import Post from '../../containers/Post'
import PostSkeleton from '../../containers/Post/skeleton'
import './style.scss'

function BookmarkedPage() {
  const dispatch = useDispatch()
  const initialBookmark = useSelector(state => getBookmarkRecipeSuper(state))
  const isLoading = useSelector(state => getBookmarkLoading(state))
  const isNextLoading = useSelector(state => getBookmarkNextLoading(state))

  useEffect(() => {
    dispatch(getRecipeBookmark())
  }, [dispatch])

  const loadMore = () => {
    const lastTimestamp = initialBookmark.slice(-1).pop().createdAt

    dispatch(getRecipeBookmarkNext(lastTimestamp))
  }

  return (
    <div className="bookmarked-page">
      {(isLoading && (
        <>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </>
      )) ||
        (initialBookmark &&
          initialBookmark.length > 0 &&
          initialBookmark.map(recipe => (
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
                  You don&apos;t have any saved recipes...{' '}
                  <span role="img" aria-label="Hushed Face Emoji">
                    😯
                  </span>
                </Typography.Title>
                <br />
                <Typography.Title level={4}>
                  When you find recipe you want to save, press the save button
                  in top right corner{' '}
                  <span role="img" aria-label="Backhand Index Pointing Down">
                    👉{' '}
                    <Button
                      shape="circle"
                      icon={<SaveOutlined style={{ color: '#97D191' }} />}
                      size="large"
                    />
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
      {initialBookmark.length >= 10 && !isNextLoading && (
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

export default BookmarkedPage
