import { redirect } from 'next/navigation'
import { ICosmicJSMenu, ICosmicJSPageDetail, ICosmicJSResponse } from '../IComiscjs.type'

const { NEXT_PUBLIC_COSMICJS_API_URL, COSMICJS_READ_KEY } = process.env
const BASE_URL = `${NEXT_PUBLIC_COSMICJS_API_URL}/objects`
const READ_KEY_PARAM = `read_key=${COSMICJS_READ_KEY}`

export const getHomeData = async (): Promise<ICosmicJSResponse> => {
  const urlParams = '6855a8dc09ddeb8ec623bc44?pretty=true'
  const url = `${BASE_URL}/${urlParams}&${READ_KEY_PARAM}&depth=1&props=slug,title,metadata,type`

  try {
    const response = await fetch(url, { next: { revalidate: 120 } })

    if (!response.ok) throw new Error('Failed to fetch data')
    return response.json()
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw new Error('Failed to fetch data')
  }
}

export const getSubmenuData = async (): Promise<ICosmicJSMenu> => {
  const urlParams = 'pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0'
  const url = `${BASE_URL}?${urlParams}&${READ_KEY_PARAM}&depth=1&props=slug,title`

  try {
    const response = await fetch(url, { next: { revalidate: 120 } })

    if (!response.ok) throw new Error('Failed to fetch menu data')
    return response.json()
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw new Error('Failed to fetch menu data')
  }
}

export const getPageBySlug = async (slug: string): Promise<ICosmicJSPageDetail> => {
  const queryParams = new URLSearchParams({
    query: JSON.stringify({ slug }),
    props: 'slug,title,content,metadata',
    read_key: COSMICJS_READ_KEY || '',
  })

  const url = `${BASE_URL}?${queryParams.toString()}`

  try {
    const response = await fetch(url, { next: { revalidate: 120 } })
    if (!response.ok) throw new Error('Failed to fetch page by slug')
    return response.json()
  } catch (error) {
    console.log('error', error)
    redirect('/')
  }
}
