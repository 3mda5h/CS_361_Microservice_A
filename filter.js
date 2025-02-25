const express = require("express");
const app = express();
app.use(express.json());

//server recieves post request
app.post("/filter", (req, res) => 
    {
        console.log("request recieved");
        console.log("this is the request body:", req.body);
        /*creates const "tasks" that will be set to the first member in the JSON, which is the array of tasks
        also creates const "filterValue" and "filterBy" that is set to the second member and 3rd member in the JSON, respectively  */
        const { tasks, filterValue, filterBy } = req.body;
        let filteredTasks; //variable to contain the array of filtered tasks
        /*array.filter(<insert function>) calls the provided function on each element of the array
        and returns an array containing only the objects that caused the provided function to
        return true. */
        if(filterBy === 'userId') 
        {
            if(typeof(filterValue) !== "number") res.json({"Error": "invalid request"}); //checking for valid input
            else filteredTasks = tasks.filter(task => task.userId === filterValue); // <funtion parameter> => <function logic>
        }
        else if(filterBy === 'team') 
        {
            if(typeof(filterValue) !== "string") res.json({"Error": "invalid request"});
            else filteredTasks = tasks.filter(task => task.team === filterValue);
        }
        else if(filterBy === 'priority') 
        {
            if(typeof(filterValue) !== "string") res.json({"Error": "invalid request"});
            else filteredTasks = tasks.filter(task => task.priority === filterValue);
        }
        else res.json({"Error": "invalid request"});
        res.json(filteredTasks); //sends array of filtered tasks back to main program in JSON format
    }
);

app.listen(3000, () => console.log("Filter microservice running on port 3000"));