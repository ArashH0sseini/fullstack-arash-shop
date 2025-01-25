import React from "react";
import Container from "@/components/Container";
import ProductItem, { IProductItemProps } from "@/components/ProductItem";
import Link from "next/link";

async function Store() {

  const result = await fetch('http://localhost:3004/products')
  const data = await result.json() as IProductItemProps[]

  return (
    <Container>
      <h1 className="text-right py-4">خانه</h1>

      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => (
          <Link key={item.id} href={`/store/${item.id}`}>
            <ProductItem  {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Store;
