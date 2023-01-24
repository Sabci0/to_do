import createTag from "./createTag.js";
import state from "./store.js";
import {addTask, changeStatus, deleteTask} from "./helpers.js";
import {generateFilters} from "./generateFilters.js";

function generateTaskList() {
    const ulTag = createTag({
        tagName: 'ul',
        tagClasses: 'todo__tasks'
    })

    const activeFilter = state.filters.filter((item) => item.isActive)[0].name
    state.tasks
        .filter((task) => {
            if (activeFilter === 'All'){
                return true
            }
            if (activeFilter === 'Active'){
                return !task.status
            }
            if (activeFilter === 'Completed'){
                return task.status
            }
        })
        .forEach(({id, name, status}) => {
        const liTag = createTag({
            tagName: 'li',
            tagClasses: ['todo__task', 'task']
        })

        const statusTag = createTag({
            tagName: 'input',
            tagClasses: 'task__status',
            tagAttrs: [
                {
                    name: 'type',
                    value: 'checkbox'
                }
            ],
            tagId: `taskName-${id}`,
            tagEvents: [
                {
                    type: 'change',
                    cb: () => {
                        changeStatus(id, state)}
                }
            ]
        })

        statusTag.checked = status

        const taskName = createTag({
            tagName: 'label',
            tagText: name,
            tagClasses: 'task__name',
            tagAttrs: [
                {
                    name: 'type',
                    value: `taskName-${id}`
                },
            ]
        })

        const clearBtn = createTag({
            tagName: 'button',
            tagText: 'Delete',
            tagAttrs: [
                {
                    name: 'type',
                    value: 'button'
                }
            ],
            tagEvents: [
                {
                    type: 'click',
                    cb: () => {
                        deleteTask(id, state);
                    }
                }
            ]
        })
        ulTag.appendChild(liTag);
        liTag.appendChild(statusTag);
        liTag.appendChild(taskName);
        liTag.appendChild(clearBtn);
    })

    return ulTag;
}

export function generateGUI() {
    const containerTag = createTag({
        tagClasses: ['container', 'todo']
    })

    const labelTag = createTag({
        tagName: 'label',
        tagText: 'todos',
        tagClasses: 'todo__title',
        tagAttrs: [{name: 'for', value: 'taskInput'}]
    })

    const inputTag = createTag({
        tagName: 'input',
        tagClasses: 'todo__input',
        tagAttrs: [
            {
                name: 'type',
                value: 'text'
            },
            {
                name: 'placeholder',
                value: 'What needs to be done?'
            },
        ],
        tagId: 'taskInput',
        tagEvents: [
            {
                type: 'keyup',
                cb: (event) => {
                    addTask(event, state)
                }
            }
        ]
    })

    containerTag.appendChild(labelTag);
    containerTag.appendChild(inputTag);
    containerTag.appendChild(generateTaskList());
    containerTag.appendChild(generateFilters())

    return containerTag;
}