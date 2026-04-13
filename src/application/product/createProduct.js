// use case
const { Product } = require('../../domain/product/product');

class CreateProductUseCase {
  constructor(productRepository, categoryRepository) {
    this.productRepository = productRepository;
    this.categoryRepository = categoryRepository;
  }

  async execute(input) {
    var categoryItems = await this.categoryRepository.findById(input.categoryID)
    if (categoryItems.data.length > 0) {
      const categoryId = categoryItems.data[0].id

      const product = new Product({
        id: undefined,
        title: input.title,
        description: input.description,
        price: input.price,
        categoryID: categoryId,
        ownerID: input.ownerID,
      });
  
      const response = await this.productRepository.save(product);
      return response;

    }else{
      throw new Error(`Category (${input.categoryID}) doesn't exist`);
      
    }

    
  }
}

module.exports = CreateProductUseCase