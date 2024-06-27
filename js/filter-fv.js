const btns=[
	/* Fotografia y video */
{
	id: 1,
	name: 'Camaras DLSR'
},
{
	id: 2,
	name: 'Camaras mirrorless'
},
{
	id: 3,
	name: 'Tripoides y estabilizadores de camaras'
},
{
	id: 4,
	name: 'Accesorios de fotografia'
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
	/* Fotografia y video */
{
	id: 1,
	image: '../productos/fv-cd-1.png',
	title: 'Camara digital Nikon 220',
	price: 120,
	category: 'Camaras digitales'
},
{
	id: 1,
	image: '../productos/fv-cd-2.jpg',
	title: 'Camara digital Canon con funda',
	price: 300,
	category: 'Camaras digitales'
},
{
	id: 1,
	image: '../productos/fv-cd-3.jpg',
	title: 'Camara digital Canon',
	price: 350,
	category: 'Camaras digitales'
},
{
	id: 4,
	image: '../productos/fv-af-1.jpg',
	title: 'Luz para set fotografico',
	price: 120,
	category: 'Accesorios de fotografia'
},
{
	id: 2,
	image: '../productos/fv-cm-1.jpg',
	title: 'Camara mirrorless Sony',
	price: 120,
	category: 'Camaras mirrorless'
},
{
	id: 2,
	image: '../productos/fv-cm-2.jpg',
	title: 'Camara mirrorless Sony Ultra',
	price: 200,
	category: 'Camaras mirrorless'
},
{
	id: 2,
	image: '../productos/fv-cm-3.jpg',
	title: 'Camara mirrorless Sony MD ULTRA',
	price: 300,
	category: 'Camaras mirrorless'
},
{
	id: 3,
	image: '../productos/fv-tec-1.jpg',
	title: 'Tripoide Camaras Digitales',
	price: 200,
	category: 'Tripoides'
},
{
	id: 3,
	image: '../productos/fv-tec-2.jpg',
	title: 'Tripoide Basico',
	price: 300,
	category: 'Tripoides'
},
{
	id: 3,
	image: '../productos/fv-tec-3.jpg',
	title: 'Tripoide para dispositivos mobiles',
	price: 400,
	category: 'Tripoides'
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