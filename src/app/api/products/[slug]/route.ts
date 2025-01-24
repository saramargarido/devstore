import { z } from 'zod'
import data from '../data.json'

type Params = Promise<{ slug: string }>

export async function GET(_: Request, props: { params: Params }) {
  const params = await props.params
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const slug = z.string().parse(params.slug)

  const product = data.products.find((product) => product.slug === slug)

  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }
  return Response.json(product)
}
