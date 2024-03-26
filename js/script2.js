let navbar = document.querySelector(".header .flex .navbar");

document.querySelector("#menu-btn").onclick = () => {
	navbar.classList.toggle("active");
};

let account = document.querySelector(".user-account");

document.querySelector("#user-btn").onclick = () => {
	account.classList.add("active");
};

document.querySelector("#close-account").onclick = () => {
	account.classList.remove("active");
};

// Show/hide functionality for ORDERS section
// Show/hide functionality for ORDERS section
let myOrders = document.querySelector(".my-orders");

document.querySelector("#order-btn").onclick = () => {
	myOrders.classList.add("active");
};

document.querySelector("#close-orders").onclick = () => {
	myOrders.classList.remove("active");
};
// End of Show/hide functionality for ORDERS section
// End of Show/hide functionality for ORDERS section
// End of Show/hide functionality for ORDERS section
// End of Show/hide functionality for ORDERS section
// End of Show/hide functionality for ORDERS section

let cart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
	cart.classList.add("active");
};

document.querySelector("#close-cart").onclick = () => {
	cart.classList.remove("active");
};

// End of Show/hide functionality for shopping-cart section
// End of Show/hide functionality for shopping-cart section
// End of Show/hide functionality for shopping-cart section
// End of Show/hide functionality for shopping-cart section
// End of Show/hide functionality for shopping-cart section

window.onscroll = () => {
	navbar.classList.remove("active");
};
