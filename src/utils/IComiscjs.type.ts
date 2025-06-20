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
