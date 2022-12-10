import React from "react";
import BasketItem from "./BasketItem";
import { moneyFormat } from "../helpers";

function Basket({ basket, total, products, resetBasket }) {
  return (
    <>
      <div className="basket-container container">
        <div className="basket-header">
          <h3>Alışveriş Detayları</h3>
          <ul>
            {basket.map((item) => (
              <BasketItem
                key={item.id}
                item={item}
                products={products.find((p) => p.id === item.id)}
              />
            ))} 
          </ul>
        </div>
        <br />
        <div className="footer">
          <div className="total">
            Toplam: ${moneyFormat(total)}
          </div>
          <button className="basket-reset-btn" onClick={resetBasket}>Sepeti Sıfırla</button>  
        </div>
      </div>
    </>
  );
}

export default Basket;
