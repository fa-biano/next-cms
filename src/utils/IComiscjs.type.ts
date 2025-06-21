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

interface ISubmenu {
  slug: string
  title: string
}

export interface ICosmicJSMenu {
  objects: ISubmenu[]
}

interface PageDetail {
  slug: string
  title: string
  content: string
  metadata: {
    banner: {
      url: string
      imgix_url: string
    }
    button: {
      title: string
      url: string
    }
    description: {
      title: string
      text: string
      banner: {
        url: string
        imgix_url: string
      }
      button_active: boolean
      button_title: string
      button_url: string
    }
  }
}

export interface ICosmicJSPageDetail {
  objects: PageDetail[]
}
