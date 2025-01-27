import { IDatabase } from './Database';
import { User, Product } from './Entities';

export interface IDiscountService {
  loadDiscounts(table: string): Promise<void>;
  saveDiscounts(table: string): Promise<void>;
  getDiscount(table: string, field: string): number;
  setDiscount(table: string, field: string, value: number): void;
  totalDiscount(...args: number[]): number;
}

type Discount = Record<string, number>;

export class DiscountService implements IDiscountService {
  private database: IDatabase;
  private discounts: Record<string, Discount> = {};
  private maxDiscountValue = 100;
  private minDiscountValue = 0;

  constructor(db: IDatabase) {
    this.database = db;
  }

  private getValidDiscount(value: number) {
    return value < this.minDiscountValue
      ? this.minDiscountValue
      : value > this.maxDiscountValue
      ? this.maxDiscountValue
      : value;
  }

  async loadDiscounts(table: string) {
    try {
      this.discounts[table] = await this.database.load<Discount>(table);
    } catch (error) {
      this.discounts[table] = {};
      throw new Error(`Failed to load ${table} discounts`);
    }
  }

  async saveDiscounts(table: string) {
    try {
      await this.database.save<Discount>(table, this.discounts[table]);
    } catch (error) {
      console.error(`Failed to save ${table} discounts:`, error);
    }
  }

  getDiscount(table: string, field: string) {
    return this.discounts[table]?.[field] ?? 0;
  }

  setDiscount(table: string, field: string, value: number) {
    if (!this.discounts[table]) {
      this.discounts[table] = {};
    }
    this.discounts[table][field] = this.getValidDiscount(value);
  }

  totalDiscount(...args: number[]) {
    return this.getValidDiscount(args.reduce((x, y) => x + y, 0));
  }
}

abstract class BaseDiscount {
  protected discountService: IDiscountService;
  protected discountTable: string;

  constructor(discountService: IDiscountService, discountTable: string) {
    this.discountService = discountService;
    this.discountTable = discountTable;
  }

  async loadDiscounts() {
    await this.discountService.loadDiscounts(this.discountTable);
  }

  async saveDiscounts() {
    await this.discountService.saveDiscounts(this.discountTable);
  }

  getDiscount(field: string) {
    return this.discountService.getDiscount(this.discountTable, field);
  }

  setDiscount(field: string, value: number) {
    this.discountService.setDiscount(this.discountTable, field, value);
  }
}

export class UserDiscount extends BaseDiscount {
  constructor(discountService: IDiscountService) {
    super(discountService, 'user_discount');
  }

  getUserDiscount(user: User) {
    return this.getDiscount(user);
  }

  setUserDiscount(user: User, value: number) {
    this.setDiscount(user, value);
  }
}

export class UserProductDiscount extends BaseDiscount {
  constructor(discountService: IDiscountService) {
    super(discountService, 'user_product_discount');
  }

  getUserProductDiscount(user: User, product: Product) {
    return this.getDiscount(`${user}_${product}`);
  }

  setUserProductDiscount(user: User, product: Product, value: number) {
    this.setDiscount(`${user}_${product}`, value);
  }
}
