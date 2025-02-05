import { z } from 'zod';

export const CreateZodDtoSchema = z
  .object({
    name: z.string(),
    description: z.string().min(3).max(10),
    area: z.number().positive(),
  })
  .required();

export type CreateZodDto = z.infer<typeof CreateZodDtoSchema>;
