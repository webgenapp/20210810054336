import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Coffee } from '../types'

function DetailCoffee() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<Coffee>(['coffees', id], () =>
    axios.get(`/api/v1/coffees/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const coffee = data as Coffee

  return (
    <div>
      <label>{coffee.price}</label>
      <br />

      <label>{coffee.flavour}</label>
      <br />

      <label>{coffee.sugar}</label>
      <br />
    </div>
  )
}

export default DetailCoffee
