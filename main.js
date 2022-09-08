document.querySelectorAll(".middle").forEach((element) => {
	element.style.marginLeft = "-" + (parseInt(element.style.width) / 2) + "px";
});
const id = document.querySelector(".id-box");
const pwd = document.querySelector(".pwd-box");
const contents = document.querySelector(".content");
const submit = document.querySelector(".submit");
const getData = () => {

fetch('./content.json')
  .then(response => response.json())
  .then(data => {return data})
  .catch(error => {
	  console.log(error)
	  return null
  });
}
submit.addEventListener("click", () => {
		
	const blog = {
		"id" : id.value,
		"pwd" : pwd.value,
		"content" : contents.value
	};
	console.log(blog)
	console.log(getData().no)
});


