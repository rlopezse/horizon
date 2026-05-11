import { z } from 'zod'

export const createProductSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  category: z.string().min(1, 'Category is required'),
  sku: z.string().min(1, 'SKU is required'),
  price: z.number().positive('Price must be positive'),
  currencyId: z.string().default('CLP'),
  currencyFormat: z.string().default('$'),
  isFreeShipping: z.boolean().default(false),
})

export const updateProductSchema = createProductSchema.partial()

export type CreateProductDto = z.infer<typeof createProductSchema>
export type UpdateProductDto = z.infer<typeof updateProductSchema>
