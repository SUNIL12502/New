import userRouter from './user-routes.js';
import tradeRouter from './trade-router.js';
import portfolioRouter from './portfolio-router.js';

// Here we mention all the routes from our parent URL
export default (app) => {
    app.use('/user', userRouter);
    app.use('/trade', tradeRouter);
    app.use('/portfolio', portfolioRouter);
}
