function meuescopo() {
    const form = document.querySelector('.form')

    function recebeevent(event) {
      event.preventDefault()
    }

    form.addEventListener('submit', recebeevent)
}

meuescopo()

const peoples = []

const name = document.querySelector('.name')
const fullname = document.querySelector('.fullname')
const weight = document.querySelector('.Weight')
const height = document.querySelector('.Height')
const buttom = document.querySelector('.button')
const inf = document.querySelector('.informations')

peoples.push({
  name: name.value,
  fullname: fullname.value,
  weight: weight.value,
  height: height.value
})

function clique(x, y, p, z) {
  const result =   [name.value + ' ' + fullname.value + " " + weight.value + " " + height.value]
  inf.innerHTML = result
}

clique()

 



