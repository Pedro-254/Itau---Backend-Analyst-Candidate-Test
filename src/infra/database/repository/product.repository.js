const ProductModel = require("../schemas/product.schema")

class ProductRepositoryMongo {
    async save(productEntity) {
      const doc = await ProductModel.create({
        title: productEntity.title,
        description: productEntity.description,
        price: productEntity.price,
        category: productEntity.category,
        ownerID: productEntity.ownerID,
      });
  
      return {
        id: doc._id.toString(),
        title: doc.title,
        description: doc.description,
        price: doc.price,
        category: doc.category,
        ownerID: doc.ownerID,
      };
    }

    async update(productEntity){
      if(!productEntity.id){
        throw new Error("product id is required");    
      }

      const filter = {_id: productEntity.id}
      
      const updateData = {}

      if(productEntity.category !== undefined){
        updateData.category = productEntity.category
      }

      const doc = await ProductModel.findOneAndUpdate(
        filter,
        { $set: updateData}
      ).lean()

      return doc
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
          ProductModel.find(query).skip(skip).limit(safeLimit).lean(),
          ProductModel.countDocuments(query),
      ]);

      return {
        data: items.map((doc) => ({
          id: doc._id.toString(),
          title: doc.title,
          description: doc.description,
          price: doc.price,
          category: doc.category,
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

  module.exports = ProductRepositoryMongo