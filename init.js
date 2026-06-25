//basically sara data store krne k liye init rkhe taki kch exp krne ke liye kch data pehele se hmare pass ho

const mongoose =require("mongoose");
const Chat=require("./models/chat.js")
//geting connection with mongodb
main().then(()=>{
    console.log("connection is successfull");
})
.catch(err => console.log(err) );


async function main(){  
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
let allChats=[
    {
        from:"srijan",
        to:"basit",
        msg:"ni padha dega bhai",
        created_at:new Date()
    },
     {
        from:"rajesh",
        to:"nazema",
        msg:"can you be my best friend",
        created_at:new Date()
    },
     {
        from:"asad",
        to:"basit",
        msg:"dont disturb me",
        created_at:new Date()
    },
     {
        from:"divyanshu",
        to:"sumit",
        msg:"bro why you always bully me",
        created_at:new Date()
    },
     {
        from:"dev",
        to:"basit",
        msg:"2 bar",
        created_at:new Date()
    },

 {
        from:"sagar",
        to:"sumit",
        msg:"kahyega ka khoon ka panner",
        created_at:new Date()
    },
     {
        from:"sneh",
        to:"chapti",
        msg:"can i propose u",
        created_at:new Date()
    },
]

Chat.insertMany(allChats);



