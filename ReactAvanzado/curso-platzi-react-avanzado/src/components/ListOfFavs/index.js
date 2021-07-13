import React from 'react'
import Proptypes from 'prop-types'
import { Grid, Image, Link } from './styles'

export const ListOfFavs = ({ favs = [] }) => {
  return (
    <Grid>
      {
         favs.map(fav => {
           return (
             <Link key={fav.id} to={`/detail/${fav.id}`}>
               <Image key={fav.id} src={fav.src} />
             </Link>
           )
         })
      }
    </Grid>
  )
}

ListOfFavs.propTypes = {
  favs: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string,
      src: Proptypes.string
    })
  )
}
