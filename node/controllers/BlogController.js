
import BlogModel from "../models/BlogModel.js";

//mostrar todos los registros 

export const getAllblogs= async (req,res) =>{

    
    try{    

        const blogs = await BlogModel.findAll()
        res.json(blogs)

}catch(error){

    res.json({message: error.message})
}

}


// mostrat un registro 

export const getblog = async (req,res) =>{

    try{    

        const blog = await BlogModel.findAll({
            where:{id:req.params.id}
        })
        res.json(blog)

}catch(error){

    res.json({message: error.menssage})
}

}

// Crear un registro

export const createblogs = async (req,res) =>{

    try{    

       await BlogModel.create(req.body)
        res.json({
            "message": "reggistro creado correctamente" 
        })

}catch(error){

    res.json({message: error.message})
}

}

// actualizar un registro

export const actualizarblogs = async (req,res) =>{

    try{    

       await BlogModel.update(req.body,{
           where: {id:req.params.id}
       })
        res.json({
            "message": "registro actualizado correctamente" 
        })

}catch(error){

    res.json({message: error.menssage})
}

}

// Eliminar un registro

export const eliminarblogs = async (req,res) =>{

    try{    

       await BlogModel.destroy({
           where: {id:req.params.id}
       })
        res.json({
            "message": "Registro eliminado correctamente" 
        })

}catch(error){

    res.json({message: error.message})
}

}