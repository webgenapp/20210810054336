import React from 'react'
import { useQueryClient, useQuery, useMutation } from 'react-query'
import axios from 'axios'
import { Sandwich } from '../types'
import { useHistory } from 'react-router-dom'

type SandwichPreviewProps = {
  sandwich: Sandwich
  handleEdit: (sandwich: Sandwich) => void
  handleDelete: (sandwich: Sandwich) => void
  handleDetail: (sandwich: Sandwich) => void
}

function SandwichPreview({
  sandwich,
  handleEdit,
  handleDelete,
  handleDetail,
}: SandwichPreviewProps) {
  return (
    <>
      {sandwich.price}
      <br />
      <button type='button' onClick={() => handleDetail(sandwich)}>
        detail
      </button>
      <button type='button' onClick={() => handleEdit(sandwich)}>
        edit
      </button>
      <button type='button' onClick={() => handleDelete(sandwich)}>
        delete
      </button>
    </>
  )
}

function ListSandwichs() {
  const history = useHistory()
  const queryClient = useQueryClient() // eslint-disable-line no-unused-vars
  const sandwichsQuery = useQuery<Sandwich[]>('sandwichs', () => {
    return axios
      .get('/api/v1/sandwichs')
      .then((response) => response.data) as Promise<Sandwich[]>
  })

  const deleteSandwich = useMutation<any, any, Partial<Sandwich>>(
    ({ id }) => {
      return axios.delete(`/api/v1/sandwichs/${id}`)
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('sandwichs')
      },
    }
  )

  const handleEdit = ({ id }: Sandwich) => {
    history.push(`/sandwichs/update/${id}`)
  }

  const handleDelete = ({ id }: Sandwich) => {
    deleteSandwich.mutate({ id })
  }

  const handleDetail = ({ id }: Sandwich) => {
    history.push(`/sandwichs/detail/${id}`)
  }

  return (
    <>
      <p>{sandwichsQuery.data?.length} sandwichs</p>
      <ul>
        {sandwichsQuery.data?.map((sandwich) => (
          <li key={sandwich.id}>
            <SandwichPreview
              sandwich={sandwich}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleDetail={handleDetail}
            />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ListSandwichs
