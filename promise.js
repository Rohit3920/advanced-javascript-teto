// document.write("<h2>I'm Web Devaloper ROHIT</h2>")


// let con = true;

// let prom = new Promise( function(resolve, reject){

//     if(con){
//         resolve("I am successfull.");
//     }else{
//         reject("I am Reject.");
//     }
// });

// console.log(prom);


let complate = true;

function prom( complete ){
    return new Promise(function(resolve, reject){
        if(complete){
            resolve("I am successfull.");
        }else{
            reject("I am Failed");
        }
    });
}

let onFulfilment = (result) => {
    console.log(result);
    document.write(result);
}

let onRejection = (error) => {
    console.log(error);
    document.write(error);
}


prom(complate).then(onFulfilment);
prom(complate).catch(onRejection);