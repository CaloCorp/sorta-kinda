/******************
 * YOUR CODE HERE *
 ******************/
const firstNumberIsLess = function (num1, num2){
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}

const secondNumberIsLess = function (num1, num2){
  if (num1 > num2) {
    return -1;
  } else if (num1 < num2) {
    return 1;
  } else {
    return 0;
  }
}

const firstNameIsFirstAlphabetically = function(name1, name2) {
  
  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  } else {
    return 0;
  }
}
 const firstLastNameIsFirstAlphabetically = function(fullName,fullName2) {
  const lName1= fullName.slice(fullName.indexOf(' ')
  +1)
  const lName2=fullName2.slice(fullName2.indexOf(' ')
  +1)
  if (lName1 > lName2) {
    return 1;
  } else if (lName1  < lName2) {
    return -1;
  } else {
    return 0;
  }
}

const trueIsFirst = function (par1, par2){
   if (par1 > par2 ) {
    return -1;
  } else if (par1 <par2 ) {
    return 1;
  } else {
    return 0;
  }
}


/************************
// ITERATION FUNCTIONS
 ************************/
const sortByNumberAscending = function (nums){
const copyOfArray = nums.slice(0)
return copyOfArray.sort(firstNumberIsLess)
}
 const sortByNumberDescending = function (nums){
  const copyOfarray= nums.slice(0)
  return copyOfarray.sort(secondNumberIsLess)  
 }

const sortByNameAscending = function (names){
const copyOfArray= names.slice(0)
  return copyOfArray.sort(firstNameIsFirstAlphabetically)
}

const truesFirst = function (arr){
const copyOfArray= arr.slice(0)
  return copyOfArray.sort(trueIsFirst)
}

const sortByLastNameAscending = function (names){

  const copyOfArray = names.slice(0)
  return copyOfArray.sort(firstLastNameIsFirstAlphabetically)
}
/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
