const TodoDao = require('./TodoDao.js');
const TodoDao = new TodoDao();

const app = async () => {
    let savedTodo = await TodoDao.saveEntrity({
        title: "Figure out how to use MySQL with NodeLS",
        completed: 0
    });
    console.log("saved Todo --> ".savedTodo);

    savedTodo.completed = 1;
    let isUpdated = await TodoDao.updateEntity(savedTodo);
    console.log("Is it updated --> ", isUpdated);

    let todoList = await TodoDao.readEntities();
    console.log("List of todo --> ", todoList);

    let isDeleted = await TodoDao.deleteEntity(savedTodo.id);
    console.log("Is it deleted --> ", isDeleted);
}

app();