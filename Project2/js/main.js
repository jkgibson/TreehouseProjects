//Problem:  When the page loads, hide all but the first 10 students on the list.
//          Add pagination to the bottom of the page.
//			Add filtered search option


//When page loads, fire off our script

	var endOfPage = document.getElementsByClassName('page')[0];
	var students = document.getElementsByTagName("li");
	var numStudents = students.length;

		//Calculate the number of pages needed
	function numberOfPagesNeeded(numStudents) {
		//Traverse the DOM and count how many li elements are in the .student-list class
		//Store the count of list elements in a variable

		//Divide the count result by 10 to get the number of pages
		var numPages = Math.ceil(numStudents/10);
		return numPages;
	}

	function hideAllStudents(numStudents, students) {
		//Iterate over every student item in the student list and hide them
		for(var i = 0; i < numStudents; i++) {
			students[i].style.display = "none";
		}
	}

	function showTenStudents() {
		//Starting on the current page, uncover (display) ten items
		for(var i = 0; i < 10; i++) {
			students[i].style.display = "block";
		}
	}

	function clearActive(numStudents){
		var pagesToClear;
		for(var i = 0; i < numberOfPagesNeeded(numStudents); i++){
			pagesToClear[i].classList.remove('class','active');
		}
	}

function logIt() {
	console.log('logged')
};

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
		var allAnchorsInDiv = document.querySelectorAll('a');
		allAnchorsInDiv.forEach(onActivePage, numStudents);
	};

paginator();

function onActivePage(current){
	current.onclick = function() {

		//hideAllStudents(numStudents, students);
		//if there are any active elements, clear them and add active to the currect element
		//else just add active to the current element
		var test = document.getElementsByClassName('active');
		if(test[0]='active') {
			clearActive(numStudents);
		} else {
			current.classList.add('active');
		};
	};
};











//Create event on click of page number
	//The page number has been clicked, so it's the current active page





//Include a search plugin so the list of students is filtered to match the search.

