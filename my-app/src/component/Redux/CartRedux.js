import {configureStore,createReducer,createAction, createSlice} from "@reduxjs/toolkit"

var InitState = {CartState:{totalprice:0,totalquantity:0,array:[]},HeartState:{totalquantity:0},LoginFormState:false,UserState:{username:'',login:false}};

const UserSlice = createSlice({name:'USERSLICE'
,initialState:InitState.UserState
,reducers:{
    UPDATEUSER:(state,action) =>{
        state.username = action.payload.username;
        state.login = action.payload.login;
        return state;
    }
}})

const CartSlice = createSlice({name: 'CARTSLICE',
    initialState: InitState.CartState,
    reducers: {
        INCREMENTCART: (state, action) => {
            var newArray = [];
            var totalquantitynew = 0;
            var totalpricenew = 0;
                                
            var checkexist  = state.array.find((item) =>{
                return item.id == action.payload.id;
            });

            if(!checkexist){
                state.array = [...state.array,action.payload];
                newArray = state.array.map((item) =>{
                totalquantitynew += item.quantity;
                totalpricenew += item.price;
                return item;
                 });
                                    
             }
            else{
                 newArray = state.array.map((item) =>{
                if(item.id ==  action.payload.id){
                        item.price += action.payload.price;
                    item.quantity +=  action.payload.quantity;
                }
                totalquantitynew = state.totalquantity + action.payload.quantity;
                totalpricenew = state.totalprice +  action.payload.price;
                return item;
             });
            }
            state.totalprice = totalpricenew;
            state.totalquantity = totalquantitynew;
            state.array = newArray;
            console.log(state.totalquantity);
            return state;
        },
        DECREMENTCART:(state, action) =>{
            var checkexist  = state.array.find((item) =>{
                return item.id == action.payload.id;
            });
            if(checkexist){
                var newArray = [];
                newArray = state.array.map((item) =>{
                    if(item.id ==  action.payload.id){
                            item.price -= action.payload.price;
                            item.quantity -=  action.payload.quantity;
                    }
                    state.totalquantity -= action.payload.quantity;
                    state.totalprice -= action.payload.price;
                    return item;
                 });
                 state.array = newArray;
            }
            return state;
        }
    }
}
);

const Heartslice = createSlice({name: 'HEARTSLICE',
    initialState: InitState.HeartState,
    reducers: {
        INCREMENTHEART: (state, action) => {
           return {
                totalquantity:state.totalquantity + action.payload.quantity
           };
        }
    }
}
);


const LoginFormslice = createSlice({name: 'LOGINFORMSLICE',
    initialState: InitState.LoginFormState,
    reducers: {
        SETLOGINFORM:(state,action) =>{
            return action.payload.ModalState;
        }
    }
}
);



 const CartRedux = configureStore({
     reducer:{Cart:CartSlice.reducer,Heart:Heartslice.reducer,LoginForm:LoginFormslice.reducer,User:UserSlice.reducer}
 });

export const CartAction  = CartSlice.actions;
export const HearAction  = Heartslice.actions;
export const LoginFormAction = LoginFormslice.actions;
export const UserAction = UserSlice.actions;
export default CartRedux;