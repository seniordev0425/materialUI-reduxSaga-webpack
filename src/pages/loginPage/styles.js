import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>
  createStyles({
    textFont: theme.typography.darkFont24
  })
)

export default useStyles