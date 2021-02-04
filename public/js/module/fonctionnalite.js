import {creationDiv} from './Structure.js'

let mySection = document.querySelector('section')

let myInputCreation = document.querySelector('input')

let nouvelleTache;



let myDivAvecLesTaches = document.createElement('div')
mySection.appendChild(myDivAvecLesTaches)


let myAjout = document.querySelectorAll('input')[1]

let stock;
let iconEdit;
let iconCheck;
let iconSuppr;

let myAFaire = document.querySelector('#filtre button')
let myTerminer = document.querySelectorAll('#filtre button')[1]
let myTout = document.querySelectorAll('#filtre button')[2]


