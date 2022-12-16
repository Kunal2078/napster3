const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const dataSchema = Schema({
    id:{
type:Number,
unique:true
    },
  Imageurl:{
    type:String,
    unique:true,
  },
  name:{
    type:String,
    unique:true,
  },
  trailerUrl:{
    type:String,
    unique:true,
  },
  bio:{
    type:String,
    unique:true,
  },
  movieUrl:{
    type:String,
    unique:true,
  },
  category:{
    type:String
  },
  director:{
    type:String
  },
cast:{
type:String
},
writer:{
type:String
},
movieAbout:{
type:String
},
rating:{
  type:Number
}

});

module.exports = mongoose.model('data', dataSchema)