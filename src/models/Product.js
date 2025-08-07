const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  category: { type: String, default: 'General' },
  stock: { type: Number, default: 0 },
  images: [{ type: String }],
  isActive: { type: Boolean, default: true },
}, {
  timestamps: true 
});

module.exports = mongoose.model('Product', productSchema);
