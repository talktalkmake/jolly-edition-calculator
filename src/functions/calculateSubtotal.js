import formatOptions from "../reducers/formatOptions";
import embellishments from '../functions/embellishments';

const calculateSubtotal = (item, quantity) => {
  let subTotal = 0
  subTotal += formatOptions[item.format].costPerPrint
  if (item.envelope)
    subTotal += .5
  if (item.addressPrint)
    subTotal += item.addressPrint === '1-side' ? (embellishments.addressPrint.costPerPrint) : (embellishments.addressPrint.costPerPrint * 2)
  if (item.hasStamp)
    subTotal += .58
  if (item.foil)
    subTotal += embellishments.foil.costPerPrint
  if (item.letterpress)
    subTotal += embellishments.letterpress.costPerPrint
  if (item.edgePainting)
    subTotal += embellishments.edgePainting.costPerPrint
  if (item.thickness > 1)
    subTotal += ((item.thickness * formatOptions[item.format].costPerPrint) - formatOptions[item.format].costPerPrint)
  return subTotal * quantity
}

export default calculateSubtotal;