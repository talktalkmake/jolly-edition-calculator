import formatOptions from "../reducers/formatOptions";
import embellishments from '../functions/embellishments';
import { STAMP_COST } from "../constants";
import { ENVELOPE_COST } from "../constants";

const calculateSubtotal = ({ format, envelope, addressPrint, hasStamp, foil, letterpress, edgePainting, thickness }, quantity) => {
  let subTotal = 0
  subTotal += formatOptions[format].costPerPrint
  if (envelope)
    subTotal += ENVELOPE_COST
  if (addressPrint)
    subTotal += addressPrint === '1-side' ? (embellishments.addressPrint.costPerPrint) : (embellishments.addressPrint.costPerPrint * 2)
  if (hasStamp)
    subTotal += STAMP_COST
  if (foil)
    subTotal += embellishments.foil.costPerPrint
  if (letterpress)
    subTotal += embellishments.letterpress.costPerPrint
  if (edgePainting)
    subTotal += embellishments.edgePainting.costPerPrint
  if (thickness > 1)
    subTotal += ((thickness * formatOptions[format].costPerPrint) - formatOptions[format].costPerPrint)
  return subTotal * quantity
}

export default calculateSubtotal;