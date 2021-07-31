var checkBtn = document.querySelector("#check-btn")
var nextBtn = document.querySelector("next")
var billAmt = document.querySelector("#bill-amt")
var billInput = document.querySelector(".bill-input")
var cashInput = document.querySelector(".cash-input")
var cashGiven = document.querySelector("#cash-given")
var divOutput = document.querySelector("output")

function clickHandlerNext(){
    if(billAmt.value > 0){
        nextBtn.
    }
}


function clickHandlerCheck(){
    console.log("clicked")
    var bill = billAmt.value
    var cash = cashGiven.value

    if(cash<bill){
        divOutput.innerText = "Cash given is less than required Bill amount."
    }
    else if(cash < 0){
        divOutput.innerText = "Cash given is not a valid amount. Please Enter the right amount"
    }
    else if(cash === 0){
        divOutput.innerText = "No amount should be returned."
    }
}

nextBtn.addEventListener("click",clickHandlerNext)
checkBtn.addEventListener("click",clickHandlerCheck)