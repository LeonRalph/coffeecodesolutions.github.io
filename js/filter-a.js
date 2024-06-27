const btns=[
	/* Audio */
{
	id: 1,
	name: 'Audifonos'
},
{
	id: 2,
	name: 'Parlantes'
},
{
	id: 3,
	name: 'Microfonos'
},
{
	id: 4,
	name: 'Accesorios de audio'
},
{
	id: 5,
	name: 'Equipos de sonido'
},
{
	id: 6,
	name: 'Radios'
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
	/* Audio */
{
	id: 1,
	image: '../productos/aa-1.jpg',
	title: 'Audifono Slite 450',
	price: 120,
	category: 'Audifonos'
},
{
	id: 1,
	image: '../productos/aa-2.jpg',
	title: 'Audifono M43 UK',
	price: 300,
	category: 'Audifonos'
},
{
	id: 4,
	image: '../productos/aaa-1.jpg',
	title: 'Porta cable 2',
	price: 20,
	category: 'Accesorio de audio'
},
{
	id: 4,
	image: '../productos/aaa-2.jpg',
	title: 'Cable blanco y rojo',
	price: 10,
	category: 'Accesorio de audio'
},
{
	id: 2,
	image: '../productos/ap-1.jpg',
	title: 'Audifono Modelo 400',
	price: 100,
	category: 'Parlantes'
},
{
	id: 4,
	image: '../productos/aaa-3.png',
	title: 'Brazo porta microfono',
	price: 300,
	category: 'Accesorio de audio'
},
{
	id: 1,
	image: '../productos/aa-3.jpg',
	title: 'Audifono Doble Entrada',
	price: 350,
	category: 'Audifonos'
},
{
	id: 1,
	image: '../productos/aa-4.jpg',
	title: 'Audifono Modelo 400',
	price: 300,
	category: 'Audifonos'
},
{
	id: 2,
	image: '../productos/ap-2.jpg',
	title: 'Audifono Modelo 400',
	price: 120,
	category: 'Parlantes'
},
{
	id: 5,
	image: '../productos/aes-3.jpg',
	title: 'Parlantes / DJ 2024',
	price: 6000,
	category: 'Equipos de sonido'
},
{
	id: 2,
	image: '../productos/ap-3.jpg',
	title: 'Audifono Modelo 400',
	price: 200,
	category: 'Parlantes'
},
{
	id: 2,
	image: '../productos/ap-4.jpg',
	title: 'Audifono Modelo 400',
	price: 300,
	category: 'Parlantes'
},
{
	id: 3,
	image: '../productos/am-1.jpg',
	title: 'Microfono AD 200',
	price: 200,
	category: 'Microfonos'
},
{
	id: 3,
	image: '../productos/am-2.jpg',
	title: 'Microfono St Filtro',
	price: 300,
	category: 'Microfonos'
},
{
	id: 3,
	image: '../productos/am-3.jpg',
	title: 'Microfono YT',
	price: 400,
	category: 'Microfonos'
},
{
	id: 6,
	image: '../productos/ar-1.jpg',
	title: 'Radio portable',
	price: 100,
	category: 'Radios'
},
{
	id: 5,
	image: '../productos/aes-1.jpg',
	title: 'Parlantes Party 2000',
	price: 1000,
	category: 'Equipos de sonido'
},
{
	id: 5,
	image: '../productos/aes-2.jpg',
	title: 'Parlantes PartyK1 4000',
	price: 3000,
	category: 'Equipos de sonido'
},
{
	id: 6,
	image: '../productos/ar-2.jpg',
	title: 'Radio valkie talkie',
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