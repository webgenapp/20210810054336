import axios from 'axios'
import { FormikHelpers } from 'formik'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { Sandwich, SandwichError } from '../types'
import SandwichForm from './SandwichForm'
import { useHistory } from 'react-router-dom'

function CreateSandwich() {
  const queryClient = useQueryClient()
  const history = useHistory()
  const createSandwich = useMutation<Sandwich, SandwichError, Sandwich>(
    (values) => {
      return axios.post('/api/v1/sandwichs', values)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('sandwichs')
      },
    }
  )

  const handleSubmit = (
    values: Sandwich,
    { setSubmitting }: FormikHelpers<Sandwich>
  ) => {
    createSandwich.mutate(values)
    setSubmitting?.(false)
    history.push('/sandwichs')
  }

  return <SandwichForm onSubmit={handleSubmit} />
}

export default CreateSandwich
