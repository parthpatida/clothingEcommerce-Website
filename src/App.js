import logo from './logo.svg';
import './App.css';
import {Component, useEffect, useState} from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './component/search-box/search-box.component';


const App=()=>{
  console.log('render')
  const [searchfield,setearchfield]=useState('')
  const [monsters,setmonsters]=useState([])
  const [stringfield,setstringfield]=useState('')
  const[filteredmonsters,setfilteredmonsters]=useState(monsters)
  useEffect(()=>{
    
   fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((users)=>setmonsters(users));
  },[])

  useEffect(()=>{
    const newfilteredmonsters=monsters.filter((monster)=>{
  return monster.name.toLocaleLowerCase().includes(searchfield);
});
    setfilteredmonsters(newfilteredmonsters)
  },[searchfield,monsters])

  console.log({searchfield})
  const onSearchChange=(event)=>{ 
    const searchfieldstring=event.target.value.toLocaleLowerCase()
    console.log(searchfieldstring)
  setearchfield(searchfieldstring)
  
}

// const filteredmonsters=monsters.filter((monster)=>{
//   return monster.name.toLocaleLowerCase().includes(searchfield);
// })

  return(
  <div className='App'>
    <h1 className='App-title'>MONSTER ROLODEX</h1>
    <SearchBox onChangeHandler={onSearchChange}
      className='monsters-search-box'
      placeholder='search monsters'/>

    <CardList monsters={filteredmonsters}/>

  </div>

  )
}
/*
class App extends Component{
  constructor(){
    super();
    this.state={
      monsters:[],
      searchfield:'',
      id:{}
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>this.setState(
      ()=>{
        return {monsters:users};
      },
      ()=>{
        console.log(users);
      }
    ))
  }
 
  onSearchChange=(event)=>{
    
      const searchfield=event.target.value.toLocaleLowerCase()
      this.setState(()=>{
        return {searchfield:searchfield}
      })
    
  }
  render(){
    const {onSearchChange}=this
   const {monsters,searchfield}=this.state;
    const filteredmonsters=monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchfield);
    })
    return (
      <div className="App">
      <SearchBox onChangeHandler={onSearchChange}
      className='monsters-search-box'
      placeholder='search monsters'/>
   
      <CardList monsters={filteredmonsters}/>
      </div>
    );
  }
}

export default App;
*/
export default App;
