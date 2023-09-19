import React from 'react'
import {useParams} from 'react-router-dom';

const ItemId = () => {
    const {id} = useParams()
  return (
    <div><h3>ItemId</h3> {id}</div>
  )
}

export default ItemId