const TodoDao = require('./TodoDao.js');
const todoDao = new TodoDao();

const app = async () => {
    let savedTodo = await todoDao.saveEntity({
        title: "Figure out how to use MySQL with NodeLS",
        completed: 0
    });
    console.log("saved Todo --> ".savedTodo);

    savedTodo.completed = 1;
    let isUpdated = await todoDao.updateEntity(savedTodo);
    console.log("Is it updated --> ", isUpdated);

    let todoList = await todoDao.readEntities();
    console.log("List of todo --> ", todoList);

    let isDeleted = await todoDao.deleteEntity(savedTodo.id);
    console.log("Is it deleted --> ", isDeleted);
}

app();