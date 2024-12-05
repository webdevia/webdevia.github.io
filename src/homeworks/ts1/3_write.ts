/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */
import { names, photos, nouns, adjectives, bankCategories, bankOperations } from './data';

type Category = {
  id: string;
  name: string;
  photo?: string;
};

type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};

export type Operation = Cost | Profit;

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

const getRandomItemFromArray = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomNumber = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomDescription = (nouns: string[], adjectives: string[]): string => {
  const someAdjectives = [...Array(50)].map(() => getRandomItemFromArray(adjectives)).join(' ');
  const noun = getRandomItemFromArray(nouns);
  return `${someAdjectives} ${noun}`;
};
const getRandomId = () => `${getRandomNumber(1000, 9999)}-${getRandomNumber(1000, 9999)}`;
const createRandomCategory = (): Category => ({
  id: getRandomId(),
  name: getRandomItemFromArray(bankCategories),
  photo: getRandomItemFromArray(photos),
});

const createRandomCost = (createdAt: string): Cost => ({
  id: getRandomId(),
  name: getRandomItemFromArray(bankOperations),
  desc: getRandomDescription(nouns, adjectives),
  createdAt,
  amount: getRandomNumber(-100, -1000),
  category: createRandomCategory(),
  type: 'Cost',
});

const createRandomProfit = (createdAt: string): Profit => ({
  id: getRandomId(),
  name: getRandomItemFromArray(bankOperations),
  desc: getRandomDescription(nouns, adjectives),
  createdAt,
  amount: getRandomNumber(100, 1000),
  category: createRandomCategory(),
  type: 'Profit',
});

export const createRandomOperation = (createdAt: string): Operation => {
  type OperationsMap = Record<number, (createdAt: string) => Operation>;
  const operationsMap: OperationsMap = {
    0: createRandomCost,
    1: createRandomProfit,
  };
  const randomNumber = getRandomNumber(0, Object.keys(operationsMap).length - 1);

  return operationsMap[randomNumber](createdAt);
};

export const createRandomProduct = (createdAt: string): Product => ({
  id: getRandomId(),
  name: getRandomItemFromArray(names),
  photo: getRandomItemFromArray(photos),
  desc: getRandomDescription(nouns, adjectives),
  createdAt,
  oldPrice: getRandomNumber(100, 1000),
  price: getRandomNumber(100, 1000),
  category: createRandomCategory(),
});

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};
