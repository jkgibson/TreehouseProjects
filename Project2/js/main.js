//
//Problem:  When the page loads, hide all but the first 10 students on the list.
//          Add pagination to the bottom of the page.
//			Add filtered search option


//When page loads, fire off our script

var endOfPage = document.getElementsByClassName("page")[0];
var students = document.getElementsByClassName("student-item");
var numStudents = students.length;


//Calculate the number of pages needed based on the number of students
function numberOfPagesNeeded(numStudents) {
	//Divide the count result by 10 to get the number of pages
	var numPages = Math.ceil(numStudents/10);
	return numPages;
};

//Hide the students so that we can selectively display them on click of pagination
function hideStudents(numStudents, students) {
	//Iterate over every student item in the student list and hide them
	for(var i = 0; i < numStudents; i++) {
		students[i].style.display = "none";
	};
};

//Used to show only the initial ten students when the page is loaded
function showTenStudents(students) {
		//Hide then uncover (display) ten items
		hideStudents(numStudents, students);
		for(var i = 0; i < 10; i++) {
			students[i].style.display = "block";
		};
};

//Creates the pagination HTML and appends it to the bottom of the page.
function paginator() {
	//Pagination div to encompass the pagination html
	var pagination_div = document.createElement("div");
	pagination_div.className = "pagination";
	//Creat an unordered list to hold the lists and anchors.
    var ul = document.createElement("ul");
	
	//Iterate through the number of pages that we have
	//Create list and anchor elements, set their attributes
	//Set the page number text to current loop value
	//Append list and unordered elements, then apply by appending to DOM
	for(var i = 1; i <= numberOfPagesNeeded(numStudents); i++) {
		//Create a list element and anchor element
		var list = document.createElement("li");
		var anchor = document.createElement("a");
		//Set attribute values for the anchor tag
		anchor.setAttribute("href", "#");
		//Set the page number text to current loop value
		anchor.innerHTML = i;
		//Append the anchor to the li element
		list.appendChild(anchor);
		//Append the list element to the unordered list
		ul.appendChild(list);
	};
	//Apply the pagination by successively appending to the DOM
	pagination_div.appendChild(ul);
	endOfPage.appendChild(pagination_div);
};

//This function will add a event listener for when the user clicks on the pagination buttons
function setClickEvent(allAnchorsInDiv) {
	for(var i = 0; i < allAnchorsInDiv.length; i++) {
    	allAnchorsInDiv[i].addEventListener("click", onActivePage);
	};
};

//When the user clicks on a pagination button, we need to hide all of the students,
//check for any active elements, remove them, add the current clicked element as active,
//and show 10 students on a page at a time.
function onActivePage() {
	hideStudents(numStudents,students);
	//Iterate throuigh all of our acnhors and if there are any active elements, clear them 
	for(var i = 0; i < allAnchorsInDiv.length; i++){
		if(allAnchorsInDiv[i].classList = "active"){
			allAnchorsInDiv[i].classList.remove("active")
		};
	};

	//Set the specific pagination we just clicked on to active.
	this.classList.add("active");

	//Find what page number we are on by inspecting the inner text of the active anchor
	var currentPage = parseInt(this.innerText);
	var endPage = currentPage * 10;
	var startPage = endPage - 10;
	//"Unhide" the student items on the current page
	for(var i = startPage; i < endPage; i++) {
		students[i].style.display = "block";
	};
};

//Initially show ten students when we launch the page
showTenStudents(students);

//Do the pagination changes to the HTML
paginator();

//Select all of the anchor elements in our pagination
var allAnchorsInDiv = document.querySelectorAll("a");

//Set the click event on all of the anchors so you can be ready for a click.
setClickEvent(allAnchorsInDiv);