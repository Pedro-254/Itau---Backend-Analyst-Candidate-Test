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

    var items = await this.repository.findByTitleandOwner(category)
    console.log(items.data.length)

    if (items.data.length < 0) {
      const response = await this.repository.save(category);
      return response;
    }else{
      throw new Error("Category already exists");
      
    }

    
  }
}

module.exports = CreateCategoryUseCase