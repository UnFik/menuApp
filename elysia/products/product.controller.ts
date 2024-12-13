import Elysia from "elysia";
import { ProductService } from "./product.service";

const productController = new Elysia({
  prefix: "/product",
}).get("", async () => {
  const data = await ProductService.getAll();
  return data;
}).get("/:id", async ({ params }) => {
  const data = await ProductService.find(params.id);
  return data;
});

export default productController;
