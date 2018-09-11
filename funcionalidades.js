const API_URL_STW = 'https://swapi.co/api/';
const API_URL_CWS = 'https://www.codewars.com/api/v1/';
const PERSONA_URL = 'people/:id'

const USER_ONE =  `${API_URL_STW}${PERSONA_URL.replace(':id', 1 )} `;
const OPT = { crossDomain: true };

$.get( USER_ONE, OPT, (personaje)=>{
    console.log(`Hola soy: ${personaje.name} `)
}); 
//console.log(`Hola soy: ${USER_ONE}`)

//El comportamiento asincrono JS <3
console.log('LORD JCOB');
setTimeout(()=> console.log('hola devs'), 2000 );
console.log('Hola backend-Devs');