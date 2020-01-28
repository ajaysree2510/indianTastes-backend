const mongoose=require('mongoose');

const Schema = mongoose.Schema;

let recipeSchema = new Schema(
    {
        recipeId:{
            type:String,
            unique:true
        },

        name:{
            type:String,
            default:' '
        },
        description:{
            type:String,
            default:' '
        },
        image:{
            type:String,
            default:' '
        },

        ingredients:{
            type:[String],
            default:' '
        },

        instructions:{
            type:[String],
            default:' '
        }
    }
)

module.exports=mongoose.model('Recipe', recipeSchema)