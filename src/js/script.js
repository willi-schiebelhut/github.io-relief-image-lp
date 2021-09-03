'use strict';

window.addEventListener('DOMContentLoaded', () => {
new Swiper('.feedbacks__slider', {
        // Optional parameters
        // loop: true,
        slidesPerView: 3,
        spaceBetween: 25,
        grabCursor: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            992: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },

        }
      });

    //Slider-gallery
new Swiper('.gallery', {
      // Optional parameters
      loop: true,
      // Navigation arrows
      navigation: {
        nextEl: '.gallery-button-next',
        prevEl: '.gallery-button-prev',
      },
    
      // And if we need scrollbar
    });
    //Tabs
    const tabsWrapper = document.querySelector('.tabs__titles'),
          tabsContent = document.querySelectorAll('.tabs__content'),
          tabsButton = document.querySelectorAll('.tabs__item');

          function hideTabContent() {
            tabsContent.forEach(i => {
                i.classList.add('hide', 'fade');
                i.classList.remove('show');
            });
            tabsButton.forEach(i => {
                i.classList.remove('tabs__item-active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabsButton[i].classList.add('tabs__item-active');
        }
        hideTabContent();
        showTabContent();
    
        tabsWrapper.addEventListener('click', (e) => {
            const target = e.target;
            if (target && target.classList.contains('tabs__item')) {
                tabsButton.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

  //Mobile menu

  const menu = document.querySelector('.main-navigation'),
  menuItem = document.querySelectorAll('.main-navigation__link'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger-active');
      menu.classList.toggle('main-navigation-active');
  });
  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger-active');
          menu.classList.toggle('main-navigation-active');
      });
  });

  //About accordeon

  const hiddentext = document.querySelector('.mobile__hidden'),
        chevron = document.querySelector('.arrow-down'),
        wrapper = document.querySelector('.about__wrapper');

        chevron.addEventListener('click', () => {
          hiddentext.classList.toggle('show');
          wrapper.classList.toggle('transition');
          chevron.classList.toggle('transform');
        });

  //Open privacy
  // const policy = document.querySelector('.policy'),
  //       policyTrigger = document.querySelector('.feedback-form__policy-text'),
  //       close = document.querySelector('.policy__close');

  //       policyTrigger.addEventListener('click', () => {
  //         policy.style.display = 'block';
  //         document.body.style.overflow = 'hidden';
  //       });

  //       close.addEventListener('click', () => {
  //           policy.style.display = 'none';
  //       });

  //Open feedback modal
  const modalTrigger = document.querySelector('.hero__button'),
        modal = document.querySelector('.feedback-form'),
        overlay = document.querySelector('.overlay'),
        modalClose = document.querySelector('.modal__close');
        modalTrigger.addEventListener('click', showModal);

        function showModal() {
          overlay.style.display = 'block';
          modal.style.display = 'block';
        }

        function closeModal() {
          overlay.style.display = 'none';
          modal.style.display = 'none';
        }
        modalClose.addEventListener('click', closeModal);
        document.addEventListener('keydown', (e) => {
          if (e.code === 'Escape') {
            closeModal();
          }
        });

    //Accordeon


    document.querySelectorAll('.accordeon__item-trigger').forEach(i => {
      i.addEventListener('click', () => {
        const parent = i.parentNode;
        const child = i.nextElementSibling;
        parent.classList.toggle('accordeon__item-active');
        child.classList.add('transition');
        i.classList.toggle('accordeon__item-trigger-active');
      });
    });

    //Form

  //   const form = document.getElementById('form');
  //   form.addEventListener('submit', formSend);
  //   async function formSend(e) {
  //     e.preventDefault();
      
  //     let error = formValidate(form);
    

  //   function formValidate(form) {
  //     let error = 0;
  //     let formReq = document.querySelectorAll('_req');

  //     for(let index = 0; index < formReq.length; index++) {
  //       const input = formReq[index];
  //       formRemoveError(input);

  //       if (input.getAttribute("type") === "checkbox" && input.checked === false) {
  //         formAddError(input);
  //         error++;
  //       } else {
  //         if (input.value === '') {
  //           formAddError(input);
  //           error++;
  //         }
  //       }
  //     }
  //   }
  // }
  //   function formAddError(input) {
  //     // input.parentNode.classList.add('_error');
  //     input.classList.add('_error');
  //   }

  //   function formRemoveError(input) {
  //     input.parentElement.classList.remove('_error');
  //     input.classList.remove('_error');
  //   }

  //Masked input
  $('input[name=phone]').mask("+7 (999) 999-99-99");

  //Validation

  $('.form').validate({
    rules:{
        name: {
            required: true,
            minlength: 2
          },
        phone: "required",
        checkbox: "required"
    },
    messages: {
        name:{
            required: "Пожалуйста, введите своё имя",
          },
        phone: "Пожалуйста, введите номер телефона",
        checkbox: ""
      }
    });

    const checkbox = document.querySelector(',checkbox'),
          form = document.querySelector('.form');

          if (checkbox !== checked) {
            form.style.display = 'none';
          }

    //Mail send

    $('form').submit(function (e) {
      e.preventDefault();
      if (!$(this).valid()) {
        return;
    }
      $('.loader').show();
      $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
      }).done(function () {
        $('.loader').hide();
        $('.done').show();
        $(this).find("input").val("");
        $('form').trigger('reset');
      });
      
      return false;
    });
});