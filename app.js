var checkBtn = document.querySelector("#check-btn")
var nextBtn = document.querySelector("#next")
var billAmt = document.querySelector("#bill-amt")
var billInput = document.querySelector(".bill-input")
var cashInput = document.querySelector(".cash-input")
var cashGiven = document.querySelector("#cash-given")
var divOutput = document.querySelector("#output")
var returnTable = document.querySelector(".return-table")

console.log(returnTable)
console.log(billAmt)
console.log(cashGiven)
console.log(checkBtn)
console.log(nextBtn)
console.log(billInput)

returnTable.style.display = "none"
cashInput.style.display = "none"


function clickHandlerNext(){
    divOutput.style.display = "none"
    console.log("clicked")
    console.log(billAmt.value)
    if(billAmt.value > 0){
        nextBtn.style.display= "none"
        cashInput.style.display = "block"
    }
    else {
        divOutput.style.display = "block"
        divOutput.innerText = "Invalid bill amount! Please Enter a valid bill amount to proceed"
    }
}


function clickHandlerCheck(){

    console.log(cashGiven.value)
   
    console.log("clicked")
    //const bill = billAmt.value
    //const cash = cashGiven.value
    divOutput.style.display = "none"
    returnTable.style.display = "none"

    if(cashGiven.value>billAmt.value){
        returnTable.style.display = "block"
        console.log("a " +billAmt.value)
        console.log("a " +cashGiven.value)
    }
    else {

        divOutput.style.display = "block"
        returnTable.style.display = "none"

        if(cashGiven.value<billAmt.value && cashGiven.value> 0){
            console.log("b "+billAmt.value)
            console.log("b "+cashGiven.value)
            divOutput.innerText = "Cash given is less than required Bill amount."
        }
        
        else if(cashGiven.value === billAmt.value){
            divOutput.innerText = "No amount should be returned."
            console.log("c " +billAmt.value)
            console.log("c " +cashGiven.value)
        }

        else {
            divOutput.innerText = "Cash given is not a valid amount. Please Enter the right amount"
            console.log("d " +billAmt.value)
            console.log("d " +cashGiven.value)
        }

    }
}

nextBtn.addEventListener("click",clickHandlerNext)
checkBtn.addEventListener("click",clickHandlerCheck)