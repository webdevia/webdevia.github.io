import { IDatabase } from './Database';
import { IDiscountService, DiscountService } from './DiscountService';
import { AccountService } from './AccountService';
import { Product, User } from './Entities';

class MockDatabase implements IDatabase {
  private data: Map<string, unknown> = new Map();

  async save<T>(key: string, value: T): Promise<boolean> {
    this.data.set(key, value);
    return true;
  }

  async load<T>(key: string): Promise<T> {
    const value = this.data.get(key);
    if (value === undefined) {
      throw new Error('Table not found');
    }
    return { ...(value as T) };
  }
}

describe('AccountService', () => {
  let discountService: IDiscountService;
  let accountService: AccountService;

  beforeEach(() => {
    const db = new MockDatabase();
    discountService = new DiscountService(db);
    accountService = new AccountService(discountService);
  });

  test('should throw table not found error', async () => {
    try {
      await accountService.userDiscount.loadDiscounts();
    } catch (e) {
      expect(e.message).toBe('Failed to load user_discount discounts');
    }
  });

  test('should throw table not found error', async () => {
    try {
      await accountService.userDiscount.loadDiscounts();
    } catch (e) {
      expect(e.message).toBe('Failed to load user_discount discounts');
    }
  });

  test('should set and get user discount', async () => {
    await accountService.userDiscount.setUserDiscount(User.Standard, 10);
    await accountService.userDiscount.saveDiscounts();
    await accountService.userDiscount.loadDiscounts();

    expect(accountService.userDiscount.getUserDiscount(User.Standard)).toBe(10);
  });

  test('should get user discount = 0 for negative value', async () => {
    await accountService.userDiscount.setUserDiscount(User.Standard, -10);
    await accountService.userDiscount.saveDiscounts();
    await accountService.userDiscount.loadDiscounts();

    expect(accountService.userDiscount.getUserDiscount(User.Standard)).toBe(0);
  });

  test('should calculate user discount = 100 for value > 100', async () => {
    await accountService.userDiscount.setUserDiscount(User.Standard, 200);
    await accountService.userDiscount.saveDiscounts();
    await accountService.userDiscount.loadDiscounts();

    expect(accountService.userDiscount.getUserDiscount(User.Standard)).toBe(100);
  });

  test('should set and get user product discount', async () => {
    await accountService.userProductDiscount.setUserProductDiscount(User.Standard, Product.Car, 10);
    await accountService.userProductDiscount.saveDiscounts();
    await accountService.userProductDiscount.loadDiscounts();

    expect(accountService.userProductDiscount.getUserProductDiscount(User.Standard, Product.Car)).toBe(10);
  });

  test('should get user product discount = 0 for negative value', async () => {
    await accountService.userProductDiscount.setUserProductDiscount(User.Standard, Product.Car, -10);
    await accountService.userProductDiscount.saveDiscounts();
    await accountService.userProductDiscount.loadDiscounts();

    expect(accountService.userProductDiscount.getUserProductDiscount(User.Standard, Product.Car)).toBe(0);
  });

  test('should calculate user product discount = 100 for value > 100', async () => {
    await accountService.userProductDiscount.setUserProductDiscount(User.Standard, Product.Car, 200);
    await accountService.userProductDiscount.saveDiscounts();
    await accountService.userProductDiscount.loadDiscounts();

    expect(accountService.userProductDiscount.getUserProductDiscount(User.Standard, Product.Car)).toBe(100);
  });

  test('should calculate total discount', async () => {
    await accountService.userDiscount.setUserDiscount(User.Standard, 10);
    await accountService.userProductDiscount.setUserProductDiscount(User.Standard, Product.Car, 20);
    await accountService.saveAllDiscounts();
    await accountService.loadAllDiscounts();

    const totalDiscount = accountService.calculateTotalDiscount(User.Standard, Product.Car);
    expect(totalDiscount).toBe(30);
  });

  test('should calculate total discount = 0 for negative value', async () => {
    await accountService.userDiscount.setUserDiscount(User.Standard, -10);
    await accountService.userProductDiscount.setUserProductDiscount(User.Standard, Product.Car, -20);
    await accountService.saveAllDiscounts();
    await accountService.loadAllDiscounts();

    const totalDiscount = accountService.calculateTotalDiscount(User.Standard, Product.Car);
    expect(totalDiscount).toBe(0);
  });

  test('should calculate total discount = 100 for value > 100', async () => {
    await accountService.userDiscount.setUserDiscount(User.Standard, 200);
    await accountService.userProductDiscount.setUserProductDiscount(User.Standard, Product.Car, 10);
    await accountService.saveAllDiscounts();
    await accountService.loadAllDiscounts();

    const totalDiscount = accountService.calculateTotalDiscount(User.Standard, Product.Car);
    expect(totalDiscount).toBe(100);
  });
});
