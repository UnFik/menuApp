import { db } from "@/db";
import { products } from "@/db/schema";
import type { ProductTypeInsert, ProductTypeSelect } from "./product.schema";
import { eq } from "drizzle-orm";
import { NotFoundError } from "elysia";

export abstract class ProductService {
  static async getAll() {
    return await db.select().from(products);
  }

  static async find(id: string) {
    const product = await db.select().from(products).where(eq(products.id, id));

    if (!product) {
      throw new NotFoundError();
    }

    return product;
  }
}
