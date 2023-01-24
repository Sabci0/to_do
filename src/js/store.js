const state = {
    tasks: [
        {
            id: 1,
            name: 'task1',
            status: false
        },
        {
            id: 2,
            name: 'task2',
            status: true
        },
    ],
    filters:[
        {
            name: 'All',
            isActive: false,
        },
        {
            name: 'Active',
            isActive: true,
        },
        {
            name: 'Completed',
            isActive: false,
        },
    ]
}

export default state;