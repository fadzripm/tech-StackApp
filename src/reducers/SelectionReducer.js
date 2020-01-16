export default (state = null, action) => {
    console.log('HERE AGAIN', action)
    switch (action.type) {
        case 'select_library':
            return state === action.payload ? null : action.payload;
        default:
            return state;
    }
}