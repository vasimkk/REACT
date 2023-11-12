import logo from './logo.svg';
import './App.css';

function App() {
  const user = {
    id:1,
    firstName:'vasim',
    lastName:'kureshi'
  }
  const getSearchQuery =(event)=>{
    console.log(event.target.value);
  }
  

  return (
    <div className="App">
      <h2>Id:{user.id}</h2>
      <h2>firstName:{user.firstName}</h2>
      <h2>lastName:{user.lastName}</h2>
      
      <input placeholder='Enter search query...' onChange={($event)=>getSearchQuery($event)}>
        </input>
     </div>   

  );
}

export default App;
