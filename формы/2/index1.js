// // Создайте <div>, который превращается в <textarea>, если на него кликнуть.

// // <textarea> позволяет редактировать HTML в элементе <div>.

// // Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.

// <body>

//   <ul>
//     <li>Кликните на div ниже, чтобы отредактировать текст.</li>
//     <li>Нажатие на Enter или потеря фокуса с ввода сохранят содержимое.</li>
//   </ul>

//   HTML-код разрешён.

//   <div id="view" class="view">Текст</div>

//   <script>
//     let area = null;
//     let view = document.getElementById('view');

//     view.onclick = function() {
//       editStart();
//     };

//     function editStart() {
//       area = document.createElement('textarea');
//       area.className = 'edit';
//       area.value = view.innerHTML;

//       area.onkeydown = function(event) {
//         if (event.key == 'Enter') {
//           this.blur();
//         }
//       };

//       area.onblur = function() {
//         editEnd();
//       };

//       view.replaceWith(area);
//       area.focus();
//     }

//     function editEnd() {
//       view.innerHTML = area.value;
//       area.replaceWith(view);
//     }
//   </script>

// </body>
