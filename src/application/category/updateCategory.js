// use case
const { Category } = require('../../domain/product/entity/category');

class UpdateCategoryUseCase {

  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async execute(input) {
    
    // find category
    var categoryItems = await this.categoryRepository.findByTitleandOwner(input.category,input.ownerID)

    if (categoryItems.data.length == 0) {
      throw new Error(`Category doesn't exist: ${input.category}`);
    }

    const product = new Product({
      id: input.id,
      title: input.title,
      description: input.description,
      price: input.price,
      category: input.category,
      ownerID: input.ownerID,
    });

    // update product
    const response = await this.productRepository.update(product);

    return response;
    
  }
}

module.exports = UpdateCategoryUseCase