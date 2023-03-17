// // Есть дерево, организованное в виде вложенных списков ul/li.

// // Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

// <body>

//   <ul>
//     <li>Животные
//       <ul>
//         <li>Млекопитающие
//           <ul>
//             <li>Коровы</li>
//             <li>Ослы</li>
//             <li>Собаки</li>
//             <li>Тигры</li>
//           </ul>
//         </li>
//         <li>Другие
//           <ul>
//             <li>Змеи</li>
//             <li>Птицы</li>
//             <li>Ящерицы</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//     <li>Рыбы
//       <ul>
//         <li>Аквариумные
//           <ul>
//             <li>Гуппи</li>
//             <li>Скалярии</li>
//           </ul>
//         </li>
//         <li>Морские
//           <ul>
//             <li>Морская форель</li>
//           </ul>
//         </li>
//       </ul>
//     </li>
//   </ul>

//   <script>
//     let lis = document.getElementsByTagName('li');

//     for (let li of lis) {
//
//       let descendantsCount = li.getElementsByTagName('li').length;
//       if (!descendantsCount) continue;W
// li.firstChild.data += ' [' + descendantsCount + ']';
//     }
//   </script>

// </body>
