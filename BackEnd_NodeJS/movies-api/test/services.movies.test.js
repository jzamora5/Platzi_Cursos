const assert = require("assert");
const proxyquire = require("proxyquire");

const { MongoLibMock, getAllStub } = require("../utils/mocks/mongoLib");

const { moviesMock } = require("../utils/mocks/movies");

describe("services - movies", function () {
  const MoviesServices = proxyquire("../services/movies", {
    "../lib/mongo": MongoLibMock,
  });

  const moviesService = new MoviesServices();

  describe("When getMovies method is called", async function (done) {
    it("should call the getAll MongoLib method", async function () {
      await moviesService.getMovies({});
      assert.strictEqual(getAllStub.called, true);
    });

    it("should return an array of movies", async function () {
      const result = await moviesService.getMovies({});
      const expected = moviesMock;

      assert.deepStrictEqual(result, expected);
    });
  });
});
