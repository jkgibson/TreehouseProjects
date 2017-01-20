//Problem:  When the page loads, hide all but the first 10 students on the list.
//          Add pagination to the bottom of the page.
//			Add filtered search option


//When page loads, fire off our script

	var endOfPage = document.getElementsByClassName("page")[0];
	var students = document.getElementsByClassName("student-item");
	var numStudents = students.length;


		//Calculate the number of pages needed
	function numberOfPagesNeeded(numStudents) {
		//Divide the count result by 10 to get the number of pages
		var numPages = Math.ceil(numStudents/10);
		return numPages;
	}

	function hideStudents(numStudents, students) {
		//Iterate over every student item in the student list and hide them
		for(var i = 0; i < numStudents; i++) {
			students[i].style.display = "none";
		}
	}

	function showTenStudents(students) {
  		//Starting on the current page, hide then uncover (display) ten items
  		hideStudents(numStudents, students);
  		for(var i = 0; i < 10; i++) {
  			students[i].style.display = "block";
  		}
  	}

	//Create a pagination function to do the pagination
	function paginator() {
		var pagination_div = document.createElement("div");
		pagination_div.className="pagination";
	    var ul = document.createElement("ul")
		//If we are on the current page, set the anchor tag to have a class of active
 		//Iterate through the number of pages that we have
		//Set the page number text to current loop value
		for(var i = 0; i < numberOfPagesNeeded(numStudents); i++) {
			//Create a list element and anchor element
			var list = document.createElement("li");
			var anchor = document.createElement("a");
			//Set attribute values for the anchor tag
			anchor.setAttribute("href", "#");
			//Set the page number text to current loop value
			anchor.innerHTML = i + 1;
			//Append the anchor to the li element
			list.appendChild(anchor);
			//Append the list element to the unordered list
			ul.appendChild(list);
		}
		//Appply the pagination by successively appending to the DOM
		pagination_div.appendChild(ul);
		endOfPage.appendChild(pagination_div);
	};


	//When the user clicks on a pagination button, we need to hide all of the students,
	//check for any active elements, remove them, add the current clicked element as active,
	//and show 10 students on a page at a time.
	function onActivePage() {
		hideStudents(numStudents,students);
		//if there are any active elements, clear them and add active to the currect element
		for(var i = 0; i < allAnchorsInDiv.length; i++){
			if(allAnchorsInDiv[i].classList = "active"){
				allAnchorsInDiv[i].classList.remove("active")
			};
		};

		this.classList.add("active");

		//Now, we need to show 10 students, based on the current active page we are on
		var currentPage = parseInt(this.innerText);
		console.log(currentPage);
		var endPage = currentPage * 10;
		var startPage = endPage - 10;
		for(var i = startPage; i < endPage; i++) {
			students[i].style.display = "block";
		}
	};

	//This function will add a event listener for click on the pagination buttons
	function setClickEvent(allAnchorsInDiv) {
		for(var i = 0; i < allAnchorsInDiv.length; i++) {
	    	allAnchorsInDiv[i].addEventListener("click", onActivePage);
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

	
	





















//Create event on click of page number
	//The page number has been clicked, so it's the current active page





//Include a search plugin so the list of students is filtered to match the search.

