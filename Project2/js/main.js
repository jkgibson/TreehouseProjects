//Problem:  When the page loads, hide all but the first 10 students on the list. 
//          Add pagination to the bottom of the page.
//			Add filtered search option


//When page loads, hide all students in the list except to the current page you are on
//Create the pagination list
	//Calculate the number of pages needed
		//Traverse the DOM and count how many li elements are in the .student-list class
		//Store the count of list elements in a variable
		var numStudents = $(".student-list li").length;
		//Divide the count result by 10 to get the number of pages
		var numPages = Math.ceil(numStudents/10);
		console.log(numPages);
	//Initialize a variable to show what current page we are on	
		
	//Iterate over every student item in the student list and hide them

	//Starting on the current page, uncover (display) ten items

	
	//Create the pagination unordered list (create the ul element)
		//Iterate through the number of pages that we have
			//Create a list element
				//Create an anchor element

				//Set anchor tag values
				//Set attribute values for the anchor tag
				//If we are on the current page, set the anchor tag to have a class of active
				//Set the page number text to current loop value

				//Append the anchor to the li element
			//Append the list element 
	
	//Show the pagination HTML	
	
//Create event on click of page number 
	//The page number has been clicked, so it's the current active page
		


	

//Include a search plugin so the list of students is filtered to match the search.

