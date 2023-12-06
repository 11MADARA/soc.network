import DialogsReducer from "./dialogsPageReducer";
import ProfileReducer from "./profilePageReducer";


let store={ 
  _state:{
  profilePage:{
      posts:[
          {content:"hello guyZ",likes:"15"},
          {content:"Durex xuynya",likes:"100"},
          {content:"BimBimBamBAm",likes:"20"}
        ],
      newPostText:"add new post here =>"
  },
  dialogsPage:{
      messages:[
          {id:"1",text:"aye dzamal pirvet"},
          {id:"2",text:"privet nishiy"},
          {id:"3",text:"aye"}
        ],
      newMessageText:"",
      dialogs:[
          {id:"1",name:"Dzamal",avaImg:"https://ih1.redbubble.net/image.4611158023.8619/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg"},
          {id:"2",name:"Durex",avaImg:"https://bazarstore.az/cdn/shop/products/30190439_d292fe14-d4a7-452a-b3e2-06ebe16e4a59.jpg?v=1693524568"},
          {id:"3",name:"Akbaar",avaImg:"https://www.culturalindia.net/iliimages/Akbar-the-Great-ili-85-img-1.jpg"},
          {id:"4",name:"djongdjong",avaImg:"https://english.ckgsb.edu.cn/knowledges/wp-content/uploads/2023/07/7.png"},
          {id:"5",name:"qeyretsiz",avaImg:"https://www.zoo-ekzo.com/sites/default/files/images/osel.jpg"}
        ]
      }
    },
    getState(){
        return this._state;
    },
    subscriber(observer){
      this._callSbscriber=observer;
    },
    _callSbscriber(){
      console.log("state changed");
    },

    dispatch(action){
      this._state.profilePage=ProfileReducer(this._state.profilePage,action);
      this._state.dialogsPage=DialogsReducer(this._state.dialogsPage,action);
      this._callSbscriber(this._state);
    }

  }
      
  export default store;