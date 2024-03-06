/*

const request = obj => {
    return new Promise((resolve, reject) => {
       const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send(null)


        xhr.addEventListener('load', () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.responseText)
          } else {
            reject(xhr.statusText)
          }
      }) 
    }) 
}

*/


document.addEventListener('click', (e) => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a') {
        e.preventDefault()
        loadpage(el)
    }
})



async function loadpage(el) {
    

    try {
        const href = el.getAttribute('href')

        const response = await fetch(href)
        
        if(response.status !== 200) {
            throw new Error('ERROR 404!')
        }

        const html = await response.text()
        loadresult(html)
    } catch (e) {
        console.error(e)
    }
}

function loadresult(response) {
    const result = document.querySelector('.result')
    result.innerHTML = response
}