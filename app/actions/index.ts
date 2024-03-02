'use server'
import { cookies } from 'next/headers'
import { GraphQLClientSingleton } from '../graphql'
import { createUserMutation } from '../graphql/mutations/createUserMutation'
import { createAccessToken } from '../utils/auth/createAccessToken'
import { redirect } from 'next/navigation'
import { validateAccessToken } from '../utils/auth/validateAccessToken'
import { CartItem } from '../types/ShoopingCart'
import { createCartMutation } from '../graphql/mutations/createCartMutation'

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

  const { customer } = customerCreate
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

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies()
  const accesToken = cookiesStore.get('accessToken')?.value as string

  if (!accesToken) redirect('/login')

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const customer = await validateAccessToken()
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email,
      },
      lines: items.map((item) => ({
        merchandiseId: item.product.gql_id,
        quantity: item.quantity,
      })),
    },
  }

  const {
    cartCreate,
  }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string
      }
    }
  } = await graphqlClient.request(createCartMutation, variables)

  return cartCreate?.cart?.checkoutUrl
}
