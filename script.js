const select = (element) => document.querySelector(element);
const selectAll = (element) => document.querySelectorAll(element);

const api = fetch("https://fernandonetom.github.io/compra-de-pizzas/pizzas.js")
	.then((response) => response.text())
	.then((data) => console.log(data));

pizzaJson.map((item, index) => {
	let pizzaItem = select(".models .pizza-item").cloneNode(true);

	pizzaItem.querySelector(".pizza-item--img img").src = item.img;
	pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
	pizzaItem.querySelector(
		".pizza-item--price"
	).innerHTML = `R$ ${item.price.toFixed(2)}`;
	pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;
	pizzaItem.querySelector("a").addEventListener("click", (e) => {
		e.preventDefault();
		select(".pizzaWindowArea").style.opacity = 0;
		select(".pizzaWindowArea").style.display = "flex";
		setTimeout(() => {
			select(".pizzaWindowArea").style.opacity = 1;
		}, 200);
	});

	select(".pizza-area").append(pizzaItem);
});
