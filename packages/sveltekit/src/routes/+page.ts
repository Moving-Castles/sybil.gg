import type {PageLoad} from './$types'
import {loadData} from '$lib/modules/sanity'
import {queries} from '$lib/groq'
import type {FrontPage} from '@sanity-types'

/** @type {import('./$types').PageLoad} */
export const load = (async ({params}) => {
  const frontPage: FrontPage = await loadData(queries.frontPage, {})
  return {frontPage}
}) satisfies PageLoad
