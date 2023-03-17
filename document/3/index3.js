// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

// //  в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';

HTML
{
	/* <div class=div>
    <div>
      <div>1:1</div>
      <div>2:1</div>
      <div>3:1</div>
      <div>4:1</div>
      <div>5:1</div>
    </div>
    <div>
      <div>1:2</div>
      <div>2:2</div>
      <div>3:2</div>
      <div>4:2</div>
      <div>5:2</div>
    </div>
    <div>
      <div>1:3</div>
      <div>2:3</div>
      <div>3:3</div>
      <div>4:3</div>
      <div>5:3</div>
    </div>
    <div>
      <div>1:4</div>
      <div>2:4</div>
      <div>3:4</div>
      <div>4:4</div>
      <div>5:4</div>
    </div>
    <div>
      <div>1:5</div>
      <div>2:5</div>
      <div>3:5</div>
      <div>4:5</div>
      <div>5:5</div>
    </div>
  </div> */
}

// JS

let div = document.body.firstElementChild

for (let i = 0; i < table.rows.length; i++) {
	let row = div.rows[i]
	row.cells[i].style.backgroundColor = 'red'
}
