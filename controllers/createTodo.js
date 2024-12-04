const Todo=require('../models/Todo')

exports.createTodo=async(req,res)=>{

   try{
    const {title,description}=req.body;

    const response=await Todo.create({
        title,description
    })
      res.status(201).json(
        {
            success:true,
            data:response,
            message:"entry created"
        }
      );
   }
  catch(err){
    console.log(err);
  }
}

