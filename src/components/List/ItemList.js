import Item from './Item'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Skeleton from '@mui/material/Skeleton'

import onAdd from '../../helpers/onAdd'

const ItemList = ({ items }) => {
  return (
    <>
      {!items && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {[...Array(6).keys()].map((item, i) => {
              return (
                <Grid item xs={4} sm={4} md={4} key={i}>
                  <Skeleton
                    variant="rectangular"
                    sx={{
                      height: '600px',
                      borderRadius: '5px',
                      boxShadow:
                        '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                    }}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Box>
      )}

      {items && (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  align="right"
                  color="text.secondary"
                  gutterBottom
                  paragraph
                >
                  {items.length} resultados
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {items.map((item) => {
                return (
                  <Grid item xs={4} sm={4} md={4} key={item.id}>
                    <Item item={item} onAdd={onAdd} />
                  </Grid>
                )
              })}
            </Grid>
          </Box>
        </>
      )}
    </>
  )
}

export default ItemList
