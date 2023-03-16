
let promiseCall = function(returnData, message){
    return function(resolve, reject)  {
        setTimeout(() => {
            console.log(`result: ${returnData} ; `);
        }, 2000)
    }
};


let p1 = new Promise(promiseCall(10, "first promise"))
let p2 = new Promise(promiseCall(20, "second promise"))


Promise.all([p1,p2]).then((result) => {
    for(var i in result){
        total += result[i];
    }
})


