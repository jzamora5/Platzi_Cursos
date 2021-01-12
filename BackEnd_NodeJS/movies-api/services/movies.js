// const { moviesMock } = require('../utils/mocks/movies');

const MongoLib = require('../lib/mongo');

class MoviesService {
  constructor() {
    this.collection = 'movies';
    this.mongoDB = new MongoLib();
  }

  async getMovies({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDB.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie({ movieId }) {
    const movie = await this.mongoDB.get(this.collection, movieId);
    return movie || {};
  }

  async createMovie({ movie }) {
    const createdMovieId = await this.mongoDB.create(this.collection, movie);
    return createdMovieId;
  }

  async updateMovie({ movieId, movie } = {}) {
    const updatedMovieId = await this.mongoDB.update(
      this.collection,
      movieId,
      movie
    );
    return updatedMovieId;
  }

  async deleteMovie({ movieId }) {
    const deleteMovieId = this.mongoDB.delete(this.collection, movieId);
    return deleteMovieId;
  }
}

module.exports = MoviesService;
