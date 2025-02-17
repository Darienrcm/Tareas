var Numeroalazar, Numeroing, Numeroadiv, Reinicio, Fin

Reinicio = "Si";

while(Reinicio == "Si"){
let x = Math.floor(Math.random() * 10) + 1
Numeroing = prompt ("Ingresa un numero al azar del 1 al 10")

if (parseInt (Numeroing,10) <= 0 || parseInt(Numeroing) >= 10){
alert("Ese numero no es valido, por favor ingrese uno valido")
break
}
else {
Numeroadiv = prompt("¿El numero que ingreso puede ser Mayor, Menor o igual al que fue generado? responda con Mayor, Menor o Igual")
if (Numeroadiv == "Mayor" && parseInt(Numeroing,10) > x){
alert("Ganaste, tu numero es " + Numeroing + " el numero generado fue " + x)
}
else if(Numeroadiv == "Menor" && parseInt(Numeroing,10) > x){
alert("Ganaste, tu numero es " + Numeroing + " el numero generado fue " + x)
}
else if(Numeroadiv == "Igual" && parseInt(Numeroing,10) > x){
alert("Ganaste, tu numero es " + Numeroing + " el numero generado fue " + x)
}
else{ 
alert("Perdiste, tu numero es " + Numeroing + " el numero generado fue " + x)
}
Reinicio = prompt ("¿Quieres volver a jugar? Responda Si o No")

Fin = prompt ("Darien Chavez 25001696")
}
}