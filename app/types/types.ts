export interface Product {
  category: Category
  creationAt: Date
  description: string
  id: number
  images: string[]
  price: number
  title: string
  updatedAt: Date
}

export interface Category {
  creationAt: Date
  id: number
  image: string
  name: Name
  updatedAt: Date
}

export enum Name {
  Electronics = 'Electronics',
  Miscellaneous = 'Miscellaneous',
  NuevoTitulo = 'Nuevo titulo',
  Shoes = 'Shoes',
  TShirt = 'T-Shirt',
}
