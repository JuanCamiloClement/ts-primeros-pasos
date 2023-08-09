type Task = {
    id: number,
    title: string,
    completed: boolean
}

type TaskList = Task[];

const addTask = (taskList: TaskList, task: Task): TaskList => {
    return [...taskList, task];
}

const completeTask = (taskList: TaskList, taskId: number): TaskList => {
    const taskToComplete = taskList.find((task) => task.id === taskId);
    taskToComplete!.completed = true;
    return taskList;
}

const filterTasks = (taskList: TaskList, isCompleted: boolean): TaskList => {
    const filteredList: TaskList = taskList.filter((task) => task.completed === isCompleted);
    return filteredList;
}

const printTaskList = (taskList: TaskList): void => {
    taskList.map((task: Task) => console.log(task.title, task.completed))
}

const runApp = (): void => {
    const tasks: TaskList = [
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
    const task11: Task = {
        id: 11,
        title: "Agregar una nueva tarea a la lista",
        completed: false
    }
    const newList: TaskList = addTask(tasks, task11);
    const modifiedList: TaskList = completeTask(newList, 1);
    const modifiedList2: TaskList = completeTask(modifiedList, 11);
    const filteredList: TaskList = filterTasks(modifiedList2, true);
    printTaskList(filteredList);
}

runApp();
