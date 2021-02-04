spreadsheetId:'d/1rl7BVppBMUNJ92rd1ejkwd7ekfBrYgGDQDOnxKoMCZo'
const apiKey = 'AIzaSyCO-isBG21LVW2EYoKvmqNBTVx32XrIxZI';
sheetsu='https://sheetsu.com/apis/v1.0su/e2debc7d115d'


let array = []
let result;

const fetchPerson = async () => {
	try {
	const res = await fetch('https://sheetsu.com/apis/v1.0/e2debc7d115d')
	const data = await res.json()
	console.log(data);
	for(let i = 0; i < data.length;i++){
		array = data[i]
		result =  Object.keys(array).map((key) => [Number(key), array[key]]);
		
		KSP();
		}
	}
	catch(e) {
		console.log('Error:', e);
	}
return array
}



function KSN() {
	[rozwiazania, suma, sila] = [0,0,0]

	for(let j=43; j < 55; j++){
		let answers = new Map()
			answers.set('Zdecydowanie nieprawdziwe', 1)
			answers.set('W większości przypadków nieprawdziwe', 2)
			answers.set('Raczej nieprawdziwe', 3)
			answers.set('Trochę nieprawdziwe', 4)
			answers.set('Trochę prawdziwe', 5)
			answers.set('Raczej prawdziwe', 6)
			answers.set('W większości przypadków prawdziwe', 7)
			answers.set('Zdecydowanie prawdziwe', 8)
		value = answers.get(result[j][1])


		switch(j) {
		  	case 43: case 46: case 48: case 50:
				rozwiazania += value
				suma += value
				break;
			case 44: case 51: case 52: case 54:
				sila += value;
				suma += value	
				break;
			default:
			break;
		}
	}
	return {rozwiazania,sila,suma}
}


function KSP() {
	let safe = 0;
	let fear = 0;
	let avoid = 0;
	let plec = result[1][1]
for(let i =19; i < 43; i+=3){
	safe += parseInt(result[i][1])
	fear += parseInt(result[i+1][1])
	avoid += parseInt(result[i+2][1])
	}
KSN();
addToTable(plec,safe,fear,avoid,KSN().rozwiazania,KSN().sila,KSN().suma);
return {safe,fear,avoid,plec}
}







function addToTable (sex,safe,fear,avoid,rozwiazania,sila,suma) {
// targeting rows
var first = document.querySelector('.firstTR')
var table = document.querySelector('.first');
var second = document.querySelector('.secondTR')
var third = document.querySelector('.thirdTR')
var fourth = document.querySelector('.fourthTR')
var fifthTR = document.querySelector('.fifthTR')
var sixthTR= document.querySelector('.sixthTR')
// new data headers

let newTH = document.createElement('TD');
let newTD1 = document.createElement('TD');
let newTD2 = document.createElement('TD');
let newTD3 = document.createElement('TD');
let newTD4 = document.createElement('TD');
let newTD5 = document.createElement('TD');
let newTD6 = document.createElement('TD');


const arrayTR = [table,first,second,third,fourth,fifthTR,sixthTR];
const arrayParams = [sex,safe,fear,avoid,rozwiazania,sila,suma]
const newTD = [newTH,newTD1,newTD2,newTD3,newTD4,newTD5,newTD6]


for(let i = 0; i < arrayTR.length; i++) {
arrayTR[i].appendChild(newTD[i])
arrayTR[i].lastChild.innerHTML = arrayParams[i];
}
}


fetchPerson();


