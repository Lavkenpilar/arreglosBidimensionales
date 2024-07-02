/* const productos = [
    ["patineta", "verde", 35990],
    ["bicicleta", "amarilla", 120990],
    ["patines", "morado", 60990],
    ["scooter", "negro", 250990]
   ]
   let html = ''
   for (let producto of productos){
    html +=  `
    <div>
    <h1>${producto [0]}</h1>
    <p>${producto [1]}</p>
    <p>${producto [2]}</p>
    </div>`
          }
          const body = document.querySelector ("body")
          body.innerHTML = htm */

const estudiantes = [
    [ "francisca", 10, 8, 10],
    ["patricio", 7,9, 9, 6,10,10 ],
    ["camila", 9,9,10,9],
    ["pedro", 8, 8, 10]
]
let html = ''
for (let estudiante of estudiantes){
    html+= `<p>`
    for (let nota of estudiante){
        html += `${nota}`
    }
    html += `</p>`
}
const body = document.querySelector ("body")
body.innerHTML=html
