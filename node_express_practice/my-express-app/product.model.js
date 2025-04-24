const mongoose=require('mongoose')
const productschema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'please enter the product name']
        },

        quantity:{
            type:Number,
            required:true,
            default:0
        },

        price:{
            type:Number,
            required:true,
            default:0
        }
    },

    {
        timestamps:true}
    
)
const product=mongoose.model('products',productschema)

module.exports=product;