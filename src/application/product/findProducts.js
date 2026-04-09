
class FindProductUseCase{
    constructor(productRepository){
        this.productRepository = productRepository;
    }

    async execute(input) {
        const page = 1;
        const limit = 10;

        if (input.page) {
            page = Number(input.page)

            if(page < 1){
                throw new Error("page must be >= 1");
            }
        }

        if (input.limit) {
            limit = Number(input.limit)

            if(limit < 1){
                throw new Error("limit must be >= 1");
            }
        }
        const ownerID = input.ownerID

        if(ownerID != undefined){
            ownerID = String(input.ownerID).trim() !== "" ? String(input.ownerID).trim() : undefined;
        }

        const criteria = {ownerID, page, limit}



    
        const response = await this.productRepository.findAll(criteria);
        return response;
      }

    
}

module.exports = FindProductUseCase