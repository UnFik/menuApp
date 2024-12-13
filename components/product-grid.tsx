import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { StarIcon } from 'lucide-react'
import { ProductWithCategory } from '@/types'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '@/components/ui/button'
import { addToCart } from "@/actions/cart"
import { useRouter } from 'next/navigation'
import { useCart } from "@/contexts/cart-context"

interface ProductGridProps {
  products: ProductWithCategory[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const router = useRouter()
  const { updateCartCount } = useCart()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Drawer key={product.products.id}>
          <DrawerTrigger asChild>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={product.products.image}
                    alt={product.products.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.products.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.products.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Rp {product.products.price.toLocaleString('id-ID')}</span>
                  <Badge variant="secondary">
                    <StarIcon className="w-4 h-4 mr-1" />
                    {product.products.rating}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </DrawerTrigger>
          
          <DrawerContent>
            <div className="mx-auto w-full max-w-2xl">
              <DrawerHeader>
                <DrawerTitle className="text-2xl">{product.products.name}</DrawerTitle>
              </DrawerHeader>
              
              <div className="px-4">
                <div className="mt-4 grid gap-4">
                  <div className="aspect-video relative">
                    <Image
                      src={product.products.image}
                      alt={product.products.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-gray-600">{product.products.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold">
                        Rp {product.products.price.toLocaleString('id-ID')}
                      </span>
                      <Badge variant="secondary" className="text-lg px-3 py-1">
                        <StarIcon className="w-5 h-5 mr-1" />
                        {product.products.rating}
                      </Badge>
                    </div>

                    <p className="text-sm text-gray-500">
                      Kategori: {product.categories?.name}
                    </p>
                  </div>
                </div>
              </div>
              
              <DrawerFooter>
                <Button onClick={async() => {
                  addToCart({
                    id: product.products.id,
                    name: product.products.name,
                    price: product.products.price,
                    image: product.products.image,
                    quantity: 1
                  })
                  updateCartCount()
                  router.refresh()
                }}>
                  Tambah ke Keranjang
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline">Tutup</Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  )
}

