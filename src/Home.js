import { useState } from "react";
const Home = () => {
    const [pers,setPers] = useState([{Name : 'Aayush', Class : 90 , ID : 1},
                 {Name : 'Ashutosh', Class : 100 , ID : 2},
                {Name : 'Mayank', Class : 95 , ID : 3}]);
    
    return ( 
        <div className="home">
        {pers.map((per)  => (
            <div className="pers-preview" key = {per.ID}>
                <h2>{per.Name}</h2>
                <p>with cgpa { per.Class }</p>
            </div>
        ))}
        </div>
        
     );
     
}
 
export default Home;