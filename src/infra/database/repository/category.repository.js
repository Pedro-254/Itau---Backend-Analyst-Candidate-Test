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
  }

  module.exports = CategoryRepositoryMongo