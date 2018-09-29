import React from 'react';

import './DisplayUsers.css';
import female from '../../images/female-placeholder.png';
import male from '../../images/placeholder-profile-male.jpg';

const DisplayUsers = (props) => {


    return (

        <div className='container'>
            {props.users.map(el => {
                var img = male;
                if (el.gender === 'female') {
                    img = female;
                }
                return (
                    <div className="card col-3 user" key={el.id}>
                        <img className="card-img-top" src={img} alt="placeholder" />
                        <div className="card-body">
                            <p id={el.id} className="card-text name" onClick={props.clicked}>{`Name: ${el.firstName} ${el.surname}`}</p>
                            <p className="card-text">{`Age: ${el.age}`}</p>
                            <p className="card-text">{`Num of friends: ${el.friends.length}`}</p>
                        </div>
                    </div>
                )

            })}
        </div>


    )
}

export default DisplayUsers;