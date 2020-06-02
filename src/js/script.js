const select = (element) => document.querySelector(element);
const selectAll = (element) => document.querySelectorAll(element);
let modalQtd = 1;
let modalKey;
let pizzas;

//GET CART BY SESSION STORAGE
sessionStorage.getItem("pizza_cart")
	? (cart = JSON.parse(sessionStorage.getItem("pizza_cart")))
	: (cart = []);

//LIST PIZZAS

const api = fetch(
	"https://fernandonetom.github.io/compra-de-pizzas/apiData.json"
)
	.then((response) => response.json())
	.then((data) => {
		pizzas = data;
		data.map((item, index) => {
			let pizzaItem = select(".models .pizza-item").cloneNode(true);
			pizzaItem.setAttribute("data-key", index);
			pizzaItem.querySelector(".pizza-item--img img").src = item.img;
			pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name;
			pizzaItem.querySelector(
				".pizza-item--price"
			).innerHTML = `R$ ${item.price.toFixed(2)}`;
			pizzaItem.querySelector(".pizza-item--desc").innerHTML = item.description;

			pizzaItem.querySelector("a").addEventListener("click", (e) => {
				e.preventDefault();
				modalQtd = 1;
				let key = e.target.closest(".pizza-item").getAttribute("data-key");
				modalKey = key;

				select(".pizzaBig img").src = data[key].img;
				select(".pizzaInfo h1").innerHTML = data[key].name;
				select(".pizzaInfo--actualPrice").innerHTML = `R$ ${data[
					key
				].price.toFixed(2)}`;
				select(".pizzaInfo .pizzaInfo--desc").innerHTML = data[key].description;
				select(".pizzaInfo--size.selected").classList.remove("selected");
				selectAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
					if (sizeIndex == 2) {
						size.classList.add("selected");
					}
					size.querySelector("span").innerHTML = data[key].sizes[sizeIndex];
				});
				select(".pizzaInfo--qt").innerHTML = modalQtd;
				select(".pizzaWindowArea").style.opacity = 0;
				select(".pizzaWindowArea").style.display = "flex";
				setTimeout(() => {
					select(".pizzaWindowArea").style.opacity = 1;
				}, 200);
			});

			select(".pizza-area").append(pizzaItem);
		});
	});

//MODAL EVENTS
const closeModal = () => {
	select(".pizzaWindowArea").style.opacity = 0;
	setTimeout(() => {
		select(".pizzaWindowArea").style.display = "none";
	}, 200);
};
selectAll(".pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton").forEach(
	(item) => {
		item.addEventListener("click", closeModal);
	}
);

//CONTROLS
select(".pizzaInfo--qtmenos").addEventListener("click", () => {
	if (modalQtd > 1) {
		modalQtd--;
		select(".pizzaInfo--qt").innerHTML = modalQtd;
	}
});
select(".pizzaInfo--qtmais").addEventListener("click", () => {
	modalQtd++;
	select(".pizzaInfo--qt").innerHTML = modalQtd;
});
selectAll(".pizzaInfo--size").forEach((size, sizeIndex) => {
	size.addEventListener("click", (e) => {
		select(".pizzaInfo--size.selected").classList.remove("selected");
		size.classList.add("selected");
	});
});

//ADD TO CART
select(".pizzaInfo--addButton").addEventListener("click", () => {
	let size = parseInt(
		select(".pizzaInfo--size.selected").getAttribute("data-key")
	);

	let indentifier = pizzas[modalKey].id + "@" + size;

	let searchKey = cart.findIndex((item) => item.indentifier == indentifier);

	if (searchKey > -1) {
		cart[searchKey].qt += modalQtd;
	} else {
		cart.push({
			indentifier,
			id: pizzas[modalKey].id,
			size,
			qt: modalQtd,
		});
	}
	closeModal();
	// sessionStorage.setItem("pizza_cart", JSON.stringify(cart));
});
