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
        <Image src="/featured.png" alt="Featured product" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
