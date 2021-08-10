import axios from 'axios'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import SandwichForm from './SandwichForm'
import { Sandwich } from '../types'
import { useQuery, useMutation, useQueryClient } from 'react-query'

function UpdateSandwich() {
  const { id } = useParams<{ id: string }>()
  const queryClient = useQueryClient()
  const history = useHistory()

  const { data, isLoading } = useQuery<Sandwich>(['sandwichs', id], () =>
    axios.get(`/api/v1/sandwichs/${id}`).then((response) => response.data)
  )

  const updateSandwich = useMutation<Sandwich, any, Sandwich>(
    (values: Sandwich) =>
      axios
        .put(`/api/v1/sandwichs/${id}`, values)
        .then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('sandwichs')
      },
    }
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  const sandwich = data as Sandwich
  return (
    <SandwichForm
      sandwich={sandwich}
      onSubmit={(values, { setSubmitting }) => {
        updateSandwich.mutate(values)
        setSubmitting?.(false)
        history.push('/sandwichs')
      }}
    />
  )
}

export default UpdateSandwich
