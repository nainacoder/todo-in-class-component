// import React,{Component} from  "react"
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       data:[],
//     };
//   }
//   handleNameChange = (e) => {
//     this.setState({
//       name: e.target.value
//     });
//     console.log(this.state.name);
//   };
//  handleDataChange=()=>{
//    this.setState({

//       data:[this.state.name]

//    })
//  }

//   render(){
//     return (
//       <div className="App">
//         <input type="text" onChange={this.handleNameChange} />
//         <button onClick={this.handleDataChange} >Add</button>
//         <br />
//        {/* {this.state.name} */}
//        {data.map((item)=> <h1>{item}</h1>)}
//       </div>
//     );
//   }
// }
import React from "react";
import "./App.css";
import ListItem from "./ListItem";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

library.add(faTrash);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {
        text: "",
        id: "",
      },
      items: [],
    };
    // this.handleInput=this.handleInput.bind(this);
    // this.handleAddItem=this.handleAddItem.bind(this);
  }
  handleInput = (e) => {
    this.setState({
      currentItem: {
        text: e.target.value,
        id: Date.now(),
      },
    });
    console.log(this.state.currentItem.text, this.state.currentItem.id);
  };
  handleAddItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          id: "",
        },
        
      });
    }
  };
  deleteItem = (id) => {
    const filterItems = this.state.items.filter(item => 
      item.id !== id);
    this.setState({
      items:filterItems,
    })
  }
  setUpdate=(text,id)=>{
    const items=this.state.items;
    items.map((item)=>{
      if(item.id===id){
        item.text=text
      }
    })
    this.setState({
      items:items
    })

  }
  render() {
    return (
      <div className="App">
        {/* <header> */}
        <form id="to-do-form">
          <input
            type="text"
            placeholder="type here"
            value={this.state.currentItem.text}
            onChange={this.handleInput}
          />
          <button type="submit" onClick={this.handleAddItem}>
            ADD
          </button>
        </form>
        <br />
        <ListItem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        {/* </header> */}
      </div>
    );
  }
}

export default App;

// if we use functionName(){
//   ...data or setState
// }
// and pass the function to input or button as onChange={this.functionName}
// and onClick={this.functionName} it will throw error, TypeError,saying cannot read property of this or setState
// so we need to bind the functionName to this. inside constructor
// constructor(props){
//super(props);
//this.state={
//}
// this.functionName=this.functionName.bind.(this)
//}
