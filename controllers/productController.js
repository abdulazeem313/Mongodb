const getAllProducts = (req,res)=>{
    res.json({message:['']})

}

const createProducts = (req,res)=>{
    res.json({message:"product created successfully"})

}
module.exports = {
    getAllProducts,
    createProducts
}