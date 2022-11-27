import userRouter from './user-routes.js';

// Here we mention all the routes from our parent URL
export default (app) => {
    app.use('/user', userRouter);
}