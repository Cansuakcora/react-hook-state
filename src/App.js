import {useState} from "react";

function App() {

const [name , setName] = useState('Mehmet');
const [age, setAge] = useState(20);
const [friends, setFriends] = useState(['ayse' , 'ali']);
const [obje, setObje] = useState({title:"Istanbul" , zip:474})


  return (
    <div className="App">
       <h1>adım {name}</h1>
       <h3>yaşım {age}</h3>
       <button onClick={() => setName("cansu")}>ismi değiş</button>
       <button onClick={() => setAge(24)}>yaşı değiş</button>

   <hr />

    {friends.map((friend , key) => <div key={key}>{friend}</div>)}
    <button onClick={() => setFriends([...friends , "ahmet"])}>new friend</button>
   
    <hr/>
   
    <span>{obje.title} </span>
    <span>{obje.zip}</span> <br/>
    <button onClick={() => setObje({ ...obje , title: 'Ankara'})}>obje değiş</button>

   
    </div>


  );
}

export default App;
