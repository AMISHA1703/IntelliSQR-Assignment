const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    fullName:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String
    }
},{timestamps:true})


// // **Pre-save hook to hash password before storing**
// UserSchema.pre("save", async function (next) {
//     // Only hash password if it's new or modified is save in DB else not

//     if (!this.isModified("password")) return next();

//     try {
//         const saltRounds = 10;
//         this.password = await bcrypt.hash(this.password, saltRounds);
//         next();
//     } catch (error) {
//         next(error);
//     }
// });

const User=mongoose.model("user",UserSchema)
module.exports=User