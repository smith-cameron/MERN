import React from 'react';

const Header = (props) => {
    
    return (
        <div className='Header'>
            <ul className="nav">
                <li>
                    <a className="link" href="localhost:3000">Home</a>
                </li>
                <li>
                    <a className="link" href="localhost:3000">About</a>
                </li>
                <li>
                    <a className="link" href="localhost:3000">Contact</a>
                </li>
            </ul>
        </div>
    )
}
export default Header;