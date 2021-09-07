export default function ADD_ITEM(data) {
    const newItem = {
        title : data.title,
        task : data.task,
        done : data.done,
        important : data.important,
    }
    const require = {
        method : "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem)
    } 
    fetch("http://localhost:3000/todoList/", require)
}