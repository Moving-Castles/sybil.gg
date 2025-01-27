/** 
 *  GROQ queries for Sanity CMS
 *  https://www.sanity.io/docs/groq
 */
export const queries = {
    singlePage: '*[_type == "page" && slug.current == $slug][0]',
}