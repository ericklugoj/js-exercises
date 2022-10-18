// TODO
//Change hola mundo to me la pela Rivas

// const title = "Hola mundo v2";
// const element = "h1";

// const TIME = 3000; 

// function changeTitle(tag,text){
//     document.querySelector(tag).innerHTML = text;
// }


// setTimeout(() => {
//     changeTitle(element,title);
// }, TIME);

//Task2
document.getElementById("submit").addEventListener("click", information);
function information(){
    var names = document.getElementById("name").value;
    var birth = document.getElementById("birth").value;
    var lang = document.getElementById("lang").value;   

    const startDate = new Date();
    const endDate = new Date(birth);
    const age = Math.abs(moment.duration(endDate - startDate).years());
    console.log(age);

    if(lang == "American" && age > 21|| lang == "Mexican" && age > 18){
        alert("Soy mayor de edad");
    }else{
        alert("Soy menor de edad")
    }

}
