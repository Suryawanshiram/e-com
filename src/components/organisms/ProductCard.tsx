"use client";

import { ProductTypes } from "@/types/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProductCard({ product }: { product: ProductTypes }) {
  const [productType, setProductType] = useState({
    size: product.sizes[0],
    color: product.colors[0],
  });

  const handleProductType = ({
    type,
    value,
  }: {
    type: "size" | "color";
    value: string;
  }) => {
    setProductType((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image
            src={product.images[productType.color]}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      {/* { PRODUCT DETAILS} */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium text-base">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
        {/* {PRODUCT TYPES} */}
        <div className="flex items-center gap-3 text-sm">
          {/* {SIZES} */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Sizes</span>
            <select
              name="size"
              id="size"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
              className="ring ring-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
          {/* {COLORS} */}
          <div className="flex flex-col gap-1">
            <span className="text-gray-500">Color</span>
            <div className="flex items-center gap-1">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className={`cursor-pointer border-1 ${
                    productType.color === color
                      ? "border-gray-400"
                      : "border-gray-200"
                  } rounded-full p-[1.2px]`}
                  onClick={() =>
                    handleProductType({ type: "color", value: color })
                  }
                >
                  <div
                    className="w-[14px] h-[14px] rounded-full"
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*PRICE AND ADD TO CART */}
        <div className="flex items-center justify-between gap-1">
          <p className="font-medium"> ${product.price.toFixed(2)}</p>
          <button className="bg-gray-200 text-sm text-gray-500 rounded-md px-2 py-1.5 ring-gray-200 ring-1 cursor-pointer hover:text-white hover:bg-black transition-all duration-30 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
