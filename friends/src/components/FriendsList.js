import React, { useState, useEffect } from 'react';
import Friend from './Friend'
import { axiosWithAuth } from '../utils/axiosWithAuth';

const FriendsList = () => {

    const [friends, setFriends] = useState([])
    const [values, setValues] = useState({
        name: "",
        age: "",
        email: "",
    });

    useEffect(() => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
            .post('/api/friends', values)
            .then(res => {
                setFriends(res.data)
            })
            .catch((error) => {
                console.log('Post error ', error);
            })
        setValues({
            name: "",
            age: "",
            email: "",
        })
    };

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <label>Name</label>
                        <div>
                            <input
                                name="name"
                                type="username"
                                onChange={handleChange}
                                value={values.name}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Age</label>
                        <div>
                            <input
                                name="age"
                                type="number"
                                onChange={handleChange}
                                value={values.age}
                            />
                        </div>
                    </div>
                    <div>
                        <label>Email</label>
                        <div>
                            <input
                                name="email"
                                type="email"
                                onChange={handleChange}
                                value={values.email}
                            />
                        </div>
                    </div>
                    <button type="submit">Add new friend</button>
                </form>
            </div>
            {friends.map((friend, id) => {
                return (
                    <Friend name={friend.name} age={friend.age} email={friend.email} key={id} />
                )
            })}
        </div>
    )
}

export default FriendsList;
