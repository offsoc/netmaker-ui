import { Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { proSelectors } from '~store/selectors'

export const ProAccessLvl: React.FC = () => {
  const netid = 'default'
  const { t } = useTranslation()
  const userData = useSelector(proSelectors.networkUserData)
  const data = userData[netid]
  const isProcessing = useSelector(proSelectors.isProcessing)

  // useEffect for if networkUsers is processing then show loading then dispatch isprocessing
  if (isProcessing) {
    return <div>Testing</div>
  }

  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={12}>
        <div style={{ textAlign: 'center', margin: '1em 0 1em 0' }}>
          <Typography variant="h5">{`Your Access level is: ${data.user.accesslevel}`}</Typography>
        </div>
      </Grid>
    </Grid>
  )
}
