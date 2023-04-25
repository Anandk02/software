const fs = require("fs");
const crypto = require("crypto");
const util = require("node:util");
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository extends Repository {
    //   Cretae recoard
    async create(attrs) {
      attrs.id = this.randomId();
  
      const salt = crypto.randomBytes(10).toString("hex");
      const buf = await scrypt(attrs.Password, salt, 64);
  
      const records = await this.getAll();
      const record = {
        ...attrs,
        Password: `${buf.toString("hex")}.${salt}`,
      };
      records.push(record);
      await this.writeAll(records);
      return record;
    }

    async comparePassword(saved, supplied) {
      const [hased, salt] = saved.split(".");
      const hashedSuppliedBuf = await scrypt(supplied, salt, 64);
      return hased === hashedSuppliedBuf.toString("hex");
    }
  
}

module.exports = new UsersRepository("user.json");



