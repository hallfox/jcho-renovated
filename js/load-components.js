function load (component, html)
{
	$.ajax({
		url: html,
		success: function (data) { $(component).append(data); },
		dataType: "html"
	});
}

load("#navbar-wrapper", "components/navbar.html");
load("#sidebar-wrapper", "components/sidebar.html");
load("footer", "components/footer.html");