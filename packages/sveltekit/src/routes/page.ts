import type { PageLoad } from './$types';
import { loadData } from '$lib/modules/sanity';
import { queries } from '$lib/groq';
import type { Page } from '@sanity-types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({params}) => {
    const page: Page = await loadData(queries.singlePage, {slug: "curator"});
    return { page }
}) satisfies PageLoad;