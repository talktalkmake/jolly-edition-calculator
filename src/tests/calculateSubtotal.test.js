import calculateSubtotal from "../functions/calculateSubtotal";
import formatOptions from "../reducers/formatOptions";

const exampleItem = {
 id: 0,
 name: 'Save-the-date',
 format: 'A6',
 fold: formatOptions['A6'].hasFold,
 envelope: false,
 hasStamp: false,
 addressPrint: false,
 letterpress: false,
 thickness: 1,
 edgePainting: false,
 foil: false,
 quantity: 1
}
const exampleItemAllEmbellishments = {
 id: 0,
 name: 'Save-the-date',
 format: 'A6', // 2
 fold: formatOptions['A6'].hasFold,
 envelope: true, // .50
 hasStamp: true, // .58
 addressPrint: '2-side', // 6
 letterpress: true, // 3
 thickness: 3, // 4
 edgePainting: true, // 1
 foil: true, // 3
 quantity: 1
} // 17.08

describe('Does the subtotal calculate correctly?', () => {
 it('Calculates base amount', () => {
  expect(calculateSubtotal(exampleItem, 1)).toEqual(2);
 })
 it('Calculates base amount for 103 sets', () => {
  expect(calculateSubtotal(exampleItem, 103)).toEqual(206);
 })
 it('all the embellishments are included', () => {
  expect(calculateSubtotal(exampleItemAllEmbellishments, 1)).toEqual(20.08);
 })
})