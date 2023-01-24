import createTag from "./createTag.js";
import state from "./store.js";
import {addTask, changeStatus, deleteTask} from "./helpers.js";

function generateTaskList() {
    const ulTag = createTag({
        tagName: 'ul',
        tagClasses: 'todo__tasks'
    })

    state.tasks.forEach(({id, name, status}) => {
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

    return containerTag;
}