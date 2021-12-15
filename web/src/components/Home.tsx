import React from 'react'
import { Link } from 'react-router-dom'

interface Props {

}

const Home: React.FC<Props> = () => {
    return (
        <div>HOME
            <div><Link to="/login">Login</Link></div>
        </div>
    )
}

export default Home
