"use server";

import { db } from "@/db";
import { products, categories } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProducts() {
  const data = await db
    .select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id));

  return data;
}

export async function getProduct(id: string) {
  const data = await db
    .select()
    .from(products)
    .leftJoin(categories, eq(products.categoryId, categories.id))
    .where(eq(products.id, id))
    .then((res) => res[0]);

  if (!data) {
    return null;
  }

  return data;
}
