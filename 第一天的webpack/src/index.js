



import $ from 'jquery'
import './css/index.css'
import './css/index.scss'
import 'bootstrap/dist/css/bootstrap.css'


$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor','blue')

})

// class Person{
//     static info = {name:'zs',age:20}
// }
// console.log(Person.info)