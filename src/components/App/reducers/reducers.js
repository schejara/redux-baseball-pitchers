
const ADDPITCHERS = 'ADDPITCHERS';
const ADDCATCHERS = 'ADDCATCHERS';

const pitcher = (state = [], action) => {
if(action.type === ADDPITCHERS){
   return state = [...state, action.payload]

}
return state

}

const catcher = (state = [], action) => {
    if(action.type === ADDCATCHERS){
       return state = [...state, action.payload]
    
    }
    return state
    
    }



let reducers = {
   pitcher :  pitcher,
   catcher :catcher

    
}




export default reducers