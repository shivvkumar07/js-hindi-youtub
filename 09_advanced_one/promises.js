const promiseOne = new Promise(function(resolve, reject) 
{
    setTimeout(function(){
        console.log('Asyc task is complete ');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
});

new Promise(function(resolve, reject){
    setTimeout(function(){
console.log("async task 2")
resolve()
    }, 1000)
}).then(function(){
    console.log("async is resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example.com"})

    }, 1000)
})


promiseThree.then(function(user){
console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
           resolve({username:"hitesh", passward:"123"}) 
        }
        else{
            reject('ERROR: something went wrong');
        }
    },1000)
})


const username = promiseFour.then((user)=>{
    console.log(user);
    return user.username;
})

console.log(username);