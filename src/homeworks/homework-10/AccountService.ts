import { UserDiscount, UserProductDiscount, IDiscountService } from './DiscountService';
import { Product, User } from './Entities';

export class AccountService {
  userDiscount: UserDiscount;
  userProductDiscount: UserProductDiscount;
  private discountService: IDiscountService;

  constructor(discountService: IDiscountService) {
    this.discountService = discountService;
    this.userDiscount = new UserDiscount(this.discountService);
    this.userProductDiscount = new UserProductDiscount(this.discountService);
  }

  async loadAllDiscounts() {
    Promise.all([this.userDiscount.loadDiscounts(), this.userProductDiscount.loadDiscounts()]);
  }

  async saveAllDiscounts() {
    Promise.all([this.userDiscount.saveDiscounts(), this.userProductDiscount.saveDiscounts()]);
  }

  calculateTotalDiscount(user: User, product: Product) {
    const userDiscount = this.userDiscount.getUserDiscount(user);
    const userProductDiscount = this.userProductDiscount.getUserProductDiscount(user, product);
    return this.discountService.totalDiscount(userDiscount, userProductDiscount);
  }
}
