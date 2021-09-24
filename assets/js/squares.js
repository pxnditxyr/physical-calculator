const perimetroCuadrado = (ladoCuadrado) => ladoCuadrado * 4;
const areaCuadrado = (ladoCuadrado) => ladoCuadrado * ladoCuadrado;
const perimetroRectangulo = (baseRectangulo, alturaRectangulo) => (baseRectangulo * 2)+(alturaRectangulo * 2);
const areaRectangulo = (baseRectangulo, alturaRectangulo) => baseRectangulo * alturaRectangulo;
var calcularAreaCuadrado = () => {

    const ladoCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaCuadrado(ladoCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
var calcularPerimetroCuadrado = () => {

    const ladoCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = perimetroCuadrado(ladoCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}
var calcularAreaRectangulo = () => {

    const baseRectangulo = document.querySelector("#base-rectangulo").value;
    const alturaRectangulo = document.querySelector("#altura-rectangulo").value;
    const resultado = areaRectangulo(baseRectangulo, alturaRectangulo)
    document.querySelector("#resultado").innerHTML = resultado
}
var calcularPerimetroRectangulo = () => {

    const baseRectangulo = document.querySelector("#base-rectangulo").value;
    const alturaRectangulo = document.querySelector("#altura-rectangulo").value;
    const resultado = perimetroRectangulo(baseRectangulo, alturaRectangulo)
    document.querySelector("#resultado").innerHTML = resultado
}