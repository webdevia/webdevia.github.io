import { z } from 'zod';

export const ChangeProfileSchema = z.object({
  name: z.string().nonempty('Обязательное поле'),
  description: z.string(),
});

export type ChangeProfileSchemaType = z.infer<typeof ChangeProfileSchema>;

const passwordZodType = z.string().nonempty('Обязательное поле').min(6, 'Слишком короткий пароль');

export const ChangePasswordSchema = z
  .object({
    password: passwordZodType,
    newPassword: passwordZodType,
    confirmPassword: passwordZodType,
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Пароли не совпадают',
    path: ['confirmPassword'],
  });

export type ChangePasswordSchemaType = z.infer<typeof ChangePasswordSchema>;
