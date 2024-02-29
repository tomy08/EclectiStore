'use server'
import { GraphQLClientSingleton } from '../graphql'
import { createUserMutation } from '../graphql/mutations/createUserMutation'
import { createAccessToken } from '../utils/auth/createAccessToken'
import { redirect } from 'next/navigation'

export async function handleCreateUser(fd: FormData) {
  const formDataObject = Object.fromEntries(fd)

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()

  const variables = {
    input: {
      ...formDataObject,
      phone: `+54${formDataObject.phone}`,
    },
  }

  const { customerCreate }: any = await graphqlClient.request(
    createUserMutation,
    variables
  )

  const { customerUserErrors, customer } = customerCreate
  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    )
    redirect('/store')
  }
}

export async function handleLoginUser(fd: FormData) {
  const formDataObject = Object.fromEntries(fd)

  const accessToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  )
  if (accessToken) {
    redirect('/store')
  }
}
