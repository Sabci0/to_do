import createTag from "./createTag.js";
import state from "./store.js";
import {setFilter} from "./helpers.js";


export function generateFilters() {
    const boxFilters = createTag({
        tagClasses: "filters",
    });

    const counter = state.tasks.filter((task) => !task.status).length

    const counterTag = createTag({
        tagName: 'span',
        tagClasses: 'filter',
        tagText: `${counter} item${counter > 1 ?"s": "" } left`
    })
    boxFilters.appendChild(counterTag);

    state.filters.forEach((btn) => {
        const classList = ['filters__btn']

        if (btn.isActive) {
            classList.push('filters__btn--checked')
        }
            const btnTag = createTag({
                tagName: 'button',
                tagClasses: classList,
                tagText: btn.name,
                tagEvents: [{
                    type: 'click',
                    cb: () => {
                        setFilter(btn, state)
                    }
                }],
            })
        boxFilters.appendChild(btnTag);
    })
        return boxFilters
}
