const {Schema, model, models} = require('mongoose')

const capComicsShema = Schema({
    numCap:{
        type:Number,
        default: 0,
        unique:true,
    },
    nombre: {
        type:String,
        required:[true,'chapter name is required'],
    },
    perteneciente:{
        type: Schema.Types.ObjectId,
        ref: 'comics',
        required: true,
    },
    fechaPub:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
    },
    status:{
        type:Boolean,
        default:true,
    },
    unlocked:{
        type:Boolean,
        default:true
    },
    seLibros:{
        type:Array,
    },
    seCretator:{
        type:Array,
    }
})

autoIncrementSchema.pre('save', async function (next) {
  const currentDocument = this
  if (currentDocument.isNew) {
    try {
      const lastDocument = await currentDocument.constructor.findOne(
        {},
        { numCap: 1 },
        { sort: { numCap: -1 } }
      );

      currentDocument.numCap = lastDocument ? lastDocument.numCap + 1 : 1

        currentDocument.publishDate = Date.now()

      return next();
    } catch (error) {
      return next(error)
    }
  }
  return next()
})

module.exports = model("Usuario", capComicsShema)