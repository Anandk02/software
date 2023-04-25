const fs = require("fs");
const crypto = require("crypto");
const util = require("node:util");

module.exports = class repository {
  constructor(filename) {
    if (!filename) {
      throw new Error("Creating a repository need a Filename");
    }

    this.filename = filename;
    try {
      fs.accessSync(this.filename);
    } catch (err) {
      fs.writeFileSync(this.filename, "[]");
      console.log(err);
    }
  }

  async create(attrs) {
    attrs.id = this.randomId();

    const records = await this.getAll();
    records.push(attrs);

    await this.writeAll(records);

    return attrs;
  }

  async getAll() {
    return JSON.parse(
      await fs.promises.readFile(this.filename, {
        encoding: "utf-8",
      })
    );
  }

  async writeAll(records) {
    await fs.promises.writeFile(
      this.filename,
      JSON.stringify(records, null, 2)
    );
  }

  randomId() {
    return crypto.randomBytes(4).toString("hex");
  }

  async getOne(id) {
    const records = await this.getAll();
    return records.find((record) => record.id === id);
  }

  async delete(id) {
    const records = await this.getAll();
    const filterRecoards = records.filter((record) => record.id !== id);
    await this.writeAll(filterRecoards);
  }

  async update(id, attrs) {
    const records = await this.getAll();

    if (records.length === 0) {
      throw new Error("No records found");
    }
    const record = records.find((record) => record.id === id);

    if (!record) {
      throw new Error(`Recoard with id ${id} not Found`);
    }

    Object.assign(record, attrs);
    await this.writeAll(records);
  }

  async getOneBy(filters) {
    const records = await this.getAll();

    for (let record of records) {
      let found = true;

      for (let key in filters) {
        if (record[key] !== filters[key]) {
          found = false;
        }
      }

      if (found === true) {
        return record;
      }
    }
  }
};
