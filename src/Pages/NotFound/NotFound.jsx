import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => {
    return ( 
        <div className="notFound">
            <h1>404, This is not Found. </h1>
            <p><Link to='/home'>Back Home</Link></p>
        </div>
     );
}
 
export default NotFound;