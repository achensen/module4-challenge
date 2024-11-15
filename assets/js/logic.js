// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


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

  formInfo = formInfo.concat(newData)
  // formInfo.push(newData);

  localStorage.setItem('formInfo',JSON.stringify(formInfo));

  console.log('New data added to localStorage');
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = 'blog.html';

const redirectPage = function () {
  redirectURL = 'blog.html';
  location.assign('blog.html');
};
