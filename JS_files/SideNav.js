document.write('<div id="mySidenav" class="sidenavX"><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><a href="javascript:smoothScrollCreators()" onclick="openCity(event, \'Paris\')">About Us</a><a href="#" onclick="showProducts()">Products</a><a href="Products/PaymentGateway/PaymentGateway.html">Cart</a><a href="contact-form.html">Contact Us</a></div>');

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function showProducts() {
    document.getElementById("products").click();
}

function smoothScrollCreators() {
    document.getElementById("creators").scrollIntoView({behavior: 'smooth'});
}