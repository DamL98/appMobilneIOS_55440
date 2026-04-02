const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const dayType = "laboratorium";


if(!hasLaptop){
    console.log("Nie ma laptopa")
}else{
    console.log("Ma laptopa")
}

if(!hasCharger){
    console.log("Nie ma ładowarki")
}else{
    console.log("Ma ładowarki")
}

if(!hasNotebook){
    console.log("Nie ma zeszyt")
}else{
    console.log("Ma zeszyt")
}

console.log("---------------------------")
console.log(hasLaptop && hasCharger && hasNotebook ? "Gotowy" : "Nie gotowy")

console.log("---------------------------")
if(dayType == "laboratorium"){
    console.log("Zajęcia typu Laboratorium")
} else {
    console.log("Zajęcia typu Wykłady")
}