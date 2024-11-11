// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const mainEl= document.querySelector('main');

const backButton= document.getElementById('back');

backButton.addEventListener('click',() => {
    window.history.back();
});


// TODO: Create a function that builds an element and appends it to the DOM
// function createAndAppendElement(){
//     const 
// }

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function