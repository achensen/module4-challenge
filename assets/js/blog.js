
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

// TODO: Call the `renderBlogList` function// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//   <title>My First Blog</title>

//   <link rel="stylesheet" href="./assets/css/styles.css" />
//   <link rel="stylesheet" href="./assets/css/blog.css" />

//   <script defer src="./assets/js/logic.js" type="text/javascript"></script>
//   <script defer src="./assets/js/blog.js" type="text/javascript"></script>
// </head>

// <body>
//     <header>
//         <h1>My First Blog</h1>
//         <button id="toggle">Toggle Light/Dark Mode</button>
//         <!-- light mode dark mode toggle  -->






// // TODO: Create a variable that selects the main element, and a variable that selects the back button element
// const mainEl= document.querySelector('main');

// const backButton= document.getElementById('back');

// backButton.addEventListener('click',() => {
//     window.history.back();


// });


// // // TODO: Create a function that builds an element and appends it to the DOM
// //     function createAndAppendElement(elementType) {
// //         const newElement = document.createElement(elementType);
// //         newElement.extcontent = content;

// //     }

// // // TODO: Create a function that handles the case where there are no blog posts to display
// //     function noBlogPosts(){
// //         const main = document.createElement('p');
// //         const noPostsMessage = document.createElement('p');
// //         noPostsMessage.textContent = "No blog posts available.";
// //         main.appendChild(noPostsMessage);
// //     }
// // // TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
// //     function renderBlogPost(posts){
// //         const main = document.querySelector('main');
// //         main.innerHTML = '';

// //         if(posts.length === 0) {
// //             handleNoPosts
// //         }
// //         }else { 
// //         posts.foreach(post => {
         
// //             const article = document.createElement('article');
// //             const blockquote = document.createElement('blockquote');
// //             const h2 = document.createElement('h2');
// //             const p = document.createElement('p');

// //             blockquote.textContent = `"${post.quote}"`;
// //             h2.textContent = post.title;
// //             p.textContent = post.author;

// //             article.appendChild(blockquote);
// //             article.appendChild(h2);
// //             article.appendChild(p);

// //             main.appendChild(article);
// //         });

// //     }



// // // TODO: Call the `renderBlogList` function

// // renderBlogPost();