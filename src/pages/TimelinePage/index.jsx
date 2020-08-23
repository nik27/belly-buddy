import React from 'react'
// import PropTypes from 'prop-types'
import PostLarge from '../../components/PostLarge'

function Timeline(props) {
  const user = { id: '1', handle: 'test', name: 'John Doe' }
  const recipe = {
    id: '1',
    title: 'Test recipe',
    portions: 2,
    time: 60,
    text:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi mollitia obcaecati eum, laudantium pariatur, laborum unde vitae nisi nesciunt, reprehenderit id debitis voluptatibus quae sit enim ducimus adipisci veniam necessitatibus culpa ad veritatis suscipit? Corporis reprehenderit accusamus modi nihil culpa.'
  }
  return (
    <>
      <PostLarge recipe={recipe} user={user} />
      <PostLarge recipe={recipe} user={user} />
      <PostLarge recipe={recipe} user={user} />
      <PostLarge recipe={recipe} user={user} />
      <PostLarge recipe={recipe} user={user} />
      <PostLarge recipe={recipe} user={user} />
      <PostLarge recipe={recipe} user={user} />
      <PostLarge recipe={recipe} user={user} />
    </>
  )
}

Timeline.propTypes = {}

export default Timeline
