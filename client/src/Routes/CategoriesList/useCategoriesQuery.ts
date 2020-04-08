import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"

const POLL_INTERVAL = 50 * 1000 // 50s

const CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      id
      name
      slug
      color
      icon
      children {
        id
        name
        slug
        color
        icon
      }
    }
  }
`

interface ICategoriesData {
  categories: Array<Category>
}

interface Category {
  id: string
  name: string
  slug: string
  color: string | null
  icon: string | null
  children: Array<ChildCategory>
}

interface ChildCategory {
  id: string
  name: string
  slug: string
  color: string | null
  icon: string | null
}

const useCategoriesQuery = () => {
  return useQuery<ICategoriesData>(CATEGORIES_QUERY, {
    pollInterval: POLL_INTERVAL,
  })
}

export default useCategoriesQuery