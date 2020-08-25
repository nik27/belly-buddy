import React from 'react'
// import PropTypes from 'prop-types'
import Post from '../../containers/Post'
import './style.scss'

function ExplorePage(props) {
  const user = { id: '1', handle: 'test', name: 'John Doe' }
  const recipe = {
    id: '1',
    title: 'Test recipe',
    portions: '2',
    time: '60',
    intro:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi mollitia obcaecati eum, laudantium pariatur, laborum unde vitae nisi nesciunt, reprehenderit id debitis voluptatibus quae sit enim ducimus adipisci veniam necessitatibus culpa ad veritatis suscipit? Corporis reprehenderit accusamus modi nihil culpa.',
    steps: [
      { id: '1', text: 'Test step' },
      { id: '2', text: 'Test step 2' }
    ],
    tips: [
      { id: '1', text: 'Test tip' },
      { id: '2', text: 'Test tip 2' }
    ]
  }

  return (
    <div className="explore-page">
      <Post recipe={recipe} user={user} />
      <Post recipe={recipe} user={user} />
      <Post recipe={recipe} user={user} />
      <Post recipe={recipe} user={user} />
      <Post recipe={recipe} user={user} />
      <Post recipe={recipe} user={user} />
      <Post recipe={recipe} user={user} />
      <Post recipe={recipe} user={user} />
    </div>
  )
}

ExplorePage.propTypes = {}

export default ExplorePage
