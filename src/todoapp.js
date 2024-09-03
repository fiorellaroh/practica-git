class Task {
    constructor(name) {
        this.name = name;
        this.done = false;
        this.timer = 0;
    }
}

const tasks = [];

const addTask = (name) => {
    tasks.push(new Task(name));
}

const removeTask = (name) => {
    const index = tasks.findIndex(task => task.name === name);
    tasks.splice(index, 1);
}

const completeTask = (name) => {
    const task = tasks.find(task => task.name === name);
    task.done = true;
}

const uncompleteTask = (name) => {
    const task = tasks.find(task => task.name === name);
    task.done = true;
}

const addTimer = (name, time) => {
    // TODO
}

