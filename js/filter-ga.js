const btns=[
	/* Gamer */
{
	id: 1,
	name: 'Laptop gamer'
},
{
	id: 2,
	name: 'Monitores'
},
{
	id: 3,
	name: 'Consolas'
},
{
	id: 4,
	name: 'Realidad virtual'
},
{
	id: 5,
	name: 'Accesorios'
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
	/* Gamer */
{
	id: 1,
	image: '../productos/g-lg-1.jpg',
	title: 'Tuf gaming 4060rtx',
	price: 12000,
	category: 'Laptop gamer'
},
{
	id: 1,
	image: '../productos/g-lg-2.jpg',
	title: 'Convertidor ROKU PREMIERE',
	price: 6300,
	category: 'Laptop gamer'
},
{
	id: 1,
	image: '../productos/g-lg-3.jpg',
	title: 'Convertidor ROKU STREAMING STICK 4K',
	price: 4350,
	category: 'Laptop gamer'
},
{
	id: 2,
	image: '../productos/g-m-1.jpg',
	title: 'Odyssey G3',
	price: 1800,
	category: 'Monitores'
},
{
	id: 4,
	image: '../productos/g-rv-1.jpg',
	title: 'Gafas de realidad virtual PS V2',
	price: 11800,
	category: 'Realidad virtual'
},
{
	id: 4,
	image: '../productos/g-rv-2.jpg',
	title: 'Gafas de realidad virtual Oculus',
	price: 11800,
	category: 'Realidad virtual'
},
{
	id: 2,
	image: '../productos/g-m-2.jpg',
	title: 'Asus gaming monitor',
	price: 2200,
	category: 'Monitores'
},
{
	id: 2,
	image: '../productos/g-m-3.jpg',
	title: 'Samsung curver monitor',
	price: 300,
	category: 'Monitores'
},
{
	id: 3,
	image: '../productos/g-c-1.jpg',
	title: 'Nintendo Switch',
	price: 1200,
	category: 'Consolas'
},
{
	id: 3,
	image: '../productos/g-c-2.jpg',
	title: 'PS5',
	price: 3300,
	category: 'Consolas'
},
{
	id: 3,
	image: '../productos/g-c-3.jpg',
	title: 'XBOX S',
	price: 3400,
	category: 'Consolas'
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