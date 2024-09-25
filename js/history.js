const historyBtn = document.getElementById("history-btn");
const donationBtn = document.getElementById("donation-btn");
const historyContent = document.getElementById("history-content")
const donationContent = document.getElementById("doantion-content")

// history btn click function
historyBtn.addEventListener("click", function () {
    historyBtn.classList.add("bg-[#B4F461]")
    donationBtn.classList.add("border-[#1111114D]")
    donationBtn.classList.add("border")
    historyBtn.classList.remove("border-[#1111114D]")
    historyBtn.classList.remove("border")
    donationBtn.classList.remove("bg-[#B4F461]")

    historyContent.classList.remove("hidden")
    donationContent.classList.add("hidden")

})
// donation btn click function

donationBtn.addEventListener("click", function () {
    donationBtn.classList.add("bg-[#B4F461]")
    donationBtn.classList.remove("border-[#1111114D]")
    donationBtn.classList.remove("border")
    historyBtn.classList.add("border-[#1111114D]")
    historyBtn.classList.add("border")
    historyBtn.classList.remove("bg-[#B4F461]")
    historyContent.classList.add("hidden")
    donationContent.classList.remove("hidden")
})
