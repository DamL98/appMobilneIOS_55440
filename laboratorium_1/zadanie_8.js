// 1. policzyc srednia z tablicy grades OK
// 2. prog zaliczenia jako CONST OK 
// 3. status zal/oblane na podstawie sredniej z grades OK
// 4. fn (oceny[]) return Object 
// 5. dodatkowa klasyfikacja ocen bdb db dst itd.

const grades = [3.0, 4.0, 5.0, 3.5, 4.5];



// const sumaOcen = grades.reduce((acc, grade) => acc + grade, 0)
// const srednia = sumaOcen / grades.length
// const klasyfikacja = srednia >= PROG_ZALICZENIA ? "zaliczone" : "oblane"

function sprawdzZaliczenieWedlugOcen(oceny = []){
    let klasyfikacjaOceny = ''
    const PROG_ZALICZENIA = 4.0

    if(oceny.length <= 0){
        console.log("Nie podano ocen")
        return;
    } else {
        const suma = oceny.reduce((acc, ocena) => acc + ocena, 0)
        const srednia = suma / oceny.length
        const status_zaliczenia = srednia >= PROG_ZALICZENIA ? "zaliczone" : "oblane"

        if(srednia > 3.0){
            klasyfikacjaOceny = "niedostateczny"
        }
        if(srednia >= 3.0){
            klasyfikacjaOceny = "dostateczny"
        }
        if(srednia >= 3.0){
            klasyfikacjaOceny = "dostateczny +"
        }
        if(srednia >= 4.0){
            klasyfikacjaOceny = "dobry"
        }
        if(srednia >= 4.5){
            klasyfikacjaOceny = "dobry +"
        }
        if(srednia >= 5.0){
            klasyfikacjaOceny = "bardzo dobry"
        }
        
        return {
            sumaOcen: suma,
            sredniaOcen: srednia,
            status: status_zaliczenia,
            klasyfikacjaOceny: klasyfikacjaOceny
        }
    }
}

function sprawdzMinMaxOcen(oceny = []){
    if(!oceny.length > 0){
        console.log("Nie podbano zadnej oceny")
    }else{
        const najwyzszaOcena = Math.max(...oceny)
        const najnizszaOcena = Math.min(...oceny)

        return {
            ocenaMin: najnizszaOcena,
            ocenaMax: najwyzszaOcena
        }
    }
}


const sprawdzenieOceny = sprawdzZaliczenieWedlugOcen(grades);
console.log(sprawdzenieOceny)

const MinMaxOceny = sprawdzMinMaxOcen(grades)
console.log(MinMaxOceny)