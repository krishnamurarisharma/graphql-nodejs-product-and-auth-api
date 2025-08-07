const Product = require('../../models/Product');

module.exports = {
  Query: {
    getProducts: async () => {
      return await Product.find({ isActive: true });
    },
    getProduct: async (_, { id }) => {
      return await Product.findById(id);
    },
  },
  Mutation: {
    createProduct: async (_, { input }) => {
      const product = new Product(input);
      await product.save();
      return product;
    },
    updateProduct: async (_, { id, input }) => {
      const product = await Product.findByIdAndUpdate(id, input, { new: true });
      return product;
    },
    deleteProduct: async (_, { id }) => {
      await Product.findByIdAndUpdate(id, { isActive: false });
      return true;
    },
  },
};
