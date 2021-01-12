const assert = require("assert");
const buildMessage = require("../utils/buildMessage");

// only para que solo corra este test para TDD
describe("utils - buildMessage", function () {
  describe("when receives an entity and an action", function () {
    it("should return the respective message", function () {
      const result = buildMessage("movie", "create");
      const expect = "movie created";
      assert.strictEqual(result, expect);
    });
  });

  describe("when receives an entity and an action is a list", function () {
    it("should return the respective message with the entity included", function () {
      const result = buildMessage("movie", "list");
      const expected = "movies listed";
      assert.strictEqual(result, expected);
    });
  });
});
