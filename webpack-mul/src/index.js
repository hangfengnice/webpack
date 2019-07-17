
let xhr = new XMLHttpRequest()

xhr.open('get', '/api/user')

xhr.onload = () => {
  console.log(xhr.responseText)
}
xhr.send()



// class Log{
//   constructor(){
//     console.lod('eror')
//   }
// }

// let log = new Log()