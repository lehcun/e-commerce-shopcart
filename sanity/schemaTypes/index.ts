import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './catagoryType'
import { addressType } from './addressType'
import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { blogCategoryType } from './blogCategoryType'
import { brandType } from './brandType'
import { orderType } from './orderType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    addressType,
    authorType,
    blockContentType,
    blogCategoryType,
    brandType,
    orderType,
    productType,
  ],
}
