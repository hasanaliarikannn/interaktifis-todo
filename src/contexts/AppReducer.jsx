export default (state, action) => {
    switch(action.type) {
        case 'JOB_DONE':
            return ({
                ...state,
                items: state.items.filter((item => item.id!==action.payload))
            })
        case 'ADD_JOB':
            return({
                ...state,
                items: [action.payload, ...state.items]
            })
        
        case 'MAKE_DONE':
            return({
                ...state,
                items: state.items.map((item => item.id===action.payload? {...item, done:!item.done}:item))
            })

            
        default:
            return state
    }
}