const initialState = [
    {
        id: 1,
        name: 'Father-in-law',
        squares: 45,
        games: 3
    },
    {
        id: 2,
        name: 'Toronto',
        squares: 45,
        games: 3
    },
    {
        id: 3,
        name: 'Improv',
        squares: 45,
        games: 3
    }
];

export default function templates(state = initialState, action) {
    debugger;
    switch(action.type) {
        case 'TEMPLATES.ADD':
            return [
                {
                    id: state.reduce((maxID, template) => Math.max(template.id, maxID), -1) + 1,
                    name: action.name,
                    games: 0,
                    squares: 0
                },
                ...state
            ]
        default:
            return state
    }
}