let tab_links = document.querySelectorAll('.tab__navigation .tab');
let tab_contents = document.querySelectorAll('.tab__contents  .tab__content');
tab_links.forEach((tab) => {
   tab.addEventListener('click', (e) => {
      e.currentTarget.classList.add('tab_active');
      nextTab(Array.from(tab_links).indexOf(e.currentTarget));
   });
});

function nextTab(index)
{
   document.querySelector('.tab_active').classList.remove('tab_active');
   document.querySelector('.tab__content_active').classList.remove('tab__content_active');
   Array.from(tab_contents)[index].classList.add('tab__content_active');
}