import React from 'react'
// import PropTypes from 'prop-types'

function FooterContent(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      Belly Buddy &#xa9; {new Date().getFullYear()}
    </div>
  )
}

FooterContent.propTypes = {}

export default FooterContent
