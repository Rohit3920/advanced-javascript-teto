// document.write("<h2>I'm Web Devaloper ROHIT</h2>")

class stud{
    constructor(){
        let name;
        
    }

    hello(){
        document.write(`constructor ${this.name}`)
    }
}

let a = new stud();
a.name = "Rohit"
a.hello();