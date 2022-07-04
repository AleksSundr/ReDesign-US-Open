/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/file2.js":
/*!********************************!*\
  !*** ./src/assets/js/file2.js ***!
  \********************************/
/***/ (function() {

eval("console.log('file 2');\r\n\n\n//# sourceURL=webpack://alex/./src/assets/js/file2.js?");

/***/ }),

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("\r\n/* navToggle */\r\nconst navToggle = document.getElementById('navToggle');\r\nconst nav = document.getElementById('nav');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\nnavToggle.addEventListener('click', event => {\r\n    if ( body.classList.contains('no-scroll') ) {\r\n        closeNav();\r\n    } else {\r\n        showNav();\r\n    }\r\n});\r\n\r\nfunction showNav() {\r\n  let mask = document.createElement('div');\r\n  mask.classList.add('page__mask');\r\n  mask.addEventListener('click', closeNav);\r\n  page.appendChild(mask);\r\n  body.classList.add('no-scroll');\r\n  nav.classList.add('show');\r\n}\r\n\r\nfunction closeNav() {\r\n    nav.classList.remove('show');\r\n    body.classList.remove('no-scroll');\r\n    document.querySelector('.page__mask').remove();\r\n}\r\n\r\n\r\n/* Mobile subnav */\r\nconst navItems = document.getElementsByClassName(\"nav__item_submenu\");\r\n\r\nfor (let i = 0; i < navItems.length; i++) {\r\n navItems[i].addEventListener(\"click\", function() {\r\n     if (navItems[i].classList.contains('active')) {\r\n         hideSubnav();\r\n     } else {\r\n         hideSubnav();\r\n         navItems[i].classList.add('active');\r\n     }\r\n     event.stopPropagation();\r\n });\r\n}\r\n\r\nnav.addEventListener(\"click\", function() {\r\n    hideSubnav();\r\n});\r\n\r\nfunction hideSubnav() {\r\n  for (let i = 0; i < navItems.length; i++) {\r\n      navItems[i].classList.remove('active');\r\n  }\r\n}\r\n\r\n\r\n/* Slick Slider */\r\n$(\"#introSlider\").slick({\r\n    infinite: true,\r\n    slidesToShow: 1,\r\n    slidesToScroll: 1,\r\n\r\n    arrows: true,\r\n    dots: true,\r\n    autoplay: true,\r\n    autoplaySpeed: 5000\r\n});\r\n\r\n\r\n/* Search Box */\r\n$(\".search__box button, input\")\r\n .focus(function () {\r\n  $(\".header\").addClass(\"wide\");\r\n })\r\n .blur(function () {\r\n  $(\".header\").removeClass(\"wide\");\r\n });\r\n\r\n\r\n/* AOS Animation */\r\nAOS.init({\r\n    // Global settings:\r\n    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function\r\n    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on\r\n    initClassName: 'aos-init', // class applied after initialization\r\n    animatedClassName: 'aos-animate', // class applied on animation\r\n    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll\r\n    disableMutationObserver: false, // disables automatic mutations' detections (advanced)\r\n    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)\r\n    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)\r\n\r\n\r\n    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:\r\n    offset: 120, // offset (in px) from the original trigger point\r\n    delay: 0, // values from 0 to 3000, with step 50ms\r\n    duration: 400, // values from 0 to 3000, with step 50ms\r\n    easing: 'ease', // default easing for AOS animations\r\n    once: false, // whether animation should happen only once - while scrolling down\r\n    mirror: false, // whether elements should animate out while scrolling past them\r\n    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation\r\n\r\n  });\n\n//# sourceURL=webpack://alex/./src/assets/js/mobileNav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/file2.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	
/******/ })()
;