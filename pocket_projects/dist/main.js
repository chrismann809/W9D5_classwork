/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        // 1. Create a Date object.\n        const currentTime = new Date();\n    \n        // 2. Store the hour, minute, and second.\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n    \n        // 3. Call printTime.\n        this.printTime();\n    \n        // 4. Schedule the tick at 1 second intervals.\n        const clock = document.getElementById('clock');\n        \n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n    // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n        const clock = document.getElementById('clock');\n        // clock.remove(timeString);\n        (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(timeString, clock);\n    }\n\n    _tick() {\n    // 1. Increment the time by one second.\n    this._incrementSeconds();\n\n    // 2. Call printTime.\n    this.printTime();\n    }\n\n    _incrementSeconds() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n        this.seconds = 0;\n        this._incrementMinutes();\n    }\n    }\n\n    _incrementMinutes() {\n    this.minutes += 1;\n    if (this.minutes === 60) {\n        this.minutes = 0;\n        this._incrementHours();\n    }\n    }\n\n    _incrementHours() {\n    this.hours = (this.hours + 1) % 24;\n    }\n}\n\nconst theBigClock = new Clock();\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nconst dogLinkCreate = (dogs) => {\n  let links = Object.values(dogs);\n  let names = Object.keys(dogs);\n  const doggies = [];\n  names.forEach( (dog, i) => {\n    const li = document.createElement('li');\n    const a = document.createElement('a');\n    a.innerHTML = dog;\n    a.href = links[i];\n    li.className = 'dog-link';\n    li.appendChild(a);\n    doggies.push(li);\n  });\n\n  return doggies;\n} \n\nconst attachDogLinks = () => {\n  const dropDown = document.querySelector(\".drop-down-dog-list\");\n  const links = dogLinkCreate(dogs);\n\n  links.forEach(link => dropDown.appendChild(link));\n}\nattachDogLinks();\n\nconst handleEnter = () => {\n  const links = document.querySelectorAll('.dog-link');\n\n  links.forEach(link => {\n    link.classList.add('show-link');\n  });\n}\n\nconst handleLeave = () => {\n  const links = document.querySelectorAll('.dog-link');\n\n  links.forEach(link => {\n    link.classList.remove('show-link');\n  });\n}\n\nconst dropDownNav = document.querySelector('.drop-down-dog-nav');\n\ndropDownNav.addEventListener('mouseenter', handleEnter);\ndropDownNav.addEventListener('mouseleave', handleLeave);\n\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/***/ (() => {

eval("const todos = [];\nconst ul = document.querySelector('.todos');\nconst form = document.querySelector('.add-todo-form');\n\nconst addTodo = (event) => {\n    event.preventDefault();\n    const input = document.querySelector('input[name=\"add-todo\"]');\n    const inputValue = input.value;\n    const todoObj = {value: inputValue, done: false};\n    todos.push(todoObj);\n    input.value = \"\";\n    populateList();\n};\n\nconst populateList = () => {\n    \n    todos.forEach((todo, i) => {\n        let li = document.createElement('li')\n        let label = document.createElement('label');\n        let checkbox = document.createElement('input');\n        let text = document.createTextNode(todo.value)\n        let ul = document.querySelector('.todos')\n\n        checkbox.setAttribute('type', 'checkbox');\n        checkbox.setAttribute('data-index', `${i}`);\n        checkbox.checked = todo.done;\n\n        label.setAttribute('for', `item${i}`);\n        label.appendChild(text);\n        \n        li.appendChild(label);\n        li.appendChild(checkbox);\n\n        ul.appendChild(li);\n        console.log(li);\n        console.log(ul);\n    });\n};\n\n\nform.addEventListener('submit', addTodo);\n\npopulateList(todos);\nwindow.todos = todos;\nwindow.ul = ul;\nwindow.form = form;\nwindow.addTodo = addTodo;\nwindow.populateList = populateList;\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => (/* binding */ htmlGenerator)\n/* harmony export */ });\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    let pTag = document.createElement(\"p\")\n    pTag.innerHTML = string;\n    const clock = document.getElementById('clock');\n    if (clock.hasChildNodes()) {\n        clock.removeChild(clock.childNodes[0]);\n    };\n    htmlElement.appendChild(pTag);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n// htmlGenerator('Hammad <3 Flatiron and Hackreactor', partyHeader);\n\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;