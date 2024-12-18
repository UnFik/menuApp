import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { products, categories } from "./schema";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const isProductAvailable = await db.select().from(products);
  const isCategoryAvailable = await db.select().from(categories);

  if (isProductAvailable.length > 0) {
    await db.delete(products);
  }
  if (isCategoryAvailable.length > 0) {
    await db.delete(categories);
  }

  await db.insert(categories).values([
    {
      id: 1,
      name: "Appetizer",
      description: "Hidangan pembuka untuk membangkitkan selera makan",
    },
    {
      id: 2,
      name: "Main Course", 
      description: "Hidangan utama yang menjadi sajian pokok dalam menu",
    },
    {
      id: 3,
      name: "Desert",
      description: "Hidangan penutup yang manis untuk mengakhiri santapan",
    },
    {
      id: 4,
      name: "Drinks",
      description: "Berbagai minuman segar dan menyegarkan",
    },
  ]);

  await db.insert(products).values([
    {
      name: "Spring Roll",
      description: "Lumpia sayur segar dengan saus asam manis",
      categoryId: 1,
      price: 25000,
      image: "/menu/spring-roll.jpg",
      rating: 4.5
    },
    {
      name: "Bruschetta", 
      description: "Roti panggang dengan topping tomat dan keju",
      categoryId: 1,
      price: 30000,
      image: "/menu/bruschetta.jpg",
      rating: 4.3
    },
    {
      name: "Caesar Salad",
      description: "Salad segar dengan saus caesar dan crouton",
      categoryId: 1,
      price: 35000,
      image: "/menu/caesar-salad.jpg",
      rating: 4.4
    },
    {
      name: "Nasi Goreng Special",
      description: "Nasi goreng dengan telur, ayam, dan sayuran",
      categoryId: 2,
      price: 45000,
      image: "/menu/nasi-goreng.jpg",
      rating: 4.8
    },
    {
      name: "Beef Steak",
      description: "Steak daging sapi dengan saus mushroom",
      categoryId: 2,
      price: 120000,
      image: "/menu/beef-steak.jpg",
      rating: 4.7
    },
    {
      name: "Spaghetti Carbonara",
      description: "Pasta dengan saus krim dan bacon",
      categoryId: 2,
      price: 65000,
      image: "/menu/spaghetti-carbonara.jpg",
      rating: 4.6
    },
    {
      name: "Grilled Salmon",
      description: "Ikan salmon panggang dengan saus lemon butter",
      categoryId: 2,
      price: 95000,
      image: "/menu/grilled-salmon.jpg",
      rating: 4.7
    },
    {
      name: "Chicken Katsu",
      description: "Ayam goreng tepung dengan saus tonkatsu",
      categoryId: 2,
      price: 55000,
      image: "/menu/chicken-katsu.jpg",
      rating: 4.5
    },
    {
      name: "Rendang",
      description: "Daging sapi masak rendang khas Padang",
      categoryId: 2,
      price: 75000,
      image: "/menu/rendang.jpg",
      rating: 4.9
    },
    {
      name: "Tom Yum Seafood",
      description: "Sup asam pedas khas Thailand dengan seafood",
      categoryId: 2,
      price: 85000,
      image: "/menu/tom-yum.jpg",
      rating: 4.6
    },
    {
      name: "Tiramisu",
      description: "Dessert klasik Italia dengan kopi dan mascarpone",
      categoryId: 3,
      price: 40000,
      image: "/menu/tiramisu.jpg",
      rating: 4.7
    },
    {
      name: "Chocolate Lava Cake",
      description: "Kue cokelat dengan lelehan cokelat di tengah",
      categoryId: 3,
      price: 45000,
      image: "/menu/chocolate-lava-cake.jpg",
      rating: 4.8
    },
    {
      name: "Crème Brûlée",
      description: "Custard vanilla dengan lapisan karamel renyah",
      categoryId: 3,
      price: 35000,
      image: "/menu/creme-brulee.jpg",
      rating: 4.5
    },
    {
      name: "Ice Cream Sundae",
      description: "Es krim dengan topping buah dan saus cokelat",
      categoryId: 3,
      price: 30000,
      image: "/menu/ice-cream-sundae.jpg",
      rating: 4.4
    },
    {
      name: "Fruit Parfait",
      description: "Campuran buah segar dengan yogurt dan granola",
      categoryId: 3,
      price: 35000,
      image: "/menu/fruit-parfait.jpg",
      rating: 4.3
    },
    {
      name: "Mango Sticky Rice",
      description: "Ketan dengan mangga dan santan",
      categoryId: 3,
      price: 35000,
      image: "/menu/mango-sticky-rice.jpg",
      rating: 4.6
    },
    {
      name: "Espresso",
      description: "Kopi hitam pekat single shot",
      categoryId: 4,
      price: 20000,
      image: "/menu/espresso.jpg",
      rating: 4.5
    },
    {
      name: "Cappuccino",
      description: "Espresso dengan steamed milk dan foam",
      categoryId: 4,
      price: 25000,
      image: "/menu/cappuccino.jpg",
      rating: 4.6
    },
    {
      name: "Green Tea Latte",
      description: "Matcha dengan susu panas",
      categoryId: 4,
      price: 28000,
      image: "/menu/green-tea-latte.jpg",
      rating: 4.4
    },
    {
      name: "Fresh Orange Juice",
      description: "Jus jeruk segar",
      categoryId: 4,
      price: 20000,
      image: "/menu/orange-juice.jpg",
      rating: 4.3
    },
    {
      name: "Mango Smoothie",
      description: "Smoothie mangga dengan yogurt",
      categoryId: 4,
      price: 25000,
      image: "/menu/mango-smoothie.jpg",
      rating: 4.5
    },
    {
      name: "Lemon Tea",
      description: "Teh dengan perasan lemon segar",
      categoryId: 4,
      price: 18000,
      image: "/menu/lemon-tea.jpg",
      rating: 4.2
    },
    {
      name: "Calamari Rings",
      description: "Cumi goreng tepung dengan saus tartar",
      categoryId: 1,
      price: 40000,
      image: "/menu/calamari.jpg",
      rating: 4.4
    },
    {
      name: "Mushroom Soup",
      description: "Sup krim jamur dengan crouton",
      categoryId: 1,
      price: 35000,
      image: "/menu/mushroom-soup.jpg",
      rating: 4.3
    },
    {
      name: "Fish and Chips",
      description: "Ikan dori goreng tepung dengan kentang goreng",
      categoryId: 2,
      price: 65000,
      image: "/menu/fish-and-chips.jpg",
      rating: 4.5
    },
    {
      name: "Beef Burger",
      description: "Burger daging sapi dengan keju dan sayuran",
      categoryId: 2,
      price: 55000,
      image: "/menu/beef-burger.jpg",
      rating: 4.6
    },
    {
      name: "Apple Pie",
      description: "Pie apel dengan es krim vanilla",
      categoryId: 3,
      price: 35000,
      image: "/menu/apple-pie.jpg",
      rating: 4.4
    },
    {
      name: "Cheesecake",
      description: "Kue keju New York style",
      categoryId: 3,
      price: 40000,
      image: "/menu/cheesecake.jpg",
      rating: 4.7
    },
    {
      name: "Mojito",
      description: "Minuman segar dengan mint dan lime",
      categoryId: 4,
      price: 35000,
      image: "/menu/mojito.jpg",
      rating: 4.5
    },
    {
      name: "Milkshake",
      description: "Milkshake vanilla dengan whipped cream",
      categoryId: 4,
      price: 30000,
      image: "/menu/milkshake.jpg",
      rating: 4.4
    }
  ]);

  console.log("Products created!");

  const product = await db.select().from(products);
  console.log("Getting all products from the database: ", product);

  process.exit(0);
}

main();
