import React from 'react'

function BasketItem({ item, products }) {
  return (
    <li className='basket-item'>
      {products.title} <span>x {item.amount}</span>
    </li>
  )
}

export default BasketItem
