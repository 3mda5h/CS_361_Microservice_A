import axios from "axios";

class Task 
{
    constructor(userId, team, priority) 
    {
        this.userId = userId;
        this.team = team;
        this.priority = priority;
    }
}

const tasks = [
    new Task(6666, 'team2', 'medium'),
    new Task(2222, 'team1', 'high'),
    new Task(1111, 'team2', 'high'),
    new Task(6666, 'team2', 'low')
];

/**
 * 
 * @param {string} filterBy key you are filtering by
 * @param {*} filterValue value you want to filter by
 * @returns filtered array
 * 
 *   for example, passing in "userId" for filterBy and "1111" for filterValue will return an array of all 
 *   tasks that have a user ID of 1111
 */
async function filter(filterBy, filterValue)
{
    try 
    {
        const response = await axios.post("http://localhost:3000/filter", { tasks, filterValue, filterBy });
        return response.data;
    } 
    catch (error) 
    {
        console.error("Error:", error.message);
    }
}

console.log("the full task array is: ", tasks);

let filteredTasks = await filter("userId", 6666);
console.log("tasks filtered by userId of 6666:", filteredTasks);

filteredTasks = await filter("priority", "high");
console.log("tasks filtered by priority 'high':", filteredTasks);

filteredTasks = await filter("team", "team2");
console.log("tasks filtered by team 'team2':", filteredTasks);

filteredTasks = await filter("userId", "bob");
console.log("invalid filter request:", filteredTasks);


