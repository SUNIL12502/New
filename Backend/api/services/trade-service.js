import Trade from './../models/Trade.js'
import User from './../models/User.js'

// function to change the balance of user
const changeBalance = async(user,newBalance) =>{
    user.balance = newBalance;
    const updatedUser = await User.findByIdAndUpdate(user.id,user);
    return updatedUser;
}

// function to buy and sell stocks
export const order = async (id, newOrder) => {
    const user = await User.findById(id);
    const trade = new Trade(newOrder)

    // if the trade type is BUY
    if(trade.tradeType=="BUY"){
        // condtion to check if users balance is more than or equals to the amount of buying stock.
        if(user.balance>=trade.shares*trade.price){
            const placedTrade  = await trade.save();
            changeBalance(user, user.balance-trade.shares*trade.price)
            return placedTrade
        }
    }
    // for trade type SELL
    else{
        // Calculating no. shares of the company by a user
        const trades = await Trade.find({ userId : user.id, symbol : trade.symbol}).exec();
        let totalShares = 0;
        trades.forEach(totalCompanyShares)
        function totalCompanyShares(item) {
            if(item.tradeType == "BUY"){
                totalShares += item.shares;
            }
            else{
                totalShares -= item.shares;
            }
        }
        // checking if the user is having more than or equals shares of the company to sell it.
        if(trade.shares<=totalShares){
            const placedTrade =  trade.save();
            changeBalance(user, user.balance+trade.shares*trade.price)
            return placedTrade
        }
        
    }
}

export const getAllTrades = async(id) => {
    const user = await User.findById(id);
    const trades = await Trade.find({ userId : user.id}).exec();
    return trades
}

export const getPortfolio = async(id) => {
    const user = await User.findById(id);
    const trades = await Trade.find({ userId : user.id}).exec();
    let portfolio = [];
    trades.forEach(portfolioCalculation);
    function portfolioCalculation(item) {
        let tempObj = portfolio.find(({ symbol }) => symbol === item.symbol)
        if(tempObj){
            if(item.tradeType === "BUY"){
                tempObj.buyValue += item.shares*item.price;
                tempObj.buyShares += item.shares;
            }
            else{
                tempObj.sellValue += item.shares*item.price;
                tempObj.sellShares += item.shares;
            }  
        }
        else{
            let newObj = {
                symbol : item.symbol,
                buyValue : 0,
                buyShares : 0,
                sellValue : 0,
                sellShares : 0
            }

            if(item.tradeType === "BUY"){
                newObj.buyValue += item.shares*item.price;
                newObj.buyShares += item.shares;
            }
            else{
                newObj.sellValue += item.shares*item.price;
                newObj.sellShares += item.shares;
            }  

            portfolio.push(newObj);
        }

    }
    let finalPortfolio = []
    console.log(portfolio)
    portfolio.forEach(portfolioCreation);
    function portfolioCreation(item){
        if(item.buyShares>item.sellShares){
            let itemVal = {
                userId:id,
                symbol:item.symbol,
                price:item.buyValue/item.buyShares,
                shares:buyShares-sellShares,
                tradeType:"BUY"
            }
            console.log(itemVal)
            let newTradeItem = new Trade(itemVal);
            console.log(newTradeItem)
            finalPortfolio.push(newTradeItem);
        }
    }
    // console.log(portfolio)
    return finalPortfolio
}




// function to featch all task items
// export const getUser = async () =>{
//     const tasks = Task.find({});
//     return tasks;
// }

// // function to fetch items by ID
// export const search = async (id) =>{
//     const task = Task.findById(id);
//     return task;
// }

// // function to delete item by ID
// export const remove = async (id) =>{
//     const task = Task.findByIdAndDelete(id);
//     return task;
// }

// // function to update item by ID
// export const update = async (id, updTask) =>{
//     const task = Task.findByIdAndUpdate(id,updTask);
//     return task;
// }
