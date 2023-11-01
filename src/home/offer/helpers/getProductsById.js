import { offer } from '../../../helpers/getOffer'

export const getProductsById = (id) => {
  const otro = offer.find((product) => product.name === id)
  return otro
}
