import React from "react";
import ProductList from "@/components/organisms/ProductList";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div>
      <ProductList category={category} />
    </div>
  );
};

export default ProductsPage;
