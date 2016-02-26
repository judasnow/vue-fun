const _todos = [
    {
        id: 1,
        content: 'todo1',
        done: false
    },
    {
        id: 2,
        content: 'todo2',
        done: false
    },
]

export default {
    getTodosList(cb) {
        setTimeout(() => {
            cb(_todos)
        }, 1000)
    },
    setDone(cb) {

    },
    cancleDone(cb) {

    },
    deleteTodo() {

    }
}
