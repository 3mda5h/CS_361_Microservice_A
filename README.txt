A. The microservice is running on a server, so you can request data from it using HTTP post requests. 
For my sample code I was running a local express server on my machine, you can host the server however you like.
My example code uses axios to make these requests, but you could use other APIs like fetch. If you choose to use axios, 
you must call the asynchronous axios.post() function, which takes three arguments: 
  1. the url of the server that the microservice runs on + "/filter"
  2. the body of the post request (which in this case should be a JSON object containing the array of tasks, filterBy, and filterValue)
  3. request configuration such as headers, query params, etc (this is optional and you don't need it to call the microservice)
axios.post is an asynchronous function, meaning it returns a javascript Promise.
because of this, you need to call it with "await", and if you call it inside of another function, that function must also
be asynchronous. 

example call with axios.post: 
const response = await axios.post("http://localhost:3000/filter", { tasks, filterValue, filterBy });

B. The microservice recieves data using app.post("/filter", (req, res) => <function logic>)
    the funciton provided as a parameter of app.post() is what the program will do when it recieves a HTTP post request for the /filter path.
    Req and res are parameters (request and response). req.body contains what the client (mainProgram.js) sent in the body.
    so req.body is how you access the tasks, filterBy, and filterValue data.
    res.json() sends back a response to the client in JSON format. The microservice sends the filtered array.

    the JSON response body can be accessed using response.data in the main program (assuming you set axios.post() equal to a 
    const or variable named response )

C.  refer to "UML diagram.pdf" in github
