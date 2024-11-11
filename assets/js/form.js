// TODO: Create a variable that selects the form element
const formEl= document.querySelector('form');

function inputCheck(event){
    event.preventDefault()
    console.log('input check');

    const username= document.querySelector('#username').value.trim();
    const title= document.querySelector('#title').value.trim();
    const content= document.querySelector('#content').value.trim();
    const p= document.querySelector('#error');

    if (!username || !title || !content){
        p.style.display = 'block';
    }else {
        p.style.display = 'none';
    }

    
    if (username && title && content){

        const formInfo = {
            username: username,
            title: title,
            content: content,
        
        };

        localStorage.setItem('formInfo', JSON.stringify(formInfo));
        console.log('info saved');

        window.location.href = 'blog.html'

    }
}



// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, 
// then redirect to the blog page using the `redirectPage` function.
//  If the form is submitted with missing data, display an error message to the user.
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formEl.addEventListener('submit', inputCheck)
