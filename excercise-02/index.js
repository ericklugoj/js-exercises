//Se usa $ para diferenciar un elemento del DOM
const $userName = document.getElementById("name");
const $birth = document.getElementById("birth");
const $country = document.getElementById("country");

// function isMajor() {
//   const userBirth = new Date(birth);
//   const today = new Date();

//   const resultDiferenceAge = today.getFullYear() - userBirth.getFullYear();
//   console.log(resultDiferenceAge);
//     console.log(country === "american" && resultDiferenceAge >= 21);
//     console.log(country === "mexican" && resultDiferenceAge >= 18);

//   return (
//     (country === "american" && resultDiferenceAge >= 21) ||
//     (country === "mexican" && resultDiferenceAge >= 18)
//   );
// }

// function displayAge() {
//   let message = "";
//   const userName = document.getElementById("name").value;
//   isMajor() ? (message = "Soy mayor de edad") : (message = "Soy menor de edad");
//   document.getElementById("age").innerHTML = `${userName} ${message}`;
// }

const isMajor = () => {
  console.log($userName.value);
  const userBirth = new Date($birth.value);
  const today = new Date();

  const resultDiferenceAge = today.getFullYear() - userBirth.getFullYear();
  console.log(resultDiferenceAge);
  return (
    ($country.value === "american" && resultDiferenceAge >= 21) ||
    ($country.value === "mexican" && resultDiferenceAge >= 18)
  );
};

const displayAge = () => {
  let message = "";
  //   const userName = document.getElementById("name").value;
  isMajor() ? (message = "es mayor de edad") : (message = "es menor de edad");
  document.getElementById("age").innerHTML = `${$userName.value} ${message}`;
};

//Siempre se dispara el eveneto para el form
//preventDefault es para cancelar la action que tiene por default el form
document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  displayAge();
});
