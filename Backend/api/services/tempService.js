import temp from './../models/temp.js';

// Add a user
export const save = async (Temp) =>{
    const newUser = new temp(Temp); 
    return newUser.save();
}

// // Find by ID
// export const index = async (id) =>{
//     const getUser = User.findById(id);
//     return getUser;
// }

// Search all
export const search = async (query) =>{
    const params = {...query};
    const user = temp.find(params).exec();
    return user;
}

// // Find Todo
// export const find = async () =>{
//     const users = User.find().exec();
//     return users;
// }

// // Update Todo
// export const update = async (user,id) =>{
//     const updateUser = await User.findByIdAndUpdate(id, user, { useFindAndModify: false });
//     // const updateTodo = Todo.updateOne(); 
//     console.log(updateUser);
//     return updateUser;
// }

// // Remove Todo
// export const remove = async (id) =>{
//     const removeUser = User.findByIdAndRemove(id);
//     return removeUser;
// }