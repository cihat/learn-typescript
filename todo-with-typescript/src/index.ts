import { v4 as uuidV4 } from 'uuid';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>('#list');
const form = document.getElementById('new-task-form') as HTMLFormElement;
const input = document.querySelector<HTMLInputElement>('#new-task-title');
const tasks: Task[] = loadTasks();
tasks.forEach(addListItem);

form?.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!input?.value) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),
  };
  tasks.push(newTask);
  saveTasks();

  addListItem(newTask);
  input.value = '';
});

function addListItem(task: Task): void {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  const removeButton = document.createElement('button');

  checkbox.addEventListener('change', () => {
    task.completed = checkbox.checked;
    saveTasks();
  });

  checkbox.type = 'checkbox';
  removeButton.innerText = 'X';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  item.append(removeButton);
  list?.append(item);

  removeButton.addEventListener('click', () => {
    removeTask(task);
    console.log('item', item);
    item.remove();
  });
}

function saveTasks(): void {
  localStorage.setItem('TASKS', JSON.stringify(tasks));
}

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem('TASKS');
  if (!taskJSON) return [];

  return JSON.parse(taskJSON);
}

function removeTask(task: Task): void {
  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  saveTasks();
}
