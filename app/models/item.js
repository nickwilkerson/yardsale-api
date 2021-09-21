const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String
  },
  category: {
    type: String,
    required: true
  },
  userEmail: {
    type: String
  },
  image: {
    type: String
  },
  numOfViews: {
    type: Number
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)
