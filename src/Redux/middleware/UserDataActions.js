import axios from 'axios';




export const UserRegisterHandler = (userData) => {
    console.log('request' , userData)
    return async () => {
        // await axios.post('https://jsonplaceholder.typicode.com/posts').then( console.log('success') ).catch(console.log('failed'))
    }
}

export const choosePlan = (userData) => {
    console.log('plan' , userData)
    return async () => {
        // await axios.post('https://jsonplaceholder.typicode.com/posts').then( console.log('success') ).catch(console.log('failed'))
    }
}

export const UserLoginHandler = (userData) => {
    console.log('arrived', userData);
    return async () => {
        // await axios.post('https://jsonplaceholder.typicode.com/posts',{...userData}).then(console.log('success')).catch(console.log('error'))
    }
}


export const creditCardHandler = (userData) => {
    console.log('carddata' , userData)
    return async () => {
        // await axios.post('https://jsonplaceholder.typicode.com/posts').then( console.log('success') ).catch(console.log('failed'))
    }
}