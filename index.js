const sana = new Date()

let h1 = document.querySelector(".h1")
let h11 = document.querySelector(".h11")

h1.innerHTML = `Sana: ${sana.getDate()}.${sana.getMonth() + 1
    }.${sana.getFullYear()}`

h11.innerHTML = `Vaqt: ${sana.getHours()}:${sana.getMinutes()}:${sana.getSeconds()}`