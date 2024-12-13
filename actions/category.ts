"use server";

import { db } from "@/db";
import { categories } from "@/db/schema";
import { eq } from "drizzle-orm";


export async function getCategories() {
  const data = await db.select().from(categories);

  return data;
}

export async function getCategory(id: number) {
  const data = await await db
    .select()
    .from(categories)
    .where(eq(categories.id, id))
    .then((res) => res[0]);

  if (!data) {
    return null;
  }

  return data;
}
