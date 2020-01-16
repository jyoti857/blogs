import CreateDataContext from './createDataContext';


const blogReducer = (state, action) =>{
    switch(action.type){
        case 'add_blogpost':
            return [...state, {title: `blogpost #${action.payload + state.length+1 }`}]
        default: state;
    }
}



    const addBlogpost = dispatch =>{
        return () =>{
            dispatch({type: 'add_blogpost', payload: "value"})
        }
    }


export const {Context, Provider}  = CreateDataContext(
        blogReducer, 
        {addBlogpost}, 
        []
    );