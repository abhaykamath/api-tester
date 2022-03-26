const prompt = require('prompt-sync')({ sigint: true})
const CONTROLLER = require('./controller')

let METHOD = prompt(`GET/POST/DELETE: `)

if(METHOD === 'GET') {
    console.log('\n1) All users');
    console.log('\n2) Find by ID');
    console.log('\n')
    let choice = prompt('Enter choice : ')
    if(choice === '1') {
        CONTROLLER.GET_USERS()
    }
    else {
        console.log('\n')
        let ID = prompt('Enter the ID : ')
        CONTROLLER.GET_USER_BY_ID(ID)
    }
} 

else if (METHOD === 'POST') {
    let name = prompt(`name: `)
    let age = prompt(`age: `)
    CONTROLLER.ADD_USER(name, age)
}

else if (METHOD === 'DELETE') {
    let id = prompt(`id: `)
    CONTROLLER.REMOVE_USER(id)
}