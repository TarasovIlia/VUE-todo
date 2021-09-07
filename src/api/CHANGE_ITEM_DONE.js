export default function CHANGE_ITEM_DONE(id, data) {
    const newItem = {
        done : data,
    }
    console.log(data)
    const require = {
        method : "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem)
    } 
    fetch("http://localhost:3000/todoList/"+id, require)
}