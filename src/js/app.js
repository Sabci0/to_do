import {createTag} from "./createTag.js";

function generateTaskList () {

}


const state = {
    tasks: [
        {
            id: 1,
            name: 'task1',
            status: false,
        },
        {
            id: 2,
            name: 'task2',
            status: true,
        },
    ],
}

// const config = {
//     tagName: 'input',
//     tagText: 'ala ma kota',
//     tagClasses: 'klasa',
//     tagId: 'dupa',
//     tagAttrs: [
//         {
//             name: 'placeholder',
//             value: 'value'
//         },
//         {
//             name: 'type',
//             value: 'tel'
//         }
//     ],
//     tagEvents:[
//         {
//             type: 'click',
//             cb: () => {console.log('work')}
//         },
//     ],
// }

function extracted() {
    const containerTag = createTag({
        tagClasses: ['todo', 'container'],

    })
    const labelTag = createTag({
        tagName: 'label',
        tagText: 'todos',
        tagClasses: 'todo__title',
        tagAttrs: [{name: 'for', value: 'taskImport'}]
    })

    const inpytTag = createTag({
        tagName: 'input',
        tagClasses: 'todo__input',
        tagAttrs: [{
            name: 'type',
            value: 'text',
        },
            {
                name: 'placeholder',
                value: 'what needs to be done?',
            }
        ],
        tagId: 'taskInput'
    })
    const ulTag = createTag({
        tagName: 'ul',
        tagClasses: 'todo__list',
    })

    const liTag = createTag({
        tagName: 'li',
        tagClasses: ['todo__item', 'task'],
    })

    const statusTag = createTag({
        tagName: 'input',
        tagClasses: 'task__status',
        tagAttrs: [
            {
                name: 'type',
                value: 'checkbox',
            },

        ],
        tagId: 'taskName'
    })

    const taskName = createTag({
        tagName: 'label',
        tagText: 'task1',
        tagClasses: 'task__name',
        tagAttrs: [
            {
                name: 'for',
                value: 'taskName'
            }
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
        ]
    })


    containerTag.appendChild(labelTag);
    containerTag.appendChild(inpytTag);
    containerTag.appendChild(ulTag);

    ulTag.appendChild(liTag);
    liTag.appendChild(statusTag);
    liTag.appendChild(taskName);
    liTag.appendChild(clearBtn);

    document.getElementById('app').appendChild(containerTag);
}




