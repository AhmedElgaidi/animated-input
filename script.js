const search_btn = document.querySelector(".search_btn"),
	close_btn = document.querySelector(".close_btn"),
	search_box_wrap = document.querySelector(".search_box_wrap"),
	input_search = document.querySelector(".input_search");


search_btn.addEventListener("click", () => {
	search_box_wrap.classList.toggle("active");
	input_search.focus();
});

close_btn.addEventListener("click", function(){
	search_box_wrap.classList.toggle("active");
});