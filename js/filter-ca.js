const btns=[
	/* Celulares y accesorios */
{
	id: 1,
	name: 'Celulares'
},
{
	id: 2,
	name: 'Smart watchs'
},
{
	id: 3,
	name: 'Cargadores'
},
{
	id: 4,
	name: 'Case y micas'
},
{
	id: 5,
	name: 'Soportes'
},
{
	id: 6,
	name: 'Cables usb'
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
	/* Celulares y accesorios */
{
	id: 1,
	image: '../productos/ca-c-1.jpg',
	title: 'Samsung Galaxy A15',
	price: 300,
	category: 'Celulares'
},
{
	id: 4,
	image: '../productos/ca-cm-1.jpg',
	title: 'Case duro',
	price: 20,
	category: 'Case y micas'
},
{
	id: 4,
	image: '../productos/ca-cm-2.jpg',
	title: 'Anti scrath',
	price: 10,
	category: 'Case y micas'
},
{
	id: 2,
	image: '../productos/ca-sw-1.jpg',
	title: 'Smart watch rose',
	price: 100,
	category: 'Smart watchs'
},
{
	id: 4,
	image: '../productos/ca-cm-3.jpg',
	title: 'Protector 9D',
	price: 30,
	category: 'Case y micas'
},
{
	id: 1,
	image: '../productos/ca-c-2.jpg',
	title: 'Celular vivo Y16',
	price: 350,
	category: 'Celulares'
},
{
	id: 1,
	image: '../productos/ca-c-3.jpg',
	title: 'Samsung Galaxy A05 s',
	price: 300,
	category: 'Celulares'
},
{
	id: 2,
	image: '../productos/ca-sw-2.jpg',
	title: 'Smart watch econ',
	price: 120,
	category: 'Smart watchs'
},
{
	id: 2,
	image: '../productos/ca-sw-3.jpg',
	title: 'Smart watch UX',
	price: 200,
	category: 'Smart watchs'
},
{
	id: 3,
	image: '../productos/ca-ca-1.jpg',
	title: 'Cargador Simple',
	price: 10,
	category: 'Cargadores'
},
{
	id: 3,
	image: '../productos/ca-ca-2.jpg',
	title: 'Cargador rapido',
	price: 40,
	category: 'Cargadores'
},
{
	id: 3,
	image: '../productos/ca-ca-3.jpg',
	title: 'Cargador Samsung',
	price: 30,
	category: 'Cargadores'
},
{
	id: 6,
	image: '../productos/ca-cu-1.jpg',
	title: 'Cable usb impresora',
	price: 10,
	category: 'Cable usb'
},
{
	id: 5,
	image: '../productos/ca-s-1.jpg',
	title: 'Soporte para tv',
	price: 1000,
	category: 'Soportes'
},
{
	id: 5,
	image: '../productos/ca-s-2.jpg',
	title: 'Soporte para monitor',
	price: 3000,
	category: 'Soportes'
},
{
	id: 6,
	image: '../productos/ca-cu-2.jpg',
	title: 'Cable usb',
	price: 6,
	category: 'Cable usb'
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