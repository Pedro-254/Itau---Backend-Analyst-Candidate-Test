class DeleteProductUseCase {
  constructor(Repository) {
    this.repository = Repository;
  }

  async execute(input) {
    var item = await this.repository.findById(input.id)
    
    if (item.data.length == 1) {
        const id = item.data[0].id

        const delete_result = await this.repository.delete(id);

        const response = {
          result : delete_result,
          data : item.data
        }
        return response;
    }else{
      throw new Error("Product doesnt exist.");
      
    }

    
  }
}

module.exports = DeleteProductUseCase