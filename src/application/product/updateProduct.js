// use case
const { Product } = require('../../domain/product/product');

class UpdateProductUseCase {
  constructor(productRepository, categoryRepository) {
    this.productRepository = productRepository;
    this.categoryRepository = categoryRepository;
  }

  async execute(input) {
    
    // find category
    var categoryItems = await this.categoryRepository.findById(input.categoryID)

    if (categoryItems.data.length == 0) {
      throw new Error(`CategoryID doesn't exist: ${input.categoryID}`);
    }

    const product = new Product({
      id: input.id,
      title: input.title,
      description: input.description,
      price: input.price,
      categoryID: input.categoryID,
      ownerID: input.ownerID,
    });

    // update product
    const response = await this.productRepository.update(product);

    return response;
    
  }
}

module.exports = UpdateProductUseCase