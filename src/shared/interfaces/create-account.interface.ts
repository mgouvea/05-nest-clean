import { z } from 'zod';

export const createAccountBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

export type CreateAccountRequest = z.infer<typeof createAccountBodySchema>;
