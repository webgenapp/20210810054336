import React from 'react'
import { Formik, Field, Form, FormikHelpers } from 'formik'
import { Icecream } from '../types'

type CreateProps = {
  icecream?: Icecream
  onSubmit: (values: Icecream, helpers: FormikHelpers<Icecream>) => void
}

function IcecreamForm({ icecream, onSubmit }: CreateProps) {
  const initialValues: Icecream = {
    price: icecream ? icecream.price : '',
    flavour: icecream ? icecream.flavour : '',
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

          <Field type='text' name='flavour' placeholder='Flavour' />

          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default IcecreamForm
