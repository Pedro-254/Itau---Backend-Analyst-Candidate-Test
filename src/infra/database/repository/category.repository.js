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

    async findByTitleandOwner(category) {
      const query = {}

      query.ownerID = category.ownerID
      query.title = category.title

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

  }

  module.exports = CategoryRepositoryMongo