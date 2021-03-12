import React from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

const LoginPage = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography classes={{ root: classes.textFont }}>
        hello world
      </Typography>
    </div>
  )
}

export default LoginPage