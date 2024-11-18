// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleButton = document.getElementById('toggle');


let lightMode = true

function lightModeDarkMode(){

  if (lightMode){
    lightMode = false
    document.body.classList.remove('light')
    document.body.classList.add('dark')
  } else if (!lightMode){
    lightMode = true
    document.body.classList.remove('dark')
    document.body.classList.add('light')
  }
 
  console.log('Button Connected')
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage(){
  const savedInfo = localStorage.getItem('formInfo');

  if (savedInfo){
    return JSON.parse(savedInfo);
  }else {
    console.log('No localStorage Data');
    return null;
  }
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(newData){
  let formInfo = JSON.parse(localStorage.getItem('formInfo')) || [];

  formInfo = formInfo.concat(newData);
 

  localStorage.setItem('formInfo',JSON.stringify(formInfo));

  console.log('New data added to localStorage');
}

// ! Use the following function whenever you need to redirect to a different page

// let redirectURL = 'blog.html';

// const redirectPage = function () {
//   redirectURL = 'blog.html';
//   location.assign('blog.html');
// };




toggleButton.addEventListener('click', lightModeDarkMode);



// // TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function 

// if (localStorage.getItem('theme')) === 'dark' {
//     document.body.classList.add('dark');
// }

// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark');

//     if (document.body.classList.contains('dark')){
//       localStorage.setItem ('theme', 'dark');
//     }else {
//       localStorage.setItem('theme', 'light');
//     }
// });


// // TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
// function readLocalStorage(){
//   const savedInfo = localStorage.getItem('formInfo');

//   if (savedInfo){
//     return JSON.parse(savedInfo);
//   }else {
//     console.log('No localStorage Data');
//     return [];
//   }
// }

// // TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
// function storeLocalStorage(newData){
//   let formInfo = JSON.parse(localStorage.getItem('formInfo')) || [];

//     if (!Array.isArray(newData)) {
//       newData = [newData];
//     }

//   formInfo = formInfo.concat(newData)
//   // formInfo.push(newData);

//   localStorage.setItem('formInfo',JSON.stringify(formInfo));

//   console.log('New data added to localStorage');

//   redirectPage()
// }

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'blog.html';

const redirectPage = function (redirectURL) {
  redirectURL = 'blog.html';
  location.assign('blog.html');
};
