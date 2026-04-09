// use case
const { Category } = require('../../domain/product/entity/category');

class CreateCategoryUseCase {
  constructor(Repository) {
    this.repository = Repository;
  }

  async execute(input) {
    const category = new Category({
        id: undefined,
        title: input.title,
        description: input.description,
        ownerID: input.ownerID,
    });

    const response = await this.repository.save(category);
    return response;
  }
}

module.exports = CreateCategoryUseCase