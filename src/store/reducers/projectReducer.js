
const initState = {
    projects: [
        {id:1, title: "dbhejkw", content: "fvwhjefgj"},
        {id:2, title: "dbfjwhejkw", content: "fvwhjefgj"},
        {id:3, title: "dbhefghjkw", content: "fvwhjefgj"},
    ]
};
const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT' : 
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
        return state;
    }
};

export default projectReducer;