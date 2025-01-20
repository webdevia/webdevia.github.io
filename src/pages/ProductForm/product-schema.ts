import { z } from 'zod';

export const ProductSchema = z.object({
  name: z.string().nonempty('Обязательное поле'),
  photo: z.string().url('Некорректный URL').nonempty('Обязательное поле'),
  desc: z.string().optional(),
  createdAt: z.string().nonempty('Обязательное поле'),
  oldPrice: z
    .number({ invalid_type_error: 'Некорректное значение, введите 0 если значение отсутстувет' })
    .min(0, 'Сумма должна быть 0 или больше')
    .default(0),
  price: z.number({ invalid_type_error: 'Обязательное поле' }).positive('Сумма должна быть больше 0'),
  category: z.string().nonempty('Обязательное поле'),
});

export type ProductSchemaType = z.infer<typeof ProductSchema>;
