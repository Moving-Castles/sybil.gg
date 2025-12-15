import {createClient} from '@sanity/client'
import {toHTML, type PortableTextComponents} from '@portabletext/to-html'
import imageUrlBuilder from '@sanity/image-url'
import {SANITY_ID} from '$lib/constants'

export const client = createClient({
  projectId: SANITY_ID,
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2024-09-09',
})

const components: PortableTextComponents = {
  marks: {
    link: ({children, value}) =>
      `<a target="_blank" rel="noreferrer" href="${value?.href}">${children}</a>`,
  },
  block: {
    blockquote: ({children}) => `<blockquote>${children}</blockquote>`,
    normal: ({children}) => `<p>${children}</p>`,
    h1: ({children}) => `<p class="h1">${children}</p>`,
    h2: ({children}) => `<p class="h2">${children}</p>`,
    h3: ({children}) => `<p class="h3">${children}</p>`,
    h4: ({children}) => `<p class="h4">${children}</p>`,
  },
}

export const renderBlockText = (blocks: any) => toHTML(blocks, {components})

export const toPlainText = (blocks: any) => {
  return blocks
    .map((block: any) => {
      if (block._type !== 'block' || !block.children) {
        return ''
      }
      return block.children.map((child: any) => child.text).join('')
    })
    .join('\n\n')
}

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

export const loadData = async (query: string, params: any) => {
  try {
    const res = await client.fetch(query, params)
    if (res === null) {
      return Promise.reject(new Error('404'))
    }
    return res
  } catch (err) {
    return Promise.reject(new Error('404'))
  }
}
