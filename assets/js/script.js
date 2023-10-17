$(document).ready(function(){
    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
     $('.sub-btn').toggleClass('active')
        $(this).find('.dropdown').toggleClass('rotate')
    })

    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
    })
    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
    })


    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      items:1,
      autoplay:true,
      autoplayTimeout:2000,
      autoplayHoverPause:true
  })



   
})


const get = elem => document.getElementById(elem),
					 registerButton = get('register'),
					 loginButton = get('login'),
					 container = get('container')
 
registerButton.onclick = () => {
					 container.className = "active"
}

loginButton.onclick = () => {
						container.className = "close"
}
 




function myapp() {
    const buttons = document.querySelectorAll(".bt");
    const cards = document.querySelectorAll(".cr");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === "all";
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const currentCategory = button.dataset.filter;
        console.log(currentCategory);
        filter(currentCategory, cards);
      });
    });
  }
  
  myapp();

  const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

// category-product/////////////////////////

// const categories = document.querySelector('.category-categories_with_icons_block_component__categoryLinks');
// const showmorebtn = document.getElementById('showbtn');
// let showcontent=document.querySelector('.showcontent')
// let showIcon=document.querySelector('.category-categories_with_icons_block_component__chevron')

// showmorebtn.onclick = function () {
//   if (categories.classList.contains("open")) {
//     // shrink the box
//     categories.classList.remove("open");
//     console.log('opem')
//     showcontent.innerHTML=' Show more'
//     showIcon.classList.remove('rotate')

//   } else {
//     // expand the box
//     categories.classList.add("open");
//     console.log('close')
//     showcontent.innerHTML='Show less'
//     showIcon.classList.add('rotate')
   
//   }
// };

// const categories2 = document.querySelector('.content2');
// const showmorebtn2 = document.getElementById('showbtn2');
// let showcontent2=document.querySelector('.showcontent2')
// let showIcon2=document.querySelector('.category-categories_with_icons_block_component__chevron')

// showmorebtn2.onclick = function () {
//   if (categories2.classList.contains("open")) {
//     // shrink the box
//     categories2.classList.remove("open");
//     console.log('opem')
//     showcontent2.innerHTML=' Show more'
//     showIcon2.classList.remove('rotate')

//   } else {
//     // expand the box
//     categories2.classList.add("open");
//     console.log('close')
//     showcontent2.innerHTML='Show less'
//     showIcon2.classList.add('rotate')
   
//   }
// };



// const readcontent = document.querySelector('.category-article_block_component__expanded');
// const readbtn = document.getElementById('readbtn');


// readbtn.onclick = function () {
//   if (readcontent.classList.contains("open")) {
//     // shrink the box
//     readcontent.classList.remove("open");
//     console.log('opem')
//     readbtn.innerHTML=' Show more'


//   } else {
//     // expand the box
//     readcontent.classList.add("open");
//     console.log('close')
//     readbtn.innerHTML='Show less'
    
   
//   }
// };