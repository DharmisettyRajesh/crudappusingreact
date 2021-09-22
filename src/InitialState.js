export const initialState={
    user:'Guest user',
    token:null
}
const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'SETUSER':{
            return{
                ...state,
                user:action.user,
                token:action.token
            }
        }
        default:

            return{ user:'hello'}
            
    }
}
export default reducer;
