url = window.location.href
console.log(url)

tag = document.getElementById("404URL")
console.log(tag)
tag.innerHTML = url
tag.href = url