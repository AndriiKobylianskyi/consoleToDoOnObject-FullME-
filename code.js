// Хранилищем будет объект, а имена задач - ключами. 
// const list = {
//  "create a new practice task": "In Progress",
//  "make a bed": "Done",
//  "write a post": "To Do",
// }

// Функция changeStatus - будет менять статус задачи 
// changeStatus("write a post", "Done")

// Функция addTask - добавляет новую задачу
// addTask('have a walk')

// Функция deleteTask - удаляет задачу
// deleteTask('have a walk')

// Функция showList будет выводить весь список дел в виде 
// Todo: 
//  "create a new practice task",
//  "make a bed",
// In Progress: 
//  "write a post"
// Done:
//  -


const stattuses = {
    TODO: `To Do`,
    INPROGRESS: `In Progress`,
    DONE: `Done`
}
const obj = {}

function addTask(taskName, status = stattuses.TODO) {
    if (!Object.keys(obj).includes(taskName)) {
        obj[taskName] = status
    }

}

function changeStatus(taskName, newStatus) {
    if (Object.keys(obj).includes(taskName) && Object.values(stattuses).includes(newStatus)) {
        obj[taskName] = newStatus
    } else {
        console.log("Select a status from the specified ones")
    }
}

function deleteTask(taskName) {
    if (Object.keys(obj).includes(taskName)) {
        delete obj[taskName]
    } else {
        console.log('There is no such thing')
    }
}

function showList() {
    let result = ``
    for (let status in stattuses) {
        result += `---${stattuses[status]}\n`
        for (let key in obj) {
            if (obj[key] == stattuses[status]) {
                result += ` ${key}\n`
            } else {
                continue;
            }
        }
    }
    console.log(result)
    return 
}
addTask('Footbal')
addTask('Sleep')
addTask('Eat')
addTask('Homework')
addTask('Dota')
addTask('Kakat')
changeStatus("Sleep", stattuses.INPROGRESS)
changeStatus("Homework", stattuses.INPROGRESS)
changeStatus("Dota", stattuses.DONE)
deleteTask(`Kakat`)
addTask('Sleep')
addTask('Drink tea')
addTask('Homework')
showList()
// console.log(obj)