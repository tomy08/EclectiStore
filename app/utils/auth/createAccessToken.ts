import { GraphQLClientSingleton } from '@/app/graphql'
import { customerAccessTokenCreateMutation } from '@/app/graphql/mutations/customerAccessTokenCreate'
import { cookies } from 'next/headers'

export const createAccessToken = (email: string, password: string) => {
  const cookiesStore = cookies()
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customerAccessTokenCreate } = graphqlClient.request(
    customerAccessTokenCreateMutation,
    {
      email,
      password,
    }
  )
  const { accessToken, expiresAt } =
    customerAccessTokenCreate.customerAccessToken

  if (accessToken) {
    cookiesStore.set('accessToken', accessToken, {
      expires: new Date(expiresAt),
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
    })
  }
}
