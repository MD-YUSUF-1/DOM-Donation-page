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

    const historyItem= document.createElement("div")
    historyItem.className=" p-8 border border-[#1111111A] rounded-2xl ";
    historyItem.innerHTML=`
     <h3 class="text-xl font-bold pb-4">${strNDAmmount} Taka is Donated for Flood at Noakhali, Bangladesh</h3>
    <p class=" text-[#111111B3] font-light ">Date : ${new Date().toLocaleDateString() }  ${new Date().toLocaleTimeString() } (Bangladesh Standard Time)</p>
    `
    const historyContent = document.getElementById("history-content")
    historyContent.append(historyItem);
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
    const historyItem= document.createElement("div")
    historyItem.className=" p-8 border border-[#1111111A] rounded-2xl ";
    historyItem.innerHTML=`
     <h3 class="text-xl font-bold pb-4">${strFDAmmount} Taka is Donated for Flood Relief in Feni,Bangladesh</h3>
    <p class=" text-[#111111B3] font-light ">Date : ${new Date().toLocaleDateString() }  ${new Date().toLocaleTimeString() } (Bangladesh Standard Time)</p>
    `
    const historyContent = document.getElementById("history-content")
    historyContent.append(historyItem);
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
    const historyItem= document.createElement("div")
    historyItem.className=" p-8 border border-[#1111111A] rounded-2xl ";
    historyItem.innerHTML=`
     <h3 class="text-xl font-bold pb-4">${strQDAmmount} Taka is Donated for Aid for Injured in the Quota Movement</h3>
    <p class=" text-[#111111B3] font-light ">Date : ${new Date().toLocaleDateString() }  ${new Date().toLocaleTimeString() } (Bangladesh Standard Time)</p>
    `
    const historyContent = document.getElementById("history-content")
    historyContent.append(historyItem);
})