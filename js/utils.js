const nDonationBtn = document.getElementById("noakhali-donation");

nDonationBtn.addEventListener("click", function () {
    const strNDAmmount = document.getElementById("noakhali-donation-ammount").value;
    const nDTotalGet = document.getElementById("total-noakhali-donation");
    const strNDTotal = nDTotalGet.innerText;
    const myBalanceGet = document.getElementById("my-balance");
    const strMyBalance = myBalanceGet.innerText;
    let myBalance = parseInt(strMyBalance);
    let nDAmmount = parseInt(strNDAmmount);
    let nDTotal = parseInt(strNDTotal);
    if(nDAmmount<0 || nDAmmount>myBalance){
        alert("wrong amount")
        document.getElementById("noakhali-donation-ammount").value="";
        return;
    }
    let totalDonationAfterDonate = nDAmmount + nDTotal;
    nDTotalGet.innerText = totalDonationAfterDonate;

    let leftBalance = myBalance-nDAmmount;
    myBalanceGet.innerText=leftBalance;
    document.getElementById("noakhali-donation-ammount").value="";

    // console.log(noakhaliDonationAmmount)
    // console.log(nnoakhaliDonationTotal)

})