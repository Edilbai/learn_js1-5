// Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

// Демо в новом окне

// P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

// P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом

// <body>

//   <p>Кликните по "изображению" мыши и перемещайте её с помощью клавиш со стрелками.</p>

//   <pre id="mouse">
//  _   _
// (q\_/p)
//  /. .\
// =\_t_/=   __
//  /   \   (
// ((   ))   )
// /\) (/\  /
// \  Y  /-'
//  nn^nn
// </pre>

//   <script>
//     mouse.tabIndex = 0;

//     mouse.onclick = function() {
//       this.style.left = this.getBoundingClientRect().left + 'px';
//       this.style.top = this.getBoundingClientRect().top + 'px';

//       this.style.position = 'fixed';
//     };

//     mouse.onkeydown = function(e) {
//       switch (e.key) {
//         case 'ArrowLeft':
//           this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
//           return false;
//         case 'ArrowUp':
//           this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
//           return false;
//         case 'ArrowRight':
//           this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
//           return false;
//         case 'ArrowDown':
//           this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
//           return false;
//       }
//     };
//   </script>

// </body>
