import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Sandwich } from '../types'

type CreateProps = {
  sandwich?: Sandwich
  onSubmit: (values: Sandwich, helpers: FormikHelpers<Sandwich>) => void
}

function SandwichForm({ sandwich, onSubmit }: CreateProps) {
  const initialValues: Sandwich = {
    price: sandwich ? sandwich.price : '',
    type: sandwich ? sandwich.type : '',
    warm: sandwich ? sandwich.warm : '',
  }

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {
        return {}
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='text' name='price' placeholder='Price' />

          <Field type='text' name='type' placeholder='Type' />

          <Field type='text' name='warm' placeholder='Warm' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default SandwichForm
