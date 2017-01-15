//Problem:  When the page loads, hide all but the first 10 students on the list.
//          Add pagination to the bottom of the page.
//			Add filtered search option


//When page loads, hide all students in the list except to the current page you are on
//Create the pagination list
	//Calculate the number of pages needed
		//Traverse the DOM and count how many li elements are in the .student-list class
		//Store the count of list elements in a variable
		var students = document.getElementsByTagName("li");
		var numStudents = students.length;
		//Divide the count result by 10 to get the number of pages
		var numPages = Math.ceil(numStudents/10);
		console.log(numPages);
	//Initialize a variable to show what current page we are on
		var currentPage = 1;
	
	//Create a pagination function to do the pagination
	var paginator = function(){
		//Create the pagination div
		var pagination = document.createElement("div");
		//Create the pagination unordered list (create the ul element)
		var ul = document.createElement("ul");
		//Create a list element
		var list = document.createElement("li");
		//Create an anchor element
		var anchor = document.createElement("a");

		//Set the pagination class on the pagination div
		pagination.setAttribute("class", "pagination");
		//Set attribute values for the anchor tag
		anchor.setAttribute("href", "#");

		//Append the unordered list to the pagination div
		pagination_div.appendChild(ul);
		//Append the list element to the unordered list	
		ul.appendChild(list);
		//Append the anchor to the li element
		list.appendChild(anchor);

	}

		//Iterate over every student item in the student list and hide them
		//for(var i = 0; i < numStudents; i++) {
		//	students[i].style.display = "none";
		//}

		//Starting on the current page, uncover (display) ten items
		//for(var i = 0; i < 10; i++) {
		//	students[i].style.display = "block";
		//}
 		
 		
			//Iterate through the number of pages that we have
			for(var i = 0; i < numPages; i++) {
				
				
								
					/
					//If we are on the current page, set the anchor tag to have a class of active

					//Set the page number text to current loop value
					anchor.innerHTML = i;
					
					
			}
			//Now display the .pagination HTML, which is the ul we created up above
		
		pagination_div.className=".pagination";
		pagination_div.innerHTML = ul;
		console.log(pagination_div);
			
	

	



//Create event on click of page number
	//The page number has been clicked, so it's the current active page





//Include a search plugin so the list of students is filtered to match the search.

