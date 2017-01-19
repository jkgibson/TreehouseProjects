//Problem:  When the page loads, hide all but the first 10 students on the list.
//          Add pagination to the bottom of the page.
//			Add filtered search option


//When page loads, fire off our script

	var endOfPage = document.getElementsByClassName('page')[0];
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
			//Create a list element
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
		}
		//Now display the .pagination HTML, which is the ul we created up above
		pagination_div.appendChild(ul);
		endOfPage.appendChild(pagination_div);
	};


	paginator();

	//need to functionalize this step right here
	var allAnchorsInDiv = document.querySelectorAll('a');

	for(var i = 0; i < allAnchorsInDiv.length; i++) {
    	allAnchorsInDiv[i].addEventListener("click", onActivePage);
	};


	function onActivePage() {
		hideStudents(numStudents,students);
		//if there are any active elements, clear them and add active to the currect element
		for(var i = 0; i < allAnchorsInDiv.length; i++){
			if(allAnchorsInDiv[i].classList = "active"){
				allAnchorsInDiv[i].classList.remove("active")
			};
		};

		this.classList.add('active');

		//Now, we need to show 10 students, based on the current active page we are on

		var currentPage = parseInt(this.innerText);
		console.log(currentPage);
		var endPage = currentPage * 10;
		var startPage = endPage - 10;
		for(var i = startPage; i < endPage; i++) {
			students[i].style.display = "block";
		}


		console.log(allAnchorsInDiv);
	};





















//Create event on click of page number
	//The page number has been clicked, so it's the current active page





//Include a search plugin so the list of students is filtered to match the search.

