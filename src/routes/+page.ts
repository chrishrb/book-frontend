import { api } from '$lib'

export const load: PageLoad = async ({ fetch }) => {
  const { data } = await api.getBooks()
  
  return { books: data };
}
