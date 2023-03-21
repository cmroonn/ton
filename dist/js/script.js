'use strict';

document.addEventListener("DOMContentLoaded", function () {
  try {
    var tabs = document.querySelectorAll(".product__info__head__btn");
    var elems = document.querySelectorAll(".product__info__body");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        elems.forEach(function (el) {
          if (tab.dataset.info === el.dataset.info) {
            tabs.forEach(function (tab) {
              return tab.classList.remove("active");
            });
            elems.forEach(function (el) {
              return el.classList.remove("active");
            });
            el.classList.add("active");
            tab.classList.add("active");
          }
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
});