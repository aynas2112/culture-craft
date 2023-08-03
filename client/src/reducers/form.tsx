const formReducers = (form=[], action) =>{
    switch (action.type) {
        case 'CREATE':
            return [...form, action.payload];
        default:
            return form;
    }
}

export default formReducers;