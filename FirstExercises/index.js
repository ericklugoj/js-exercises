// TODO
//Change hola mundo to me la pela Rivas

const title = "Hola mundo v2";
const element = "h1";

const TIME = 3000; 

function changeTitle(tag,text){
    document.querySelector(tag).innerHTML = text;
}


setTimeout(() => {
    changeTitle(element,title);
}, TIME);


