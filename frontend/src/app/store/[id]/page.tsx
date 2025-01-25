import Container from "@/components/Container";
import React from "react";

const Product = () => {
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div>
          <h2 className="font-bold text-2xl">محصول اول</h2>

          <p>
            توضیحات محصول توضیحات محصول توضیحات محصول توضیحات محصول توضیحات
            محصول توضیحات محصول توضیحات محصول
          </p>

          <p className="font-bold">
            فیمت: <span>20$</span>
          </p>

          <div className="mt-4">
            <button className="px-4 py-2 rounded bg-sky-500 text-white">
              +
            </button>
            <span className="mx-4">3</span>
            <button className="px-4 py-2 rounded bg-sky-500 text-white">
              +
            </button>
          </div>
        </div>

        <div className="col-span-3">
          <img
            src="https://m.media-amazon.com/images/I/61LdecwlWYL.jpg"
            alt="product"
          />
        </div>
      </div>
    </Container>
  );
};

export default Product;
