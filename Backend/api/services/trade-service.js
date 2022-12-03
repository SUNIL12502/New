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
    console.log(newOrder)
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

// Function to get all trades for a user
export const getAllTrades = async(id) => {
    const user = await User.findById(id);
    const trades = await Trade.find({ userId : user.id}).exec();
    return trades
}

// function to get the portfolio of the user
export const getPortfolio = async(id) => {
    const user = await User.findById(id);
    const trades = await Trade.find({ userId : user.id}).exec();
    let portfolio = [];
    trades.forEach(portfolioCalculation);
    function portfolioCalculation(item) {
        let tempObj = portfolio.find(({ symbol }) => symbol === item.symbol)
        if(tempObj){
            if(item.tradeType === "BUY"){
                tempObj.holdingValue += item.shares*item.price;
                tempObj.holdingShares += item.shares;
            }
            else{
                tempObj.holdingValue -= item.shares*item.price;
                tempObj.holdingShares -= item.shares;
            }  
        }
        else{
            let newObj = {
                symbol : item.symbol,
                holdingValue : 0,
                holdingShares : 0
            }

            if(item.tradeType === "BUY"){
                newObj.holdingValue += item.shares*item.price;
                newObj.holdingShares += item.shares;
            }
            else{
                newObj.holdingValue -= item.shares*item.price;
                newObj.holdingShares -= item.shares;
            }  

            portfolio.push(newObj);
        }

    }
    let finalPortfolio = []
    // console.log(portfolio)
    portfolio.forEach(portfolioCreation);
    function portfolioCreation(item){

        if(item.holdingShares>0){
            const itemVal = {
                userId:id,
                symbol : item.symbol,
                price : item.holdingValue/item.holdingShares,
                shares : item.holdingShares,
            }
            // console.log(itemVal)
            finalPortfolio.push(itemVal);
        }
    }
    // console.log(portfolio)
    return finalPortfolio
}

