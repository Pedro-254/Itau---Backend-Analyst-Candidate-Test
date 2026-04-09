// use case
const { Product } = require('../../domain/product/entity/product');

class ChangeProductCategoryUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(input) {
    
    // find category

    // find product

    // update product

    const product = new Product({
      id: undefined,
      title: input.title,
      description: input.description,
      price: input.price,
      category: input.category,
      ownerID: input.ownerID,
    });

    const response = await this.productRepository.update(product);
    return response;
  }
}

module.exports = ChangeProductCategoryUseCase