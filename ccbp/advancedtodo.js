const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");
const { format } = require("date-fns");

const databasePath = path.join(__dirname, "todoApplication.db");

const app = express();

app.use(express.json());

let database = null;

const initializeDbAndServer = async () => {
  try {
    database = await open({
      filename: databasePath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () =>
      console.log("Server Running at http://localhost:3000/")
    );
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};

initializeDbAndServer();

const validateStatus = (request, response, next) => {
  const validStatus = ["TO DO", "IN PROGRESS", "DONE"];
  if (request.query.status && !validStatus.includes(request.query.status)) {
    return response.status(400), response.send(`Invalid Todo Status`);
  }
  next();
};

const validatePriority = (request, response, next) => {
  const validPriority = ["HIGH", "MEDIUM", "LOW"];
  if (
    request.query.priority &&
    !validPriority.includes(request.query.priority)
  ) {
    return response.status(400), response.send(`Invalid Todo Priority`);
  }
  next();
};

const validateCategory = (request, response, next) => {
  const validCategory = ["WORK", "HOME", "LEARNING"];
  if (
    request.query.category &&
    !validCategory.includes(request.query.category)
  ) {
    return response.status(400), response.send(`Invalid Todo Category`);
  }
  next();
};
const querys = (request, response) => {
  request.query = decodeURIComponent(request.query);
  return request.query;
};
// middleware to validate due date
const validateDueDate = (request, response, next) => {
  if (request.query.due_date) {
    const datePattern = /\d{4}-\d{1,2}-\d{1,2}/;
    if (!datePattern.test(request.query.due_date)) {
      return response.status(400), response.send(`Invalid Due Date`);
    }
    request.query.due_date = format(
      new Date(request.query.due_date),
      "yyyy-MM-dd"
    );
  }
  next();
};

app.get("/todos/", validateStatus,validatePriority,validateCategory,validateDueDate, async (request, response) => {
  let data = null;
  let getTodosQuery = "";
  const { search_q, priority, status,category } = request.query;
console.log(status)    
  switch (true) {
    case status !== undefined:    
      getTodosQuery = `
      SELECT
         id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
        status = '${status}'`;
         data = await database.all(getTodosQuery);
        response.send(data);
      break;
    case priority !== undefined:
      getTodosQuery = `
      SELECT
         id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
         priority = '${priority}';`;
          data = await database.all(getTodosQuery);
  response.send(data);
      break;
    case priority!== undefined && status!== undefined:
      getTodosQuery = `
      SELECT
        id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
       status = '${status}' and priority = '${priority}';`;
        data = await database.all(getTodosQuery);
  response.send(data);
      break;
      case search_q !== undefined:
      getTodosQuery = getTodosQuery = `
      SELECT
         id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
        todo LIKE '%${search_q}%';`;
         data = await database.all(getTodosQuery);
  response.send(data);
      break;
    case category !== undefined && status !== undefined:
      getTodosQuery = getTodosQuery = `
      SELECT
         id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
       category ='${category}' and  status = '${status}';`;
 data = await database.all(getTodosQuery);
  response.send(data);       
      break;
     case category !== undefined :
      getTodosQuery = getTodosQuery = `
      SELECT
        id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
       category ='${category}' ;`;
        data = await database.all(getTodosQuery);
  response.send(data);
      break;
      case category !== undefined && priority !== undefined :
      getTodosQuery = getTodosQuery = `
      SELECT
         id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
       category ='${category}' and priority = '${priority}' ;`;
        data = await database.all(getTodosQuery);
  response.send(data);
      break;
    default:
      getTodosQuery = `
      SELECT
         id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate 
      FROM
        todo 
      WHERE
        todo LIKE '%${search_q}%';`;
 data = await database.all(getTodosQuery);
  response.send(data);        
  }

 
});


app.get("/todos/:todoId/", async (request, response) => {
  const { todoId } = request.params;

  const getTodoQuery = `
    SELECT
       id,
        todo,
        priority,
        status,
        category,
        due_date AS dueDate
    FROM
      todo
    WHERE
      id = ${todoId};`;
  const todo = await database.get(getTodoQuery);
  response.send(todo);
});

const validateStatuss = (request, response, next) => {
  const validStatus = ["TO DO", "IN PROGRESS", "DONE"];
  if (request.body.status && !validStatus.includes(request.body.status)) {
    return response.status(400), response.send(`Invalid Todo Status`);
  }
  next();
};

// middleware to validate priority
const validatePrioritys = (request, response, next) => {
  const validPriority = ["HIGH", "MEDIUM", "LOW"];
  if (request.body.priority && !validPriority.includes(request.body.priority)) {
    return response.status(400), response.send(`Invalid Todo Priority`);
  }
  next();
};

// middleware to validate category
const validateCategorys = (request, response, next) => {
  const validCategory = ["WORK", "HOME", "LEARNING"];
  if (request.body.category && !validCategory.includes(request.body.category)) {
    return response.status(400), response.send(`Invalid Todo Category`);
  }
  next();
};

const validateDueDates = (request, response, next) => {
  if (request.body.dueDate) {
    const datePattern = /\d{4}-\d{1,2}-\d{1,2}/;
    if (!datePattern.test(request.body.dueDate)) {
      return response.status(400), response.send(`Invalid Due Date`);
    }
    request.body.dueDate = format(new Date(request.body.dueDate), "yyyy-MM-dd");
  }
  next();
};

app.put(
  "/todos/:todoId",
  validateStatuss,
  validatePrioritys,
  validateCategorys,
  validateDueDates,
  async  (req, res) => {
  const { todoId } = req.params;
  const { status, priority, todo, category, dueDate } = req.body;
  let message;

  // check which field is being updated and update accordingly
  if (status) {
   const query = await database.run(`UPDATE todo SET status = '${status}' WHERE id = ${todoId};`);
      if (query) {
        message = 'Status Updated';
        res.send(message);
      }
  } else if (priority) {
    const query = await database.run(`UPDATE todo SET priority = '${priority}' WHERE id =  ${todoId};`);
      if (query) {
        message = 'Priority Updated';
        res.send(message);
      };
  } else if (todo) {
   const query = await database.run(`UPDATE todo SET todo = '${todo}' WHERE id = ${todoId};`);
      if (query) {
        message = 'Todo Updated';
        res.send(message);
      }

  } else if (category) {
   const query = await database.run(`UPDATE todo SET category ='${category}' WHERE id =  ${todoId};`);
      if (query) {
        message = 'Category Updated';
        res.send(message);
      }
  } else if (dueDate) {
   const query = await database.run(`UPDATE todo SET due_date = '${dueDate}' WHERE id =   ${todoId};`);
      if (query) {
        message = 'Due Date Updated';
        res.send(message);
      }
  } else {
   await  res.status(400).send('No fields to update');
  }
}
);

app.delete("/todos/:todoId/", async (request, response) => {
  const { todoId } = request.params;
  const deleteTodoQuery = `
  DELETE FROM
    todo
  WHERE
    id = ${todoId};`;

  await database.run(deleteTodoQuery);
  response.send("Todo Deleted");
});

const validateDueDatee = (request, response, next) => {
  if (request.query.date) {
    const datePattern = /\d{4}-\d{1,2}-\d{1,2}/;
    if (!datePattern.test(request.query.date)) {
      return response.status(400), response.send(`Invalid Due Date`);
    }
    request.query.date = format(new Date(request.query.date), "yyyy-MM-dd");
    console.log(request.query.date)
  }
  next();
};
app.get("/agenda/", validateDueDatee, async (request, response) => {
  const deleteTodoQuery = `
  select id,
            todo,
            priority,
            status,
            category,
            due_date AS dueDate FROM
    todo
  WHERE
    due_date = '${ request.query.date }';`;

  const querys = await database.all(deleteTodoQuery);
  response.send(querys);
});

app.get("/get/", async (request, response) => {
  const deleteTodoQuery = `
  select * FROM
    todo
 `;

  const querys = await database.all(deleteTodoQuery);
  response.send(querys);
});

app.post(
  "/todos/",
  validateStatuss,
  validatePrioritys,
  validateCategorys,
  validateDueDates,
  async (request, response) => {
    const { id, todo, priority, status, category, dueDate } = request.body;
    const postTodoQuery = `
  INSERT INTO
    todo (id, todo, priority, status,category,due_date)
  VALUES
    (${id}, '${todo}', '${priority}', '${status}','${category}','${dueDate}');`;
    const query = await database.run(postTodoQuery);
    if(query){
    response.send("Todo Successfully Added");
    }
  }
);

module.exports = app;
