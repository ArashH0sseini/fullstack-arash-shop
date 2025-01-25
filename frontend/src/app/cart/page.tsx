import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";

function Cart() {
  return (
    <Container>
      <h1 className="text-right my-4">سبد خرید</h1>

      <div>
          <CartItem />
          <CartItem />
          <CartItem />

          <div className="border shadow-md text-right p-4">
            <h3>قیمت کل: <span>77$</span></h3>
            <h3>سود شما از این خرید: <span>77$</span></h3>
            <h3>قیمت نهایی: <span>77$</span></h3>

            <div>
              <input className="text-right border" placeholder="کدتخفیف را وارد نمایید" type="text" />
              <button className="bg-sky-600 text-white px-4 py-1 rounded">اعمال</button>
            </div>
          </div>
      </div>
    </Container>
  );
}

export default Cart;
