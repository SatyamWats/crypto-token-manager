const express=require('express')
const axios=require('axios')
const cheerio=require('cheerio')
const fetch=require('node-fetch')  //node-fetch@2.0.0
const { FunctionInstance } = require('twilio/lib/rest/serverless/v1/service/function')

// var tokenInformation = require("./app.js")

var chainIDArray=[]
var tokenAddressArray=[]

console.log("imported")

// function main(){
//     chainIDArray=require("./app.js").chainIDArray
//     tokenAddressArray=require("./app.js").tokenAddressArray

//     // if(chainID != undefined){
//     //     chainIDArray.push(chainID)
//     //     console.log(chainID)
//     //     tokenAddressArray.push(tokenAddress)
//     //     console.log("imported: "+chainIDArray.length)
//     // }

//     if(chainIDArray != undefined && chainIDArray.length > 0) console.log("length"+chainIDArray[0])
// }

// setInterval(main,1000*2)

//----------------------------------------------------------------------------------------------------------------

// const TelegramBot = require('node-telegram-bot-api');

// // replace the value below with the Telegram token you receive from @BotFather
// const token = '5357366311:AAGE-nYqdyT4f6O0gA2tV-zDkjWwGGS1TGg';

// // Create a bot that uses 'polling' to fetch new updates
// const bot = new TelegramBot(token, {polling: true});

// const binanceAPIKey='DFAYPMDXCQSTTDIP8K5VZNUU4SPNMD5TUA'
// const covalentAPIKey='ckey_285dfce5b86d4797983378f58c3'
// const cmcAPIKey='4a71e39b-bc01-4cb8-8537-8adc5ac2c292'
// const apiEndpointbase='https://api.covalenthq.com/v1'

// const desiredPercentageChange=0                                             //has chain ID of all the tokens
// const tokenAddressArray=['/0x333fd139caef6aa31056cc905987b77b1044d259'] //has token addresses of all the tokens

// var listSize='10000000'                                                 //total size of the JSON data list fetched from API

// var tokenHoldersArray=[]                                                //Number of token holders of all the tokens

// const chatID=1735223495

// function sendAlert(change, percentageDifferenceOfHolders, lastAmount, currentAmount){
    
//     let message = "*** " + change +" ***\n" + "Percentage Change = " +percentageDifferenceOfHolders + 
//                   "\nLast Amount = " + lastAmount + "\n" +"Current Amount = " + currentAmount

//     bot.sendMessage(chatID,message)

//     console.log("Message Sent: " + message)

// }



// async function numberOfHolders(apiEndpoint) {
//     var holders=0
//     return fetch(apiEndpoint)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         // return data.data.pagination.total_count
//         try{
//             //no of holders, price, volume, message on percentage change in price and holders and volume every 5 min
//             //console.log (data.data.pagination.total_count)
//             holders=data.data.pagination.total_count
//             return holders

//         }catch(err){
//             console.log(err)
//         }        
//     })
// }

//----------------------------------------------------------------------------------------------------------------------------

// async function main(){

//     var totalTokens=tokenAddressArray.length

//     for(let index=0 ; index < totalTokens ; index++){

//         const chainID=chainIDArray[index]
//         const tokenAddress=tokenAddressArray[index]

//         const apiEndpoint=apiEndpointbase+chainID+'/tokens'+tokenAddress+
//                           '/token_holders/?quote-currency=USD&format=JSON&page-size='+
//                           listSize+'&page-number=0&key='+covalentAPIKey
    
//         var totalHoldersOfCurrentToken=await numberOfHolders(apiEndpoint) 
//         console.log(totalHoldersOfCurrentToken)

//         if(tokenHoldersArray.length < totalTokens)  tokenHoldersArray.push(totalHoldersOfCurrentToken) 
//         else{

//             var percentageDifferenceOfHolders = (( totalHoldersOfCurrentToken - tokenHoldersArray[index])/tokenHoldersArray[index])*100
//             if(Math.abs(percentageDifferenceOfHolders) >= desiredPercentageChange){

//                 let change=""

//                 if(percentageDifferenceOfHolders < 0) change="DECREASE"
//                 else    change="INCREASE"

//                 sendAlert(change, percentageDifferenceOfHolders, tokenHoldersArray[index], totalHoldersOfCurrentToken)

//             }

//         }

//         tokenHoldersArray[index] = totalHoldersOfCurrentToken

//     }
    
// }

//----------------------------------------------------------------------------------------------------------------------------------

// setInterval(main,1000*5)
