const btns=[
	/* Movilidad */
{
	id: 1,
	name: 'Scooter electricos'
},
{
	id: 2,
	name: 'Bicicletas electricas'
},
{
	id: 3,
	name: 'Motos electricas'
},
{
	id: 4,
	name: 'Repuestos'
},
{
	id: 5,
	name: 'Gps localizador'
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
	/* Movilidad */
{
	id: 1,
	image: '../productos/m-se-1.jpg',
	title: 'Scooter basico',
	price: 120,
	category: 'Scooters'
},
{
	id: 1,
	image: '../productos/m-se-2.jpg',
	title: 'Scooter 67H',
	price: 300,
	category: 'Scooters'
},
{
	id: 1,
	image: '../productos/m-se-3.jpg',
	title: 'Scooter M80',
	price: 350,
	category: 'Scooters'
},
{
	id: 2,
	image: '../productos/m-be-1.png',
	title: 'Bici 450P',
	price: 120,
	category: 'Bicicletas electricas'
},
{
	id: 5,
	image: '../productos/m-gps-1.jpg',
	title: 'GPS frecuencia alta',
	price: 6000,
	category: 'GPS'
},
{
	id: 2,
	image: '../productos/m-be-2.jpg',
	title: 'Bicicleta E Compacta',
	price: 200,
	category: 'Bicicletas electricas'
},
{
	id: 2,
	image: '../productos/m-be-3.jpg',
	title: 'Bicicleta Todo terreno',
	price: 300,
	category: 'Bicicletas electricas'
},
{
	id: 3,
	image: '../productos/m-me-1.jpg',
	title: 'Bicicleta 240PD',
	price: 200,
	category: 'Moto electricas'
},
{
	id: 3,
	image: '../productos/m-me-2.jpg',
	title: 'Bicicleta Adibe',
	price: 300,
	category: 'Moto electricas'
},
{
	id: 3,
	image: '../productos/m-me-3.png',
	title: 'Bicicleta NED',
	price: 400,
	category: 'Moto electricas'
},
{
	id: 5,
	image: '../productos/m-gps-2.png',
	title: 'GPS Multiple',
	price: 3000,
	category: 'GPS'
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