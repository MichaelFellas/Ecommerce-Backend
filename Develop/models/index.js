// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//Links products to category via category_id//
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

//Tells Sequelize that a category can have multiple products linked to it//
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'SET NULL',
});

//Links products to tags via the ProductTag Model//
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: "product_id" });

//Links tags to products via the ProductTag Model//
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: "tag_id" });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};



