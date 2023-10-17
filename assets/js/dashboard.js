const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".js-nav__item a");

function handleScroll() {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const parentLi = link.parentElement;
    if (link.getAttribute("href") === `#${current}`) {
      parentLi.classList.add("active");
    } else {
      parentLi.classList.remove("active");
    }
  });
}

// Handle scroll
window.addEventListener("scroll", handleScroll);

// Handle navigation item clicks
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSectionId = link.getAttribute("href").slice(1);
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
      const targetOffsetTop = targetSection.offsetTop;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth",
      });
    }
  });
});



$(document).ready(function(){

  $(function() {
    var $tabButtonItem = $('#tab-button li'),
        $tabSelect = $('#tab-select'),
        $tabContents = $('.tab-contents'),
        activeClass = 'is-active';
  
    $tabButtonItem.first().addClass(activeClass);
    $tabContents.not(':first').hide();
  
    $tabButtonItem.find('a').on('click', function(e) {
      var target = $(this).attr('href');
  
      $tabButtonItem.removeClass(activeClass);
      $(this).parent().addClass(activeClass);
      $tabSelect.val(target);
      $tabContents.hide();
      $(target).show();
      e.preventDefault();
    });
  
    $tabSelect.on('change', function() {
      var target = $(this).val(),
          targetSelectNum = $(this).prop('selectedIndex');
  
      $tabButtonItem.removeClass(activeClass);
      $tabButtonItem.eq(targetSelectNum).addClass(activeClass);
      $tabContents.hide();
      $(target).show();
    });
  });
});
