// import {multiply,add, subtract, divide, isBoolean,mo} from 'lodash'
// const {add,subtract,divide,multiply,isBoolean} = require('lodash')
// const axios = require('axios')

// console.log(multiply(3,4))
// console.log(add(3,4))
// console.log(subtract(3,4))
// console.log(divide(3,4))
// console.log(isBoolean('false'))
// console.log(isBoolean(true))

import axios from 'axios'
let data ;
  async function getdata() {
     data = await axios.get('https://catfact.ninja/fact')
     console.log(data.data.fact,"here")
  } 
  getdata();

console.log(data?.data)

