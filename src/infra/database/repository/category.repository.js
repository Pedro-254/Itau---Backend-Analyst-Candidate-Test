const CategoryModel = require("../schemas/category.schema")

class CategoryRepositoryMongo {
    async save(categoryEntity) {
      const doc = await CategoryModel.create({
        title: categoryEntity.title,
        description: categoryEntity.description,
        ownerID: categoryEntity.ownerID,
      });
  
      return {
        id: doc._id.toString(),
        title: doc.title,
        description: doc.description,
        ownerID: doc.ownerID,
      };
    }

    async delete(id) {
      const response = await CategoryModel.deleteOne({ _id: id});
  
      return response;
    }

    async update(categoryEntity){

      if(!categoryEntity.id){
        throw new Error("Category id is required");    
      }

      const filter = {_id: categoryEntity.id}
      
      const updateData = {}

      if(productEntity.title !== undefined){
        updateData.title = productEntity.title
      }

      if(productEntity.description !== undefined){
        updateData.description = productEntity.description
      }

      const doc = await CategoryModel.findOneAndUpdate(
        filter,
        { $set: updateData},
        { new: true }
      ).lean()

      if(!doc){
        throw new Error("Product doesnt exists");
        
      }

      return doc
    }

    async findByTitleandOwner(title,ownerID) {
      const query = {}

      query.ownerID = ownerID
      query.title = title

      const items = await CategoryModel.find(query).lean();
  
      return {
        data: items.map((doc) => ({
          id: doc._id.toString(),
          title: doc.title,
          description: doc.description,
          ownerID: doc.ownerID,
        }))
      };
    
    }

    async findById(id) {
      const item = await CategoryModel.findById(id).lean();

      return {
        data: item
        ? [{
            id: item._id.toString(),
            title: item.title,
            description: item.description,
            ownerID: item.ownerID,
          }]
        : []
      };
    
    }

    async findAll({ownerID, page = 1, limit = 10}){
      const safePage = page;
      const safeLimit = limit;
      const skip = (page - 1) * limit

      const query = {}
      if(ownerID && ownerID != "" && ownerID != undefined){
        query.ownerID = ownerID
      }

      const [items, total] = await Promise.all([
          CategoryModel.find(query).skip(skip).limit(safeLimit).lean(),
          CategoryModel.countDocuments(query),
      ]);

      return {
        data: items.map((doc) => ({
          id: doc._id.toString(),
          title: doc.title,
          description: doc.description,
          ownerID: doc.ownerID,
        })),
        pagination: {
          page: safePage,
          limit: safeLimit,
          total,
          totalPages: Math.ceil(total / safeLimit)
        },
      };

    }

  }

  module.exports = CategoryRepositoryMongo