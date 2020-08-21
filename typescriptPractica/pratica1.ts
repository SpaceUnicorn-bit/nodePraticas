

//types 

var miletrita: string = "holis";

var miNumerito: number = 12;

var buleano: boolean = true;

class MyClassNumerito {
    cicloNumerito(){
        for (let index = 100; index < 999; index++) {

            if (Number.isInteger(index / 10)) {
                this.triple(index);
            }
        }
    }

    triple(num){
        console.log(num);

    }
}

var classNumerito = new MyClassNumerito();

