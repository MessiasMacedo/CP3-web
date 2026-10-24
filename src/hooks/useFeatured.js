import { useQuery } from '@tanstack/react-query'
import { fetchFeatured } from '../services/featured'

export function useFeatured() {
  return useQuery({ queryKey: ['featured'], queryFn: fetchFeatured })
}
