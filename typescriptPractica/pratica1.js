//types 
var miletrita = "holis";
var miNumerito = 12;
var buleano = true;
var MyClassNumerito = /** @class */ (function () {
    function MyClassNumerito() {
    }
    MyClassNumerito.prototype.cicloNumerito = function () {
        for (var index = 100; index < 999; index++) {
            if (Number.isInteger(index / 10)) {
                this.triple(index);
            }
        }
    };
    MyClassNumerito.prototype.triple = function (num) {
        console.log(num);
    };
    return MyClassNumerito;
}());
var classNumerito = new MyClassNumerito();
