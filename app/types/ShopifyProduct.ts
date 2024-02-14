export interface ShopifyProduct {
  admin_graphql_api_id: string
  body_html: string
  created_at: Date
  handle: string
  id: number
  image: Image
  images: Image[]
  options: Option[]
  product_type: string
  published_at: Date
  published_scope: PublishedScope
  status: Status
  tags: string
  template_suffix: null
  title: string
  updated_at: Date
  variants: Variant[]
}

export interface Image {
  admin_graphql_api_id: string
  alt: null
  created_at: Date
  height: number
  id: number
  position: number
  product_id: number
  src: string
  updated_at: Date
  variant_ids: any[]
  width: number
}

export interface Option {
  id: number
  name: Name
  position: number
  product_id: number
  values: Option1[]
}

export enum Name {
  Title = 'Title',
}

export enum Option1 {
  DefaultTitle = 'Default Title',
}

export enum PublishedScope {
  Global = 'global',
}

export enum Status {
  Active = 'active',
}

export interface Variant {
  admin_graphql_api_id: string
  barcode: null
  compare_at_price: null | string
  created_at: Date
  fulfillment_service: FulfillmentService
  grams: number
  id: number
  image_id: null
  inventory_item_id: number
  inventory_management: null
  inventory_policy: InventoryPolicy
  inventory_quantity: number
  old_inventory_quantity: number
  option1: Option1
  option2: null
  option3: null
  position: number
  price: string
  product_id: number
  requires_shipping: boolean
  sku: null
  taxable: boolean
  title: Option1
  updated_at: Date
  weight: number
  weight_unit: WeightUnit
}

export enum FulfillmentService {
  Manual = 'manual',
}

export enum InventoryPolicy {
  Deny = 'deny',
}

export enum WeightUnit {
  Kg = 'kg',
}
