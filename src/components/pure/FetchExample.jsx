import React, { useEffect, useState } from "react";
import { getAllPagedUsers, getAllUsers, getUserDetails, login } from "../../services/fetchService";
import { cleanup } from "@testing-library/react";

const FetchExample = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [totalUsers, setTotalUsers] = useState(12);
    const [pages, setPages] = useState(2);
    const [userPerPage, setUserPerPage] = useState(6)

    useEffect(_ => {
        obtainUsers();
    }, [])

    const obtainUsers = () => {

        getAllUsers()
        .then(response => {
           /* if (response.status === 200 && response.ok) {
                response.json()
                .then(body => {
                    console.log('All Users', body.data)
                    setUsers(body.data);
                }).catch(error => console.log(`Something went wrong: ${error}`))
            }*/
            console.log('All Users', response.data)
            setUsers(response.data);
            setTotalUsers(response.total)
            setUserPerPage(response.per_page)
            setPages(response.total_pages)
        })
        .catch(error => {
            alert(`Error while retreiving the users: ${error}`)
        })
        .finally(_ => {
            console.log('Ended obtaining users:')
            console.table(users)
        })
    }

    const obtainPagedUsers = (page) => {
        
        getAllPagedUsers(page)
        .then(response => {
           /* if (response.status === 200 && response.ok) {
                response.json()
                .then(body => {
                    console.log('All Users', body.data)
                    setUsers(body.data);
                }).catch(error => console.log(`Something went wrong: ${error}`))
            }*/
            console.log('All Users', response.data)
            setUsers(response.data);
            setTotalUsers(response.total)
            setUserPerPage(response.per_page)
            setPages(response.total_pages)
        })
        .catch(error => {
            alert(`Error while retreiving the users: ${error}`)
        })
        .finally(_ => {
            console.log('Ended obtaining users:')
            console.table(users)
        })
    }

    const obtainUserDetails = (id) => {
        getUserDetails(id)
        .then(response => {
            /* if (response.status === 200 && response.ok) {
                 response.json()
                 .then(body => {
                     console.log('All Users', body.data)
                     setUsers(body.data);
                 }).catch(error => console.log(`Something went wrong: ${error}`))
             }*/
             console.log('All Users', response.data)
             setSelectedUser(response.data);
         })
         .catch(error => {
             alert(`Error while retreiving the users: ${error}`)
         })
         .finally(_ => {
             console.log('Ended obtaining users:')
             console.table(users)
         })
    }

    const auth = () =>{
        login('eve.holt@reqres.in', 'cityslicka')
        .then(response => {
            /* if (response.status === 200 && response.ok) {
                 response.json()
                 .then(body => {
                     console.log('All Users', body.data)
                     setUsers(body.data);
                 }).catch(error => console.log(`Something went wrong: ${error}`))
             }*/
             console.log('token', response.token)
             sessionStorage.setItem('token', response.token)
         })
         .catch(error => {
             alert(`Error while retreiving the users: ${error}`)
         })
         .finally(_ => {
             console.log('Ended login users, navigate to home')
         })
    }
    

    return(
        <div>
            {/*Button to simulte login */}
            <button onClick={auth}>Auth User</button>
            <h2>
                Users: 
            </h2>
            { users.map((user, index)=> 
                (<p key={index} onClick={() => obtainUserDetails(user.id)}>
                    {user.first_name} {user.last_name}
                </p>)  
            )}
            <p>Showing {userPerPage} users of {totalUsers} in total</p>            
            <button onClick={() => obtainPagedUsers(1)}>
                1
            </button>
            <button onClick={() => obtainPagedUsers(2)}>
                2
            </button>
            <div>
                { selectedUser !=null? (
                <div>
                    <h3>
                        User details
                    </h3>
                    <p>Name: {selectedUser.first_name}</p>
                    <p>Last Name: {selectedUser.last_name}</p>
                    <p>email: {selectedUser.email}</p>
                    <img src={selectedUser.avatar} style={{height: '150px', width: '150px'}} alt="Avatar" />
                </div>
                ):
                (<h6>Please click on a User to see its details</h6>)}
            </div>
        </div>
    )
}

export default FetchExample;