// use case
const { Product } = require('../../domain/product/entity/product');

class CreateProductUseCase {
  constructor(productRepository, categoryRepository) {
    this.productRepository = productRepository;
    this.categoryRepository = categoryRepository;
  }

  async execute(input) {
    var items = await this.categoryRepository.findByTitleandOwner(input.category, input.ownerID)
    if (items.data.length > 0) {

      const product = new Product({
        id: undefined,
        title: input.title,
        description: input.description,
        price: input.price,
        category: input.category,
        ownerID: input.ownerID,
      });
  
      const response = await this.productRepository.save(product);
      return response;

    }else{
      throw new Error(`Category (${input.category}) doesn't exist`);
      
    }

    
  }
}

module.exports = CreateProductUseCase