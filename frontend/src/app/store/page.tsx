import React from "react";
import Container from "@/components/Container";
import ProductItem from "@/components/ProductItem";

const Store = () => {
  const data = [
    {
      id: "1",
      image:
        "https://cdn.mos.cms.futurecdn.net/jGHehERQq4fhNFNTvZAhE9-320-80.png",
      title: "محصول یک",
      description: "توضیحات محصول توضیحات محصول توضیحات محصول",
      price: 20,
    },
    {
      id: "2",
      image: "https://m.media-amazon.com/images/I/61LdecwlWYL.jpg",
      title: "محصول دو",
      description: "توضیحات محصول توضیحات محصول توضیحات محصول",
      price: 55,
    },
    {
      id: "3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXbuFS1ErinLrTvKjdFafPEwcfcc4qcaCMw&s",
      title: "محصول سه",
      description: "توضیحات محصول توضیحات محصول توضیحات محصول",
      price: 46,
    },
    {
      id: "4",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBAp4v8odGO0qOmKvq2Kq2sjyS0E_BslG6w&s",
      title: "محصول چهار",
      description: "توضیحات محصول توضیحات محصول توضیحات محصول",
      price: 61,
    },
  ];
  return (
    <Container>
      <h1 className="text-right py-4">خانه</h1>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </Container>
  );
};

export default Store;
