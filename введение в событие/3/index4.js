// // Напишите JS-код, реализующий поведение «подсказка».

// // При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.

// // Пример HTML с подсказками:

// // <button data-tooltip="эта подсказка длиннее, чем элемент">Короткая кнопка</button>
// // <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>
// // Результат в ифрейме с документом:

// // В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).

// // Детали оформления:

// // Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
// // Подсказка должна быть, по возможности, посередине элемента.
// // Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
// // Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
// // Для решения вам понадобятся два события:

// // mouseover срабатывает, когда указатель мыши заходит на элемент.
// // mouseout срабатывает, когда указатель мыши уходит с элемента.
// // Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.

// // После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

// // P.S. В один момент может быть показана только одна подсказка.

//   <style>
//     body {
//       height: 2000px;
//       /* добавим body прокрутку, подсказка должна работать и с прокруткой */
//     }

//     .tooltip {
//       position: fixed;
//       padding: 10px 20px;
//       border: 1px solid #b3c9ce;
//       border-radius: 4px;
//       text-align: center;
//       font: italic 14px/1.3 sans-serif;
//       color: #333;
//       background: #fff;
//       box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
//     }
//   </style>
// </head>

// <body>

//   <p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>
//   <p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>

//   <button data-tooltip="эта подсказка должна быть длиннее, чем элемент">Короткая кнопка</button>
//   <button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>

//   <p>Прокрутите страницу, чтобы кнопки оказались у верхнего края, а затем проверьте, правильно ли выводятся подсказки.</p>

//   <script>
//     let tooltipElem;

//     document.onmouseover = function(event) {
//       let target = event.target;

//       // если у нас есть подсказка...
//       let tooltipHtml = target.dataset.tooltip;
//       if (!tooltipHtml) return;

//       // ...создадим элемент для подсказки

//       tooltipElem = document.createElement('div');
//       tooltipElem.className = 'tooltip';
//       tooltipElem.innerHTML = tooltipHtml;
//       document.body.append(tooltipElem);

//       // спозиционируем его сверху от аннотируемого элемента (top-center)
//       let coords = target.getBoundingClientRect();

//       let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
//       if (left < 0) left = 0; // не заезжать за левый край окна

//       let top = coords.top - tooltipElem.offsetHeight - 5;
//       if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
//         top = coords.top + target.offsetHeight + 5;
//       }

//       tooltipElem.style.left = left + 'px';
//       tooltipElem.style.top = top + 'px';
//     };

//     document.onmouseout = function(e) {

//       if (tooltipElem) {
//         tooltipElem.remove();
//         tooltipElem = null;
//       }

//     };
//   </script>

// </body>
