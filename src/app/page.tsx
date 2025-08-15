import Image from "next/image";
import ProductList from "@/components/organisms/ProductList";

const Homepage = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const category = (await searchParams).category;
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
        <Image
          src="/featured.png"
          alt="Featured product"
          fill
          // className="w-20 h-20 object-cover"
        />
      </div>
      <ProductList category={category} />
    </div>
  );
};

export default Homepage;
