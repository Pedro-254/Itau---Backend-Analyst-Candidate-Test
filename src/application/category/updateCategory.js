// use case
const { Category } = require('../../domain/category/category');

class UpdateCategoryUseCase {

  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(input) {
    
    // find category
    var categoryItems = await this.categoryRepository.findById(input.id)

    if (categoryItems.data.length == 0) {
      throw new Error(`Category doesn't exist: ${input.category}`);
    }

    const category = new Category({
      id: input.id,
      title: input.title,
      description: input.description,
      ownerID: input.ownerID,
    });

    // update product
    const response = await this.categoryRepository.update(category);

    return response;
    
  }
}

module.exports = UpdateCategoryUseCase