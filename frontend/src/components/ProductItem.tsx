import React from 'react'

interface IProductItemProps {
    id:string,
    image:string
    title:string,
    description:string,
    price:number
  }
const ProductItem = ({image,title,price}:IProductItemProps) => {
  return (
    <div className="shadow-md">
    <img src={image} alt="product" />

    <div className="p-2 text-right">
      <h3 className="font-bold">{title}</h3>
      <p>قیمت: <span>{price}$</span></p>
    </div>
  </div>
  )
}

export default ProductItem