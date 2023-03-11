// document.write("<h2>I'm Web Devaloper ROHIT</h2>")

class stud{
    constructor(name){
       this.studName = name;
        document.write(`${this.studName} `)
    }

    static hello(){
        document.write(` Static Function  `)
    }
}

let a = new stud("Rohit Nittawadekar");


stud.hello();