export async function getTasks() {
    const response = await fetch('http://localhost:3030/tasks');
    const data = await response.json();
    return data;
}

export async function createTask(task) {
    const response = await fetch('http://localhost:3030/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
}

export async function updateTask(task) {
    const response = await fetch(`http://localhost:3030/tasks/${task.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    const data = await response.json();
    return data;
}

export async function deleteTask(id) {
    await fetch(`http://localhost:3030/tasks/${id}`, {
        method: 'DELETE',
    });
}
