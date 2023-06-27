const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = "0123456789"

function RandomBox(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function gernerate(){
  let collection = []
  collection = collection.concat(lowerCaseLetters.split(''))
  collection = collection.concat(upperCaseLetters.split(''))
  collection = collection.concat(numbers.split(''))
  
   let password = ""
        for(var i =0;i<5;i++){
          password += RandomBox(collection)
          
        }
  console.log('five code',password)
  
  return password  
}

module.exports = gernerate