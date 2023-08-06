//document.getElementById("count").innerText = 5
let saveEl = document.getElementById("save-el")
let count = 0
console.log(count)
console.log("save-el")

function increment(){
	count += 1
	console.log("New Person arrival")
	document.getElementById("count").innerText = count
}

function decrement(){
	if(count != 0){
	count -= 1
	console.log("Person started journey / departure")
	document.getElementById("count").innerText = count
	} else {
	console.log("Nobody there in the station")
	}
}

function save(){
	let countStr = count + "-"
	saveEl.innerText += countStr
	console.log("Current people count is "+ count)
}