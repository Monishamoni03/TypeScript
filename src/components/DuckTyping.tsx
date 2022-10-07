interface ISubject {
    x: string
    y: string
}

class Maths {
    message = "Welcome to maths class"
}

class Physics {
    message = "Welcome to physics class"
}

class French {
    message = "Welcome to french class"
}

let mathsMam:Maths = new Physics();
let frenchSir:French = new Maths();

console.log("Maths mam: " +mathsMam.message);
console.log("French sir: " +frenchSir.message);