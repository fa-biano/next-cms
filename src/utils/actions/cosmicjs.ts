interface IServices {
  image: {
    url: string
    imgix_url: string
  }
  description: string      
}

export interface ICosmicJSResponse {
  object: {
    slug: string
    title: string
    type: string
    metadata: {
      banner: {
        url: string
        imgix_url: string
      }
      heading: string
      cta_button: {
        title: string
        url: string
      }
      about: {
        description: string
        banner: {
          url: string
          imgix_url: string
        }
      }
      services: IServices[]
      contact: {
        email: string
        phone: string
        address: string
        time: string
      }
    }
  }
}

export const getHomeData = async (): Promise<ICosmicJSResponse> => {
  const { NEXT_PUBLIC_COSMICJS_API_URL, COSMICJS_READ_KEY } = process.env
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_COSMICJS_API_URL}/objects/6855a8dc09ddeb8ec623bc44?pretty=true&read_key=${COSMICJS_READ_KEY}&depth=1&props=slug,title,metadata,type`
    )

    if (!response.ok) throw new Error('Failed to fetch data')
    return response.json()
  } catch (error) {
    console.dir(error, { depth: 4 })
    throw new Error('Failed to fetch data')
  }
}
