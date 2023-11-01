import { useNavigate } from 'react-router-dom'

export const useNavigateBack = () => {
  const navigate = useNavigate()

  const onNavigateBack = () => {
    navigate(-1)
  }

  return {
    onNavigateBack,
  }
}
