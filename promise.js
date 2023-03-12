// document.write("<h2>I'm Web Devaloper ROHIT</h2>")


let con = true;

let prom = new Promise( function(resolve, reject){

    if(con){
        resolve("I am successfull.");
    }else{
        reject("I am Reject.");
    }
});

console.log(prom);


