import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Sandwich } from '../types'

function DetailSandwich() {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading } = useQuery<Sandwich>(['sandwichs', id], () =>
    axios.get(`/api/v1/sandwichs/${id}`).then((response) => response.data)
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const sandwich = data as Sandwich

  return (
    <div>
      <label>{sandwich.price}</label>
      <br />

      <label>{sandwich.type}</label>
      <br />

      <label>{sandwich.warm}</label>
      <br />
    </div>
  )
}

export default DetailSandwich
