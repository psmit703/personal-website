// This is a short script to display the requested URL on the 404 page.

url = window.location.href

tag = document.getElementById("404URL")
tag.innerHTML = url
tag.href = url