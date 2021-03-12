import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    root: ({ backgroundColor }) => ({
      backgroundColor
    })
  })
)

export default useStyles