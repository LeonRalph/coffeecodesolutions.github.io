const btns=[
	/* Computo */
{
	id: 1,
	name: 'Pc de escritorio'
},
{
	id: 2,
	name: 'Almacenamiento'
},
{
	id: 3,
	name: 'Perifericos de computo'
},
{
	id: 4,
	name: 'Componentes para pc'
},
{
	id: 5,
	name: 'Impresora'
},
{
	id: 6,
	name: 'Software y licencias'
},
]

const filters = [...new Set(btns.map((btn)=>
	{return btn}))]

document.getElementById('btns').innerHTML=filters.map((btn)=>{
	var {name, id} = btn;
	return(
		"<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
		)
}).join('');

const product = [
	/* Computo */
{
	id: 1,
	image: '../productos/g-cg-1.jpg',
	title: 'Computadora gamer 1',
	price: 12000,
	category: 'Computadora'
},
{
	id: 1,
	image: '../productos/g-cg-2.jpg',
	title: 'Computadora gamer 2',
	price: 6300,
	category: 'Computadora'
},
{
	id: 2,
	image: '../productos/c-d-1.png',
	title: 'Disco duro black 1tb',
	price: 100,
	category: 'Almacenamiento'
},
{
	id: 1,
	image: '../productos/g-cg-3.jpg',
	title: 'Computadora gamer 322',
	price: 8350,
	category: 'Computadora'
},
{
	id: 2,
	image: '../productos/c-d-2.jpg',
	title: 'Disco duro green 2tb',
	price: 120,
	category: 'Almacenamiento'
},
{
	id: 5,
	image: '../productos/c-im-3.jpg',
	title: 'Impresora 234D',
	price: 6000,
	category: 'Impresoras'
},
{
	id: 2,
	image: '../productos/c-d-3.jpg',
	title: 'Almacenamiento solido green 1tb',
	price: 200,
	category: 'Almacenamiento'
},
{
	id: 6,
	image: '../productos/c-sl-1.jpg',
	title: 'Antivirus',
	price: 100,
	category: 'Radios'
},
{
	id: 5,
	image: '../productos/c-im-1.jpg',
	title: 'Impresora G2',
	price: 1000,
	category: 'Impresoras'
},
{
	id: 5,
	image: '../productos/c-im-2.jpg',
	title: 'Impresora 6Y',
	price: 3000,
	category: 'Impresoras'
},
{
	id: 6,
	image: '../productos/c-sl-2.jpg',
	title: 'Office 365',
	price: 200,
	category: 'Radios'
},

];

const categorias = [...new Set(product.map((item)=>
	{return item}))]

const filterItems = (a)=>{
	const filterCategorias = categorias.filter(item);
	function item(value){
		if(value.id==a){
			return(
				value.id
				)
		}
	}
	displayItem(filterCategorias)
}


const displayItem = (items) => {
	document.getElementById('root').innerHTML = items.map((item)=>
	{
		var {image, title, price} = item;
		return(
			`<div class='box'>
			<h3>${title}</h3>
			<div class='img-box'>
			<img class='images' src=${image}></img>
			</div>
			<div class='bottom'>
			<h2>$ ${price}.00</h2>
			<button>Añadir al carrito</button>
			</div>
			</div>`)
	}).join('');
}
displayItem(categorias);