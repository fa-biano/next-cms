import { ICosmicJSMenu, ICosmicJSResponse } from '../IComiscjs.type'
const { NEXT_PUBLIC_COSMICJS_API_URL, COSMICJS_READ_KEY } = process.env

export const getHomeData = async (): Promise<ICosmicJSResponse> => {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_COSMICJS_API_URL}/objects/6855a8dc09ddeb8ec623bc44?pretty=true&read_key=${COSMICJS_READ_KEY}&depth=1&props=slug,title,metadata,type`,
      { next: { revalidate: 120 }},
    )

    if (!response.ok) throw new Error('Failed to fetch data')
    return response.json()
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw new Error('Failed to fetch data')
  }
}

export const getSubmenuData = async (): Promise<ICosmicJSMenu> => {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_COSMICJS_API_URL}/objects?pretty=true&query=%7B%22type%22:%22pages%22%7D&limit=10&skip=0&read_key=${COSMICJS_READ_KEY}&depth=1&props=slug,title`,
      { next: { revalidate: 120 }},
    )

    if (!response.ok) throw new Error('Failed to fetch menu data')
    return response.json()
  } catch (error) {
    console.log('error', JSON.stringify(error, null, 2))
    throw new Error('Failed to fetch menu data')
  }
}
