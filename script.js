const signInput = document.querySelector(".sign-input");
const formatted = document.querySelector(".formatted");
const minified = document.querySelector(".minified");
const outputInput = document.querySelector(".output-input");
const copyBtn = document.querySelector(".relative svg")



formatted.addEventListener("click",() =>{
    outputInput.value = JSON.stringify(JSON.parse(signInput.value),null, 4)
})

minified.addEventListener("click",() =>{
    outputInput.value = JSON.stringify(JSON.parse(signInput.value))
})

copyBtn.addEventListener("click",() =>{
    navigator.clipboard.writeText(outputInput.value)
})


