const axios = require('axios')

let url = 'http://localhost:5000/api/users'

async function GET(url) {
    let RESPONSE = await axios.get(url)
    return RESPONSE
}

async function POST(url, name, age) {
    let RESPONSE = await axios.post(url, {
        name: name,
        age: age
    })
    return RESPONSE
}

async function DELETE(url) {
    let RESPONSE = await axios.delete(url)
    return RESPONSE
}

async function GET_USERS() {
    let RESPONSE = await GET(`${url}`)
    let USERS = RESPONSE.data
    let STATUS = RESPONSE.status
    let NUMBER_OF_USERS = USERS.length
    console.log('\n')
    console.log(`Status : ${STATUS} | SUCCESS`)
    console.log('\n')
    console.log(`There are ${NUMBER_OF_USERS} users in the database`)
    console.log(USERS)
}

async function GET_USER_BY_ID(id) {
    let RESPONSE = await GET(url+'/'+id)
    let STATUS = RESPONSE.status
    if(STATUS === '404') {
        console.log('\n')
        console.log(`Status : ${STATUS} | FAILED | USER NOT FOUND !`)
    }
    else {
        console.log('\n')
        console.log(`Status : ${STATUS} | SUCCESS | USER FOUND`)
        console.log('\n')
        console.log(RESPONSE.data)
        console.log('\n')
    }
}

async function ADD_USER(name, age) {
    let RESPONSE = await POST(url, name, age)
    let STATUS = RESPONSE.status
    let USER_ADDED = RESPONSE.data
    console.log('\n')
    console.log(`Status : ${STATUS} | SUCCESS | USER ADDED`)
    console.log('\n')
    console.log(USER_ADDED)
}

async function REMOVE_USER(id) {
    let RESPONSE = await DELETE(url+`/${id}`)
    let STATUS = RESPONSE.status
    let USER_REMOVED = RESPONSE.data
    console.log('\n')
    console.log(`Status : ${STATUS} | SUCCESS | USER REMOVED`)
    console.log('\n')
    console.log(USER_REMOVED)

}

module.exports = {
    GET_USERS,
    ADD_USER,
    GET_USER_BY_ID,
    REMOVE_USER
}