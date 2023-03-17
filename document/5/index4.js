// Объектом какого класса является document?

// Какое место он занимает в DOM-иерархии?

// Наследует ли он от Node или от Element, или может от HTMLElement?

alert(document.constructor.name)
lert(HTMLDocument.prototype.constructor.name) // HTMLDocument
alert(HTMLDocument.prototype.__proto__.constructor.name) // Document
alert(HTMLDocument.prototype.__proto__.__proto__.constructor.name) // Node
