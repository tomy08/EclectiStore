import { GraphQLClientSingleton } from '@/app/graphql'
import { cookies } from 'next/headers'
import { customerName } from '@/app/graphql/queries/customerName'

export const validateAccessToken = async () => {
  const cookiesStore = cookies()
  const accessToken = cookiesStore.get('accessToken')?.value

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()

  const { customer }: any = await graphqlClient.request(customerName, {
    customerAccessToken: accessToken,
  })

  return customer
}
