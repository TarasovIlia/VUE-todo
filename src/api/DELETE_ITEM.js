export default function DELETE_ITEM(id) {
    const require = {
        method : "DELETE"
    }
    fetch("http://localhost:3000/todoList/" + id, require)
}