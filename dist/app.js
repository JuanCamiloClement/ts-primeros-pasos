"use strict";
const addTask = (taskList, task) => {
    return [...taskList, task];
};
const completeTask = (taskList, taskId) => {
    const taskToComplete = taskList.find((task) => task.id === taskId);
    taskToComplete.completed = true;
    return taskList;
};
const filterTasks = (taskList, isCompleted) => {
    const filteredList = taskList.filter((task) => task.completed === isCompleted);
    return filteredList;
};
const printTaskList = (taskList) => {
    taskList.map((task) => console.log(task.title, task.completed));
};
const runApp = () => {
    const tasks = [
        { id: 1, title: 'Completar taller de TypeScript', completed: false },
        { id: 2, title: 'Estudiar programación funcional', completed: false },
        { id: 3, title: 'Preparar presentación sobre TypeScript', completed: true },
        { id: 4, title: 'Leer libro de TypeScript avanzado', completed: false },
        { id: 5, title: 'Resolver ejercicios de TypeScript', completed: false },
        { id: 6, title: 'Hacer ejercicio', completed: true },
        { id: 7, title: 'Comprar víveres', completed: false },
        { id: 8, title: 'Llamar al médico', completed: false },
        { id: 9, title: 'Limpiar la casa', completed: true },
        { id: 10, title: 'Actualizar el CV', completed: false }
    ];
    const task11 = {
        id: 11,
        title: "Agregar una nueva tarea a la lista",
        completed: false
    };
    const newList = addTask(tasks, task11);
    const modifiedList = completeTask(newList, 1);
    const modifiedList2 = completeTask(modifiedList, 11);
    const filteredList = filterTasks(modifiedList2, true);
    printTaskList(filteredList);
};
runApp();
