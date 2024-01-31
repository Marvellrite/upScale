const userModel = require("../models/User.js");
const referralsModel = require("../models/referrals.js");
const fSModel = require("../models/financialSummary.js");
const depositModel = require("../models/deposit.js");
const withdrawalModel = require("../models/withdrawal.js");
const adminWithReqModel = require("../models/adminWiths.js");
const adminDepositModel = require("../models/adminDeposit.js");
const cSAccountDetailsModel = require("../models/client_side_account_details.js");
const { NotFound } = require("../errors");

const dashBoard = async(req, res)=>{
    const { userID } = req.user;
    let fs = await fSModel.findById(userID);
    fs = { purchaseCount:fs.purchaseCount, availableFunds:fs.availableFunds, totalInvested:fs.totalInvested };
    let user = await userModel.findById(userID);
    if(user===null){
        throw new NotFound("User Not Found");
    }
    user = { email:user.email, name:user.name, referralCode:user.referralCode };
    let referrals = await referralsModel.findById(userID);
    const details = {
        fs,
        user
    };
    if(referrals.referrals.length!==0){
        recentReferrals = [referrals.referrals[referrals.referrals.length-1], referrals.referrals[referrals.referrals.length-2]];
        details.recentReferrals = recentReferrals;
    }

    res.status(200).json(details);
}

const referrals = async (req, res)=>{
    const { userID } = req.user;
    const referrals = await referralsModel.findById(userID);
    const user = await userModel.findById(userID);
    const details = { referralCode:user.referralCode, referralsCount:user.referralCount, referrals:referrals.referrals };
    res.status(200).send(details);

}

const withdrawalLog = async(req, res)=>{
    const { userID } = req.user;
    const fsSummary = await fSModel.findById(userID);
    const availableFunds = fsSummary.availableFunds;
    const withdrawalLog = await withdrawalModel.findById(userID);
    const withdrawals = withdrawalLog.withdrawals;
    res.status(200).json({ withdrawals, availableFunds });
}

const depositLogAndAccDetails = async(req, res)=>{
    const { userID } = req.user;
    const depositLog = await depositModel.findById(userID);
    if(depositLog===null){
        throw new NotFound("User Not Found")
    }
    const allClientAccDetails = await cSAccountDetailsModel.find({});
    console.log(userID);
    const allDepositLog = await depositModel.find({});
    console.log(allDepositLog);
    console.log(depositLog);
    const deposits = depositLog.deposits;
    const depositsAndAccDetails = { deposits, accDetails:allClientAccDetails };
    res.status(200).json(depositsAndAccDetails);
}

const allPendingWithdrawalLogs = async(req, res)=>{
    const allPendingWithdrawals = await adminWithReqModel.find({});
    res.status(200).send(allPendingWithdrawals);
}

const allPendingDepositLogs = async(req, res)=>{
    const allPendingDeposits = await adminDepositModel.find({});
    res.status(200).send(allPendingDeposits);
}

module.exports = {
    dashBoard,
    referrals,
    withdrawalLog,
    depositLogAndAccDetails,
    allPendingWithdrawalLogs,
    allPendingDepositLogs
}