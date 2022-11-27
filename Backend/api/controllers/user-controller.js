import * as userService from './../services/user-services.js';

const setResponse = (obj, response) =>{
    response.status(200);
    response.json(obj);
}

const errorResponse = (err, response) =>{
    response.status(500);
    response.json(err);
}

export const index = async (req,res) =>{
    try{
        // Store ID
        const id = req.params.id;
        // Pass ID to index function
        const availableUser = await userService.index(id);
        setResponse(availableUser,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}

export const get = async (req,res) =>{
    try{
        // Find method in service helps to get all todos
        const availableUser = await userService.find();
        setResponse(availableUser,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}

export const post = async (req,res) =>{
    try{
        // Store Body and pass to save method
        const user = req.body;
        // Save method has the logic to post the user to DB
        const savedUser = await userService.save(user);
        setResponse(savedUser,res);
    }
    catch(error){
        errorResponse(error,res);
    }
    
}

export const update = async (req,res) =>{
    try{
        const todo = req.body;
        const id = req.params.id;
        // Update based on id and user body
        const updateUser = await userService.update(todo,id);
        setResponse(updateUser,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}

export const remove = async (req,res) =>{
    try{
        const id = req.params.id;
        // Delete a Todo
        const deleteUser = await userService.remove(id);
        setResponse(deleteUser,res);
    }
    catch(error){
        errorResponse(error,res);
    }
}