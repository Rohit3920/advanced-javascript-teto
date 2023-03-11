// document.write("<h2>I'm Web Devaloper ROHIT</h2>")

class stud{
    constructor(name){
        this.studName = name;
        
    }

    hello(){
        document.write(`constructor ${this.studName}`)
    }
}

let a = new stud( "Rohit Nittawadekar");

a.hello();