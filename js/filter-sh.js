const btns=[
	/* Smarthome */
{
	id: 1,
	name: 'Convertidores smart'
},
{
	id: 2,
	name: 'Parlantes inteligentes'
},
{
	id: 3,
	name: 'Camaras de seguridad'
},
{
	id: 4,
	name: 'Iluminacion smart'
},
{
	id: 5,
	name: 'Aspiradoras robot'
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
	/* Smarthome */
{
	id: 1,
	image: '../productos/s-cs-1.jpg',
	title: 'Convertidor XIAMOI PY',
	price: 120,
	category: 'Convertidor smart'
},
{
	id: 1,
	image: '../productos/s-cs-2.jpg',
	title: 'Convertidor ROKU PREMIERE',
	price: 300,
	category: 'Convertidor smart'
},
{
	id: 1,
	image: '../productos/s-cs-3.jpg',
	title: 'Convertidor ROKU STREAMING STICK 4K',
	price: 350,
	category: 'Convertidor smart'
},
{
	id: 2,
	image: '../productos/s-pi-1.jpg',
	title: 'Echo dot 3',
	price: 120,
	category: 'Parlantes inteligentes'
},
{
	id: 5,
	image: '../productos/s-ar-1.jpg',
	title: '67H',
	price: 6000,
	category: 'Aspiradoras robot'
},
{
	id: 2,
	image: '../productos/s-pi-2.jpg',
	title: 'Google nest mini',
	price: 200,
	category: 'Parlantes inteligentes'
},
{
	id: 2,
	image: '../productos/s-pi-3.jpg',
	title: 'Alexa',
	price: 300,
	category: 'Parlantes inteligentes'
},
{
	id: 3,
	image: '../productos/s-sc-1.jpg',
	title: 'Camara W2',
	price: 200,
	category: 'Camaras de seguridad'
},
{
	id: 3,
	image: '../productos/s-sc-2.jpg',
	title: 'Camara 279 JU',
	price: 300,
	category: 'Camaras de seguridad'
},
{
	id: 3,
	image: '../productos/s-sc-3.jpg',
	title: 'Camara seguridad ultra',
	price: 400,
	category: 'Camaras de seguridad'
},
{
	id: 5,
	image: '../productos/s-ar-2.jpg',
	title: 'Kuzler',
	price: 1000,
	category: 'Aspiradoras robot'
},
{
	id: 5,
	image: '../productos/s-ar-3.jpg',
	title: 'Atenas',
	price: 3000,
	category: 'Aspiradoras robot'
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