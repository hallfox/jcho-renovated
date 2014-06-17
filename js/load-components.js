function load (component, html)
{
	if ($(component).length)
		return $(component).load(html);
}

load("#navbar-wrapper", "components/navbar.html");
load("#sidebar-wrapper", "components/sidebar.html");
load("footer", "components/footer.html");