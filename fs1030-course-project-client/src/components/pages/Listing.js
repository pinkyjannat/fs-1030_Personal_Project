import React, { useEffect, useState } from 'react'
import { Container, Row, Table, Button } from 'reactstrap'
import parseJwt from '../../helpers/authHelper'
import { useHistory } from "react-router-dom";


const Listings = () => {
    let history = useHistory();
    const token = sessionStorage.getItem('token')
    const user = parseJwt(token).username
    const [listing, setListing] = useState([])
    const logout = event => {
        event.preventDefault()
        sessionStorage.removeItem('token')
        history.push("/login")
    }
    const entry_email =  sessionStorage.getItem('entry_email') || '';
    useEffect(() => {
        const getData = async () => {
            const response = await fetch('http://localhost:5500/api/entities', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({entry_email: entry_email})
            })
            const data = await response.json()
            if(data) {
                setListing(data.data)
            }
           
        }
        getData()
       
    }, [token])
    return (
        <Container>
            <Row>
                <h1>Listings for user:  {user}</h1>
            </Row>
            <Table responsive>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {listing.length === 0 &&
                        <tr><td colSpan="4" className="text-center"><i>No listings found</i></td></tr>
                    }
                    {listing.length > 0 &&
                        listing.map(entry => <tr><td>{entry.entry_name}</td><td>{entry.entry_email}</td><td>{entry.entry_phone}</td><td>{entry.entry_message}</td></tr>)
                    }
                </tbody>
            </Table>
        <Row className="my-5">
            <Button onClick={logout} color="primary">Logout</Button>
        </Row>
        </Container>
    )
}

export default Listings