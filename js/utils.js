const nDonationBtn = document.getElementById("noakhali-donation");
const fDonationBtn = document.getElementById("feni-donation");
const qDonationBtn = document.getElementById("quota-donation");


function calculateTotalDonation(strDAmmount, strDTotal) {
    let dAmmount = parseInt(strDAmmount);
    let DTotal = parseInt(strDTotal);
    if (dAmmount < 0) {
        alert("wrong amount")
        document.getElementById("noakhali-donation-ammount").value = "";
        return;
    }
    let totalDonationAfterDonate = dAmmount + DTotal;
    return totalDonationAfterDonate;

}
function calculateBalanceDeduction(strDAmmount, strMyBalance) {
    let dAmmount = parseInt(strDAmmount);
    let myBalance = parseInt(strMyBalance);
    if (dAmmount > myBalance || dAmmount< 0) {
        alert("wrong amount")
        document.getElementById("noakhali-donation-ammount").value = "";
        return;
    }
    let balanceLeftAfterDonation = myBalance - dAmmount;
    return balanceLeftAfterDonation;
}

nDonationBtn.addEventListener("click", function () {
    const strNDAmmount = document.getElementById("noakhali-donation-ammount").value;
    const nDTotalGet = document.getElementById("total-noakhali-donation");
    const strNDTotal = nDTotalGet.innerText;
    const myBalanceGet = document.getElementById("my-balance");
    const strMyBalance = myBalanceGet.innerText;

    let leftBalance = calculateBalanceDeduction(strNDAmmount, strMyBalance);
    if (leftBalance === undefined) {
        return;
    }
    else {
        myBalanceGet.innerText = leftBalance;
        document.getElementById("noakhali-donation-ammount").value = "";
    }
    let totalDonationAfterDonate = calculateTotalDonation(strNDAmmount, strNDTotal);
    if (totalDonationAfterDonate === undefined) {
        return;
    }
    else {
        nDTotalGet.innerText = totalDonationAfterDonate;
    }

})

fDonationBtn.addEventListener("click", function () {
    const strFDAmmount = document.getElementById("feni-donation-ammount").value;
    const fDTotalGet = document.getElementById("total-feni-donation");
    const strFDTotal = fDTotalGet.innerText;
    const myBalanceGet = document.getElementById("my-balance");
    const strMyBalance = myBalanceGet.innerText;
    let leftBalance = calculateBalanceDeduction(strFDAmmount, strMyBalance);
    if (leftBalance === undefined) {
        return;
    }
    else {
        myBalanceGet.innerText = leftBalance;
        document.getElementById("feni-donation-ammount").value = "";
    }
    let totalDonationAfterDonate = calculateTotalDonation(strFDAmmount, strFDTotal);
    if (totalDonationAfterDonate === undefined) {
        return;
    }
    else {
        fDTotalGet.innerText = totalDonationAfterDonate;
    }
})
qDonationBtn.addEventListener("click", function () {
    const strQDAmmount = document.getElementById("quota-donation-ammount").value;
    const qDTotalGet = document.getElementById("total-quota-donation");
    const strQDTotal = qDTotalGet.innerText;
    const myBalanceGet = document.getElementById("my-balance");
    const strMyBalance = myBalanceGet.innerText;
    let leftBalance = calculateBalanceDeduction(strQDAmmount, strMyBalance);
    if (leftBalance === undefined) {
        return;
    }
    else {
        myBalanceGet.innerText = leftBalance;
        document.getElementById("quota-donation-ammount").value = "";
    }
    let totalDonationAfterDonate = calculateTotalDonation(strQDAmmount, strQDTotal);
    if (totalDonationAfterDonate === undefined) {
        return;
    }
    else {
        qDTotalGet.innerText = totalDonationAfterDonate;
    }
})