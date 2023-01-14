const fontSizeButtons = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
fontSizeButtons.forEach((fontSize) => {
   fontSize.addEventListener('click', (e) => {
       e.preventDefault();
       document.querySelector('.font-size_active').classList.remove('font-size_active');
       e.currentTarget.classList.add('font-size_active');
       book.classList.remove('book_fs-small', 'book_fs-big');
       switch (e.currentTarget.getAttribute('data-size')) {
           case 'small' : {
               book.classList.add('book_fs-small');
               break;
           }
           case 'big' : {
               book.classList.add('book_fs-big');
               break;
           }
       }
   });
});