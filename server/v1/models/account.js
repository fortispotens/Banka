import accounts from '../../db/accounts';
import users from '../../db/users';

class AccountService {
  static getAll() {
    return accounts;
  }

  static create(data) {
    const newAccount = {
      id: accounts.length + 1,
      accountNumber: users[users.length - 1].id,
      firstName: users[users.length - 1].firstName,
      lastName: users[users.length - 1].lastName,
      email: users[users.length - 1].email,
      createdOn: new Date().toLocaleString(),
      owner: users[users.length - 1].id,
      type: data.type,
      status: 'draft',
      balance: 0.00
    };

    accounts.push(newAccount);
    return newAccount;
  }

  // AccountService.currencyFormat(0.00)
  static currencyFormat(amount) {
    const formatNGN = { style: 'currency', currency: 'NGN' };
    const standard = new Intl.NumberFormat('en-US', formatNGN).format(amount);
    return standard;
  }

  static getOne(id) {
    const account = accounts.find(account => account.id === id);
    return account;
  }

  static deleteOne(id) {
    const account = accounts.find(account => account.id === id);

    const index = accounts.indexOf(account);
    accounts.splice(index, 1);

    return account;
  }
}

export default AccountService;
