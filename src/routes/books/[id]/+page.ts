import { api } from '$lib'
import { error, redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {
  const { data, status } = await api.getBook(params.id)

  if (status == 404) {
    throw redirect(308, '/')
  }

  if (status == 500) {
    throw error(status, data.details)
  }

  return { book: data };
}
