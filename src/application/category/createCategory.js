// use case
const { Category } = require('../../domain/product/entity/category');

class CreateCategoryUseCase {
  constructor(Repository) {
    this.repository = Repository;
  }

  async execute(input) {
    var items = await this.repository.findByTitleandOwner(input.title, input.ownerID)

    if (items.data.length == 0) {

      const category = new Category({
          id: undefined,
          title: input.title,
          description: input.description,
          ownerID: input.ownerID,
      });


      const response = await this.repository.save(category);
      return response;
    }else{
      throw new Error("Category already exists");
      
    }

    
  }
}

module.exports = CreateCategoryUseCase