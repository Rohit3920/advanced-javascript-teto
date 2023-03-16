document.write("Hello! I'am Web Develper ROHIT <br> Promise.all")


let p1 = new Promise((resolve, reject) => {
    setTimeout( () => {
            console  .log("promise Frist");
            resolve(10);
        }, 1000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout( () => {
            console  .log("promise second");
            resolve(20);
        }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout( () => {
            console  .log("promise second");
            resolve(30);
        }, 3000);
});




Promise.all([p1,p2,p3]).then((result)=> {
   
    console.log(`Result : ${result}`)
})

