/*
# Objective:
write a function to find expiry datetime. expiry datetime is 3 working hours from "now".
the working hours is defined in "schedule" input parameter.
You can write the function in java or javascript programming language.
# input parameters:
now: datetime, current datetime. e.g: '2019-10-11T08:13:07+0800'
schedule: an arraylist of map object. which specified the day open or close and also the start 
and end of working hours
[
	{"open": false, "open_at": "", close_at: ""}, // sunday
	{"open": true, "open_at": "09:00", close_at: "18:00"}, // monday
	{"open": true, "open_at": "09:00", close_at: "18:00"},
	{"open": true, "open_at": "09:00", close_at: "18:00"},
	{"open": true, "open_at": "09:00", close_at: "18:00"},
	{"open": true, "open_at": "09:00", close_at: "17:00"},
	{"open": false, "open_at": "", close_at: ""},
]
# example:
now is friday 4pm. whith the above schedule, the expiry date should be next monday 11 am. 
because on friday office close at 5pm and office is closed on weekend.
output: datetime, 3 working hour from input date ("now"), which is 11 am of next monday
*/

//to check the pull request


const schedule = [
	{"open": false, "open_at": "", "close_at": ""}, // sunday
	{"open": true, "open_at": "09:00", "close_at": "18:00"}, // monday
	{"open": true, "open_at": "09:00", "close_at": "18:00"},
	{"open": true, "open_at": "09:00", "close_at": "18:00"},
	{"open": true, "open_at": "09:00", "close_at": "18:00"},
	{"open": true, "open_at": "09:00", "close_at": "17:00"},
	{"open": false, "open_at": "", "close_at": ""},
]


//------>weekend request or any off day
// const now = new Date(2020, 5, 13, 00)
// const now = new Date(2020, 5, 13, 1)
// const now = new Date(2020, 5, 13, 7)
// const now = new Date(2020, 5, 13, 12)
// const now = new Date(2020, 5, 13, 16)
// const now = new Date(2020, 5, 13, 20)
// const now = new Date(2020, 5, 13, 24)
// const now = new Date(2020, 5, 13, 00)
// const now = new Date(2020, 5, 14, 1)
// const now = new Date(2020, 5, 14, 7)
// const now = new Date(2020, 5, 14, 12)
// const now = new Date(2020, 5, 14, 16)
// const now = new Date(2020, 5, 14, 20)
// const now = new Date(2020, 5, 14, 24)

//------>request on working day before working hours i.e. before 9
// const now = new Date(2020, 5, 15, 00) //Monday
// const now = new Date(2020, 5, 15, 4) //Monday
// const now = new Date(2020, 5, 15, 7) //Monday
// const now = new Date(2020, 5, 15, 9) //Monday
// const now = new Date(2020, 5, 17, 00) 
// const now = new Date(2020, 5, 17, 1)
// const now = new Date(2020, 5, 17, 4)
// const now = new Date(2020, 5, 17, 7)
// const now = new Date(2020, 5, 17, 9)
// const now = new Date(2020, 5, 19, 00) //Friday
// const now = new Date(2020, 5, 19, 1) //Friday
// const now = new Date(2020, 5, 19, 5) //Friday
// const now = new Date(2020, 5, 19, 9) //Friday


//------>request on working day after working hours i.e. after 18:00
// const now = new Date(2020, 5, 15, 18) //Monday
// const now = new Date(2020, 5, 15, 20) //Monday
// const now = new Date(2020, 5, 15, 22) //Monday
// const now = new Date(2020, 5, 15, 24) //Monday
// const now = new Date(2020, 5, 17, 18) 
// const now = new Date(2020, 5, 17, 20) 
// const now = new Date(2020, 5, 17, 22) 
// const now = new Date(2020, 5, 17, 24) 
// const now = new Date(2020, 5, 19, 18) //Friday
// const now = new Date(2020, 5, 19, 20) //Friday
// const now = new Date(2020, 5, 19, 23) //Fridayss
// const now = new Date(2020, 5, 19, 24) //Friday
// const now = new Date(2020, 5, 30, 22) //Month change
// const now = new Date(2020, 5, 30, 24) //Month change

//------>request on working day in working hours and expirydate also falls in same day
// const now = new Date(2020, 5, 15, 10) //Monday
// const now = new Date(2020, 5, 15, 12) //Monday
// const now = new Date(2020, 5, 15, 14) //Monday
// const now = new Date(2020, 5, 15, 14 , 50) //Monday
// const now = new Date(2020, 5, 17, 10) 
// const now = new Date(2020, 5, 17, 12 , 30) 
// const now = new Date(2020, 5, 17, 14) 
// const now = new Date(2020, 5, 17, 15) 
// const now = new Date(2020, 5, 19, 9, 30) //Friday
// const now = new Date(2020, 5, 19, 11) //Friday
// const now = new Date(2020, 5, 19, 13, 40) //Fridays
// const now = new Date(2020, 5, 19, 14) //Friday

//------>request on working day in working hours but expirydate overshoots the day.
// const now = new Date(2020, 5, 15, 15 , 1) //Monday
// const now = new Date(2020, 5, 15, 17) //Monday
// const now = new Date(2020, 5, 15, 17 ,30) //Monday
// const now = new Date(2020, 5, 15, 18) //Monday
// const now = new Date(2020, 5, 17, 15, 1) 
// const now = new Date(2020, 5, 17, 17) 
const now = new Date(2020, 5, 17, 17 ,45) 
// const now = new Date(2020, 5, 17, 18) 
// const now = new Date(2020, 5, 19, 15, 1) //Friday
// const now = new Date(2020, 5, 19, 16) //Friday
// const now = new Date(2020, 5, 19, 17, 40) //Friday
// const now = new Date(2020, 5, 19, 18) //Friday


const date = now.getDate()
const day = now.getDay()  //---> return value from 0 to 6 , 0 being sunday and 6 saturday
const year= now.getFullYear()
const month = now.getMonth()
const hour= now.getHours()
const mins = now.getMinutes()
const offSetInMins = now.getTimezoneOffset() //-----> gets time difference between UTC to local time zone
const defaultHoursToAdd = 3 //----> default hours to add.
var workingTime
var openTimeinms
var nowInms
var closeTimeinms
var possibleExpiry
var expiry
var finalexpiryDateAndTime


function find(now, schedule){

	//---->request comes on a weekend or a off day
	if (schedule[day].open == false){
		calculateExpiry(defaultHoursToAdd)
		return finalexpiryDateAndTime
	}

	if (schedule[day].open == true){
		console.log('working day')
		let openTime = parseInt(schedule[day].open_at)
		let closeTime = parseInt(schedule[day].close_at)
		let openTimeObj = new Date(year,month, date, openTime)
		let closeTimeObj = new Date(year,month, date, closeTime)

		//--->check if request comes before working hours i.e from after 12 AM to 9 AM wednesday
		if (openTimeObj.getTime() >= now.getTime()) {
			console.log('early morning request')
			let expiryDateAndTime = new Date(year, month, date, openTime + defaultHoursToAdd, mins)
			finalexpiryDateAndTime = new Date(expiryDateAndTime.getTime() - offSetInMins * 60000)
			console.log('finalexpiryDateAndTime', finalexpiryDateAndTime)
			return finalexpiryDateAndTime
		}

		//------> if request comes on a working day but after working hours e.g at 22:00 of Tuesday
		if (closeTimeObj.getTime() <= now.getTime()) {
			console.log('late evening request')
			calculateExpiry(defaultHoursToAdd)
			return finalexpiryDateAndTime
		}
		
		//-----> if request comes on a working day within working hours
		if (now.getTime() > openTimeObj.getTime() && now.getTime() < closeTimeObj.getTime()) {
			console.log('in working hours')
			let expiryDateAndTime = new Date(year, month, date, hour+3, mins)

			//-------> if expiry falls within working hours of same day
			if (expiryDateAndTime.getTime()<= closeTimeObj.getTime()){
				console.log('expiry within working hours')
				finalexpiryDateAndTime = new Date(expiryDateAndTime.getTime() - offSetInMins * 60000)
				console.log(finalexpiryDateAndTime)
				return finalexpiryDateAndTime
			}
			//-------> if expiry overflows and falls to next working day
			else {
				var extraHours = (expiryDateAndTime.getTime() - closeTimeObj.getTime())/(60*60*1000)
				console.log('extraHours', extraHours)
				calculateExpiry(extraHours)
				return finalexpiryDateAndTime
			}
		}
	}
}

function calculateExpiry(toAdd){
	console.log('calculate expiry date')
	let nextWorkingDayFound = false
	let num = 1
	let nextDate
	let nextDay
	while(nextWorkingDayFound == false){
		//find next working day
		nextDate = new Date(now.getTime() + num * 24 * 60 * 60 *1000)
		nextDay = nextDate.getDay()
		if (schedule[nextDay].open == true){
			expiryDate = nextDate
			nextWorkingDayFound = true	
		}else{
			num++
		}
	}
	let expiryDateAndTime = new Date(expiryDate.getFullYear(), expiryDate.getMonth(), expiryDate.getDate(), parseInt(schedule[expiryDate.getDay()].open_at) +toAdd, mins)
	finalexpiryDateAndTime = new Date(expiryDateAndTime.getTime() - offSetInMins * 60000)
	console.log('finalexpiryDateAndTime', finalexpiryDateAndTime)
}

console.log(find(now, schedule)) //calling the find function
