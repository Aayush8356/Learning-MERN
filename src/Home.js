import { useState } from "react";
const Home = () => {
    let list = ['Apoorv','Mayank','Yash','Ashutosh'];
    const [name,setName] = useState('Aayush');
    const [age,setAge] = useState(10);
    const clickHandle = () =>
    {
        setName(list[Math.floor(Math.random()*4)]);
        setAge(Math.floor(Math.random()*10));
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p> {name} {age} </p>
            <button onClick={clickHandle}>click me</button>
        </div>
        
     );
     
}
 
export default Home;