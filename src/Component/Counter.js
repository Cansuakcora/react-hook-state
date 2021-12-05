import {useState} from 'react'

 function Counter() {

   const [sayac,setSayac]=useState(0);
   const [form, setform] = useState({firstname:'' , lastname:''});

   //sayac 1 azaltmak için func
   const func1 = () =>{
    setSayac(sayac -1)
   }

   //sayac 1 artırmak için func
   const func2 = () =>{
    setSayac(sayac +1)
   }
  
   //value degistirmek icin fonc
   const funcinput = (e) =>{
    setform({...form , [e.target.name]:e.target.value});
  }

    return (
        <div>
            {/* sayac */}
           <p>{sayac}</p>
           <button onClick={func1}>-</button>
           <button onClick={func2}>+</button>
   
           <br/><br/>
           {/* input value değer değiştirme */}

             <input name='firstname'    value={form.firstname}    onChange={funcinput}></input>
             <input name='lastname' value={form.lastname} onChange={funcinput}></input>
             {form.firstname} {form.lastname}
           
        </div>
    )
}

export default Counter;
