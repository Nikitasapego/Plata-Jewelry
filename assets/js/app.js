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

/***/ "./src/assets/js/accordion.js":
/*!************************************!*\
  !*** ./src/assets/js/accordion.js ***!
  \************************************/
/***/ (function() {

eval("// Аккордеон\r\n//function accordion() {\r\n//    const items = document.querySelectorAll('.accordion__item-trigger');\r\n//    items.forEach(item => {\r\n//        item.addEventListener('click', () => {\r\n//            const parent = item.parentNode\r\n//            if (parent.classList.contains('accordion__item-active')) {\r\n//                parent.classList.remove('accordion__item-active');\r\n//            } else {\r\n//                document\r\n//                    .querySelectorAll('.accordion__item')\r\n//                    .forEach(child => child.classList.remove('accordion__item-active'))   \r\n//                parent.classList.add('accordion__item-active');\r\n//            }\r\n//        });\r\n//    });\r\n//}\r\n//accordion(); \r\n\r\n//console.log('accordion');\r\n\r\nconst accordionItemHeaders = document.querySelectorAll(\".accordion-item-header\");\r\n\r\naccordionItemHeaders.forEach(accordionItemHeader => {\r\n    accordionItemHeader.addEventListener(\"click\", event => {\r\n\r\n        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!\r\n\r\n//         const currentlyActiveAccordionItemHeader = document.querySelector(\".accordion-item-header.active\");\r\n//         if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {\r\n//           currentlyActiveAccordionItemHeader.classList.toggle(\"active\");\r\n//           currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;\r\n//         }\r\n\r\n        accordionItemHeader.classList.toggle(\"active\");\r\n        const accordionItemBody = accordionItemHeader.nextElementSibling;\r\n        if (accordionItemHeader.classList.contains(\"active\")) {\r\n            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + \"px\";\r\n        } else {\r\n            accordionItemBody.style.maxHeight = 0;\r\n        }\r\n\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/accordion.js?");

/***/ }),

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("//console.log('file 1');\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/counter.js":
/*!**********************************!*\
  !*** ./src/assets/js/counter.js ***!
  \**********************************/
/***/ (function() {

eval("const counter = function () {\r\n    const btns = document.querySelectorAll('.counter__btn');\r\n\r\n    btns.forEach(btn => {\r\n        btn.addEventListener('click', function () {\r\n            const direction = this.dataset.direction;\r\n            const inp = this.parentElement.querySelector('.counter__value');\r\n            const currentValue = +inp.value;\r\n            let newValue;\r\n\r\n            if (direction === 'plus') {\r\n                newValue = currentValue + 1;\r\n            } else {\r\n                newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;\r\n            }\r\n            inp.value = newValue;\r\n        });\r\n    });\r\n}\r\n\r\ncounter();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/counter.js?");

/***/ }),

/***/ "./src/assets/js/dynamicAdapt.js":
/*!***************************************!*\
  !*** ./src/assets/js/dynamicAdapt.js ***!
  \***************************************/
/***/ (function() {

"use strict";
eval("// Dynamic Adapt v.1\n// HTML data-da=\"where(uniq class name),when(breakpoint),position(digi)\"\n// e.x. data-da=\".item,992,2\"\n// Andrikanych Yevhen 2020\n// https://www.youtube.com/c/freelancerlifestyle\n\n\n\nfunction DynamicAdapt(type) {\n\tthis.type = type;\n}\n\nDynamicAdapt.prototype.init = function () {\n\tconst _this = this;\n\t// массив объектов\n\tthis.оbjects = [];\n\tthis.daClassname = \"_dynamic_adapt_\";\n\t// массив DOM-элементов\n\tthis.nodes = document.querySelectorAll(\"[data-da]\");\n\n\t// наполнение оbjects объктами\n\tfor (let i = 0; i < this.nodes.length; i++) {\n\t\tconst node = this.nodes[i];\n\t\tconst data = node.dataset.da.trim();\n\t\tconst dataArray = data.split(\",\");\n\t\tconst оbject = {};\n\t\tоbject.element = node;\n\t\tоbject.parent = node.parentNode;\n\t\tоbject.destination = document.querySelector(dataArray[0].trim());\n\t\tоbject.breakpoint = dataArray[1] ? dataArray[1].trim() : \"767\";\n\t\tоbject.place = dataArray[2] ? dataArray[2].trim() : \"last\";\n\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\n\t\tthis.оbjects.push(оbject);\n\t}\n\n\tthis.arraySort(this.оbjects);\n\n\t// массив уникальных медиа-запросов\n\tthis.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {\n\t\treturn '(' + this.type + \"-width: \" + item.breakpoint + \"px),\" + item.breakpoint;\n\t}, this);\n\tthis.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {\n\t\treturn Array.prototype.indexOf.call(self, item) === index;\n\t});\n\n\t// навешивание слушателя на медиа-запрос\n\t// и вызов обработчика при первом запуске\n\tfor (let i = 0; i < this.mediaQueries.length; i++) {\n\t\tconst media = this.mediaQueries[i];\n\t\tconst mediaSplit = String.prototype.split.call(media, ',');\n\t\tconst matchMedia = window.matchMedia(mediaSplit[0]);\n\t\tconst mediaBreakpoint = mediaSplit[1];\n\n\t\t// массив объектов с подходящим брейкпоинтом\n\t\tconst оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {\n\t\t\treturn item.breakpoint === mediaBreakpoint;\n\t\t});\n\t\tmatchMedia.addListener(function () {\n\t\t\t_this.mediaHandler(matchMedia, оbjectsFilter);\n\t\t});\n\t\tthis.mediaHandler(matchMedia, оbjectsFilter);\n\t}\n};\n\nDynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {\n\tif (matchMedia.matches) {\n\t\tfor (let i = 0; i < оbjects.length; i++) {\n\t\t\tconst оbject = оbjects[i];\n\t\t\tоbject.index = this.indexInParent(оbject.parent, оbject.element);\n\t\t\tthis.moveTo(оbject.place, оbject.element, оbject.destination);\n\t\t}\n\t} else {\n\t\tfor (let i = 0; i < оbjects.length; i++) {\n\t\t\tconst оbject = оbjects[i];\n\t\t\tif (оbject.element.classList.contains(this.daClassname)) {\n\t\t\t\tthis.moveBack(оbject.parent, оbject.element, оbject.index);\n\t\t\t}\n\t\t}\n\t}\n};\n\n// Функция перемещения\nDynamicAdapt.prototype.moveTo = function (place, element, destination) {\n\telement.classList.add(this.daClassname);\n\tif (place === 'last' || place >= destination.children.length) {\n\t\tdestination.insertAdjacentElement('beforeend', element);\n\t\treturn;\n\t}\n\tif (place === 'first') {\n\t\tdestination.insertAdjacentElement('afterbegin', element);\n\t\treturn;\n\t}\n\tdestination.children[place].insertAdjacentElement('beforebegin', element);\n}\n\n// Функция возврата\nDynamicAdapt.prototype.moveBack = function (parent, element, index) {\n\telement.classList.remove(this.daClassname);\n\tif (parent.children[index] !== undefined) {\n\t\tparent.children[index].insertAdjacentElement('beforebegin', element);\n\t} else {\n\t\tparent.insertAdjacentElement('beforeend', element);\n\t}\n}\n\n// Функция получения индекса внутри родителя\nDynamicAdapt.prototype.indexInParent = function (parent, element) {\n\tconst array = Array.prototype.slice.call(parent.children);\n\treturn Array.prototype.indexOf.call(array, element);\n};\n\n// Функция сортировки массива по breakpoint и place \n// по возрастанию для this.type = min\n// по убыванию для this.type = max\nDynamicAdapt.prototype.arraySort = function (arr) {\n\tif (this.type === \"min\") {\n\t\tArray.prototype.sort.call(arr, function (a, b) {\n\t\t\tif (a.breakpoint === b.breakpoint) {\n\t\t\t\tif (a.place === b.place) {\n\t\t\t\t\treturn 0;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\n\t\t\t\t\treturn -1;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\n\t\t\t\t\treturn 1;\n\t\t\t\t}\n\n\t\t\t\treturn a.place - b.place;\n\t\t\t}\n\n\t\t\treturn a.breakpoint - b.breakpoint;\n\t\t});\n\t} else {\n\t\tArray.prototype.sort.call(arr, function (a, b) {\n\t\t\tif (a.breakpoint === b.breakpoint) {\n\t\t\t\tif (a.place === b.place) {\n\t\t\t\t\treturn 0;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"first\" || b.place === \"last\") {\n\t\t\t\t\treturn 1;\n\t\t\t\t}\n\n\t\t\t\tif (a.place === \"last\" || b.place === \"first\") {\n\t\t\t\t\treturn -1;\n\t\t\t\t}\n\n\t\t\t\treturn b.place - a.place;\n\t\t\t}\n\n\t\t\treturn b.breakpoint - a.breakpoint;\n\t\t});\n\t\treturn;\n\t}\n};\n\nconst da = new DynamicAdapt(\"max\");\nda.init();\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/dynamicAdapt.js?");

/***/ }),

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/***/ (function() {

"use strict";
eval("\r\n\r\n// Меню бургер\r\n\r\nconst iconMenu = document.querySelector('.menu__icon');\r\nconst menuBody = document.querySelector('.menu__body');\r\nif (iconMenu) {\r\n    iconMenu.addEventListener('click', function (e) {\r\n        if (iconMenu.classList.contains('active')) {\r\n            closeMenu();\r\n        } else {\r\n            showMenu();\r\n        }\r\n    });\r\n}\r\n\r\nfunction showMenu() {\r\n    document.body.classList.add('lock');\r\n    iconMenu.classList.add('active');\r\n    menuBody.classList.add('active');\r\n\r\n    let mask = document.createElement('div');\r\n    mask.classList.add('page__mask');\r\n    mask.addEventListener('click', closeMenu);\r\n    page.appendChild(mask);\r\n}\r\n\r\nfunction closeMenu() {\r\n    document.body.classList.remove('lock');\r\n    iconMenu.classList.remove('active');\r\n    menuBody.classList.remove('active');\r\n    document.querySelector('.page__mask').remove();\r\n}\r\n\r\n\r\n// Прокрутка при клике\r\n\r\nconst menuLinks = document.querySelectorAll('.menu__link[data-scroll]');\r\nif (menuLinks.length > 0) {\r\n    menuLinks.forEach(menuLink => {\r\n        menuLink.addEventListener('click', onMenuLinkClick);\r\n    });\r\n\r\n    function onMenuLinkClick(e) {\r\n        const menuLink = e.target;\r\n        if (menuLink.dataset.scroll && document.querySelector(menuLink.dataset.scroll)) {\r\n            const scrollBlock = document.querySelector(menuLink.dataset.scroll);\r\n            const scrollBlockValue = scrollBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;\r\n\r\n            if (iconMenu.classList.contains('active')) {\r\n                document.body.classList.remove('lock');\r\n                iconMenu.classList.remove('active');\r\n                menuBody.classList.remove('active');\r\n                document.querySelector('.page__mask').remove();\r\n            }\r\n\r\n            window.scrollTo({\r\n                top: scrollBlockValue,\r\n                behavior: \"smooth\"\r\n            });\r\n            e.preventDefault();\r\n        }\r\n    }\r\n}\r\n\r\n// Шапка (сайдбар)\r\n\r\nconst page = document.getElementById(\"page\");\r\nconst addcart = document.getElementById(\"addcart\");\r\nconst closeAddcart = document.getElementById(\"closeAddcart\");\r\nconst searchBtn = document.getElementById(\"searchBtn\");\r\nconst searchForm = document.getElementById(\"searchForm\");\r\nconst searchFormClose = document.getElementById(\"searchFormClose\");\r\nconst body = document.body;\r\n\r\n\r\nsearchBtn.addEventListener('click', event => {\r\n    searchForm.classList.add('block');\r\n});\r\n\r\nsearchFormClose.addEventListener('click', event => {\r\n    searchForm.classList.remove('block');\r\n});\r\n\r\ndocument.addEventListener('keydown', function (e) {\r\n    if (e.which === 27) {\r\n        searchForm.classList.remove('block');\r\n        closeSidebarCart();\r\n        closeMenu();\r\n    }\r\n});\r\n\r\naddcart.addEventListener('click', event => {\r\n    event.preventDefault();\r\n    if (body.classList.contains('show-sidebar-cart')) {\r\n        closeSidebarCart();\r\n    } else {\r\n        showSidebarCart();\r\n    }\r\n});\r\n\r\ncloseAddcart.addEventListener('click', event => {\r\n    event.preventDefault();\r\n    if (body.classList.contains('show-sidebar-cart')) {\r\n        closeSidebarCart();\r\n    } else {\r\n        showSidebarCart();\r\n    }\r\n});\r\n\r\nfunction showSidebarCart() {\r\n    let mask = document.createElement('div');\r\n    body.classList.add('show-sidebar-cart');\r\n    mask.classList.add('page__mask');\r\n    mask.addEventListener('click', closeSidebarCart);\r\n    page.appendChild(mask);\r\n}\r\n\r\nfunction closeSidebarCart() {\r\n    body.classList.remove('show-sidebar-cart');\r\n    document.querySelector('.page__mask').remove();\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/nav.js?");

/***/ }),

/***/ "./src/assets/js/range-slider.js":
/*!***************************************!*\
  !*** ./src/assets/js/range-slider.js ***!
  \***************************************/
/***/ (function() {

eval("const rangeSlider = document.getElementById('range-slider');\r\n\r\nif (rangeSlider) {\r\n    noUiSlider.create(rangeSlider, {\r\n        start: [500, 50000],\r\n        connect: true,\r\n        step: 1,\r\n        range: {\r\n            'min': [500],\r\n            'max': [50000]\r\n        }\r\n    });\r\n    const input0 = document.getElementById('input-0');\r\n    const input1 = document.getElementById('input-1');\r\n    const inputs = [input0, input1];\r\n\r\n    rangeSlider.noUiSlider.on('update', function (values, handle) {\r\n        inputs[handle].value = Math.round(values[handle]);\r\n    });\r\n\r\n    const setRangeSlider = (i, value) => {\r\n        let arr = [null, null];\r\n        arr[i] = value;\r\n\r\n        console.log(arr);\r\n\r\n        rangeSlider.noUiSlider.set(arr);\r\n    };\r\n\r\n    inputs.forEach((el, index) => {\r\n        el.addEventListener('change', (e) => {\r\n            console.log(index);\r\n            setRangeSlider(index, e.currentTarget.value);\r\n        });\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/range-slider.js?");

/***/ }),

/***/ "./src/assets/js/swiper.js":
/*!*********************************!*\
  !*** ./src/assets/js/swiper.js ***!
  \*********************************/
/***/ (function() {

eval("new Swiper(\".intro-slider\", {\r\n    freeMode: true,\r\n    autoplay: {\r\n        delay: 6000\r\n    },\r\n    effect: 'fade',\r\n    fadeEffect: {\r\n        crossFade: true\r\n    },\r\n    speed: 800,\r\n    slidesPerView: 1,\r\n    loop: true,\r\n});\r\n\r\n\r\n\r\nnew Swiper('.catalog-slider', {\r\n\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev'\r\n    },\r\n\r\n    slidesPerView: 3,\r\n    loop: true,\r\n\r\n    breakpoints: {\r\n        320: {\r\n            slidesPerView: 1,\r\n        },\r\n        500: {\r\n            slidesPerView: 2,\r\n        },\r\n        800: {\r\n            slidesPerView: 3,\r\n        }\r\n    },\r\n\r\n    preloadImages: false,\r\n\r\n    lazy: {\r\n        loadOnTransitionStart: false,\r\n        loadPrevNext: false,\r\n    },\r\n\r\n    watchSlidesProgress: true,\r\n    watchSlidesVisibility: true,\r\n});\r\n\r\nnew Swiper('.collection-slider', {\r\n\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev'\r\n    },\r\n\r\n    slidesPerView: 4,\r\n    loop: true,\r\n    observer: true,\r\n    observeParents: true,\r\n    observeSlideChildren: true,\r\n\r\n    breakpoints: {\r\n        320: {\r\n            slidesPerView: 1,\r\n        },\r\n        550: {\r\n            slidesPerView: 2,\r\n        },\r\n        800: {\r\n            slidesPerView: 3,\r\n        },\r\n        1000: {\r\n            slidesPerView: 4,\r\n        }\r\n    },\r\n});\r\n\r\nnew Swiper('.reviews-slider', {\r\n    freeMode: true,\r\n    autoplay: {\r\n        delay: 6000\r\n    },\r\n\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev'\r\n    },\r\n\r\n    pagination: {\r\n        el: '.swiper-pagination',\r\n        clickable: true,\r\n    },\r\n\r\n    slidesPerView: 1,\r\n    loop: true,\r\n\r\n});\r\n\r\nnew Swiper('.similar-products-slider', {\r\n\r\n    navigation: {\r\n        nextEl: '.swiper-button-next',\r\n        prevEl: '.swiper-button-prev'\r\n    },\r\n\r\n    slidesPerView: 5,\r\n    loop: true,\r\n    observer: true,\r\n    observeParents: true,\r\n    observeSlideChildren: true,\r\n\r\n    pagination: {\r\n        el: '.swiper-pagination',\r\n        clickable: true,\r\n        dynamicBullets: true,\r\n    },\r\n\r\n    breakpoints: {\r\n        320: {\r\n            slidesPerView: 1,\r\n        },\r\n        390: {\r\n            slidesPerView: 2,\r\n        },\r\n        680: {\r\n            slidesPerView: 3,\r\n        },\r\n        1000: {\r\n            slidesPerView: 4,\r\n        },\r\n        1170: {\r\n            slidesPerView: 5,\r\n        }\r\n    },\r\n    preloadImages: false,\r\n\r\n    lazy: {\r\n        loadOnTransitionStart: false,\r\n        loadPrevNext: false,\r\n    },\r\n\r\n    watchSlidesProgress: true,\r\n    watchSlidesVisibility: true,\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/swiper.js?");

/***/ }),

/***/ "./src/assets/js/tabs.js":
/*!*******************************!*\
  !*** ./src/assets/js/tabs.js ***!
  \*******************************/
/***/ (function() {

eval("function tabs(headerSelector, tabSelector, contentSelector, activeClass, display='flex') {\r\n    const header = document.querySelector(headerSelector),\r\n          tab = document.querySelectorAll(tabSelector),\r\n          content = document.querySelectorAll(contentSelector);\r\n    function hideTabContent() {\r\n        content.forEach(item => {\r\n            item.style.display = 'none';\r\n        });\r\n        tab.forEach(item => {\r\n            item.classList.remove(activeClass);\r\n        });\r\n    }\r\n    function showTabContent(i = 0) {\r\n       content[i].style.display = display;\r\n       tab[i].classList.add(activeClass);\r\n    }\r\n    hideTabContent();\r\n    showTabContent();\r\n    header.addEventListener('click', e => {\r\n        const target = e.target;\r\n        if (target.classList.contains(tabSelector.replace(/\\./, '')) || \r\n        target.parentNode.classList.contains(tabSelector.replace(/\\./, ''))) {\r\n            tab.forEach((item, i) => {\r\n                if ( target == item || target.parentNode == item ) {\r\n                    hideTabContent();\r\n                    showTabContent(i);\r\n                }\r\n            });\r\n        }\r\n    });\r\n};\r\n\r\n// ПЕРВЫЙ аргумент - класс всего нашего хедера табов.\r\n// ВТОРОЙ аргумент - класс конкретного элемента, при клике на который будет переключатся таб.\r\n// ТРЕТИЙ аргумент - класс того блока, который будет переключаться.\r\n// ЧЕТВЕРТЫЙ аргумент - класс активности, который будет добавлятся для таба, который сейчас активен.\r\ntabs( '.tabs__header' ,'.tabs__header-item', '.tabs__content-item', 'active');\r\n\r\n//console.log('tabs');\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/tabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/accordion.js"]();
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/counter.js"]();
/******/ 	__webpack_modules__["./src/assets/js/dynamicAdapt.js"]();
/******/ 	__webpack_modules__["./src/assets/js/nav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/range-slider.js"]();
/******/ 	__webpack_modules__["./src/assets/js/swiper.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/tabs.js"]();
/******/ 	
/******/ })()
;