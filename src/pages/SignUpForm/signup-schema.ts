import { z } from 'zod';

export const SignUpSchema = z.object({
  email: z.string().nonempty('Обязательное поле').email('Неправильный Email'),
  password: z.string().nonempty('Обязательное поле').min(6, 'Слишком короткий пароль'),
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
