import React from 'react';

const Card = ({name,email,id} ) => {
    return(
        <div className= 'tc bg-light-blue dib br3 pa3 ma2 grow shadow-5 bw2'>
            <img alt='robots' src={ `https://robohash.org/${id}?200*200`} />
            <div>
             <h2>{name}</h2> 
             <p>{email}</p>  
            </div>
        </div>
    );
}

export default Card;