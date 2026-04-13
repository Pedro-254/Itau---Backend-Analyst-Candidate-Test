// use case
const { Category } = require('../../domain/category/category');

class CreateCategoryUseCase {
  constructor(Repository) {
    this.repository = Repository;
  }

  async execute(input) {
    var item = await this.repository.findById(input.id)
    
    if (item.data.length == 1) {
        const id = item.data[0].id


        const response = await this.repository.delete(id);
        return response;
    }else{
      throw new Error("Category doesnt exist.");
      
    }

    
  }
}

module.exports = CreateCategoryUseCase