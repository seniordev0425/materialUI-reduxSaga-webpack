import React from 'react'
import PropTypes from 'prop-types'

import Footer from '@/components/footer'

import useStyles from './styles'

const AppLayout = (props) => {
  const {
    backgroundColor,
    withFooter,
    children
  } = props

  const styleProps = { backgroundColor }
  const classes = useStyles(styleProps)

  return (
    <div backgroundColor className={classes.root}>
      {children}
      {withFooter &&
        <Footer />
      }
    </div>
  )
}

AppLayout.propTypes = {
  backgroundColor: PropTypes.string,
  withFooter: PropTypes.bool
}

export default AppLayout

