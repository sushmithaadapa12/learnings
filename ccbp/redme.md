
An Express instance should be exported from the 'app.js' file using the default export syntax
3 ms 

The GET request to the path '/todos/?status=TO%20DO' should return the list of all todos whose status is 'TO DO' as a response
105 ms 


The GET request to the path '/todos/?priority=HIGH' should return the list of all todos whose priority is 'HIGH' as a response
8 ms 

The GET request to the path '/todos/?priority=HIGH&status=IN%20PROGRESS' should return the list of all todos whose priority is 'HIGH' and status is 'IN PROGRESS' as a response
7 ms 


The GET request to the path '/todos/?category=WORK&status=DONE' should return the list of all todos whose category is 'WORK' and status is 'DONE' as a response
6 ms 

The GET request to the path '/todos/?category=LEARNING&priority=HIGH' should return the list of all todos whose category is 'LEARNING' and priority is 'HIGH' as a response
6 ms 

The GET request to the path '/todos/?category=HOME' should return the list of all todos whose category is 'HOME' as a response
8 ms 

The GET request to the path '/todos/?search_q=Buy' should return the list of all todos whose todo contains 'Buy' text as a response
5 ms 

The GET request to the path '/todos/:todoId/' should return a specific todo based on the todo ID as a response
18 ms 

The GET request to the path '/agenda/?date=:date' should return a list of all todos of the specific date as a response upon success
6 ms 

The GET request to the path '/todos/' with invalid todo status should return '400' as status code and 'Invalid Todo Status' text as a response to the request
6 ms 

The GET request to the path '/todos/' with invalid todo priority should return '400' as status code and 'Invalid Todo Priority' text as a response to the request
5 ms 

The GET request to the path '/todos/' with invalid todo category should return '400' as status code and 'Invalid Todo Category' text as a response to the request
6 ms 

The GET request to the path '/agenda/' with an invalid date query should return '400' as status code and 'Invalid Due Date' text as a response to the request
5 ms 

The POST request to the path '/todos/' should return the 'Todo Successfully Added' text as a response upon success
183 ms 

The database should be updated on the post request
9 ms 

The POST request to the path '/todos/' with invalid todo status should return '400' as status code and 'Invalid Todo Status' text as a response to the request
88 ms 

The POST request to the path '/todos/' with invalid todo priority should return '400' as status code and 'Invalid Todo Priority' text as a response to the request
222 ms 

The POST request to the path '/todos/' with invalid todo category should return '400' as status code and 'Invalid Todo Category' text as a response to the request
82 ms 

The POST request to the path '/todos/' with invalid due date should return '400' as status code and 'Invalid Due Date' text as a response to the request
84 ms 

The PUT request to the path '/todos/:todoId/' with 'status' property in the body should return the 'Status Updated' text as a response upon success
84 ms 

The PUT request to the path '/todos/:todoId/' with 'priority' property in the body should return the 'Priority Updated' text as a response upon success
75 ms 

The PUT request to the path '/todos/:todoId/' with 'todo' property in the body should return the 'Todo Updated' text as a response upon success
84 ms 
The PUT request to the path '/todos/:todoId/' with 'category' property in the body should return the 'Category Updated' text as a response upon success
7 ms 
The PUT request to the path '/todos/:todoId/' with 'dueDate' property in the body should return the 'Due Date Updated' text as a response upon success
5 ms 
The database should be updated on the put request
2 ms 
The PUT request to the path '/todos/:todoId/' with invalid due date should return '400' as status code and 'Invalid Due Date' text as a response to the request
6 ms 
The PUT request to the path '/todos/:todoId/' with invalid status should return '400' as status code and 'Invalid Todo Status' text as a response to the request
90 ms 
The PUT request to the path '/todos/:todoId/' with invalid priority should return '400' as status code and 'Invalid Todo Priority' text as a response to the request
82 ms 
The PUT request to the path '/todos/:todoId/' with invalid category should return '400' as status code and 'Invalid Todo Category' text as a response to the request
4 ms 
The DELETE request to the path '/todos/:todoId/' should return 'Todo Deleted' text as a response upon success
112 ms 
The database should be updated on the delete request
1 ms 