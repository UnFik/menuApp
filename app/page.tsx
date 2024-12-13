import { getCategories } from '@/actions/category';
import { getProducts } from '@/actions/product'
import ProductPage from '@/components/product-page'
import { unstable_noStore as noStore } from "next/cache";

export default async function Page() {
  const products = await getProducts();
  const categories = await getCategories() 

  noStore();
  return <ProductPage products={products} categories={categories}/>
}

