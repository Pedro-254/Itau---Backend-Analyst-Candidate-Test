// use case
const { Product } = require('../../domain/product/entity/product');

class CreateProductUseCase {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(input) {
    // domínio
    const product = new Product({
      id: undefined,
      title: input.title,
      description: input.description,
      price: input.price,
      category: input.category,
      ownerID: input.ownerID,
    });

    // persistência via repository
    const saved = await this.productRepository.save(product);
    return saved;
  }
}

module.exports = CreateProductUseCase