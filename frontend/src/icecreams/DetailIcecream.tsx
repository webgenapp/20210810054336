import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Icecream } from '../types'

function DetailIcecream() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<Icecream>(['icecreams', id], () =>
    axios.get(`/api/v1/icecreams/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const icecream = data as Icecream

  return (
    <div>
      <label>{icecream.price}</label>
      <br />

      <label>{icecream.flavour}</label>
      <br />
    </div>
  )
}

export default DetailIcecream
