const mongoose = require('mongoose');

// const properties = new mongoose.Schema({
//     Place: { type: String, required: true },
//     Area: { type: String, required: true },
//     Bedrooms: { type: String, required: true},
//     Bathrooms: { type: String, required: true },
//     Nearby: { type: String, required: true },
    

//   });

const properties  = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    Fullname:{ type: String, required: true },
    Place: { type: String, required: true },
    Area: { type: String, required: true },
    Bedrooms: { type: Number, default: 0 },
    Bathrooms: { type: Number,  default: 0  },
    Nearby: { type: String, required: true },
    likes: { type: Number, default: 0 },
    sqft : { type: Number, default: 0 },
    price: { type: Number, default: 0 },
});

// module.exports = mongoose.model('Property', propertySchema);


module.exports = mongoose.model('properties', properties);