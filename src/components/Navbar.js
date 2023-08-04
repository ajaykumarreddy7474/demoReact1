
import React,{ useState } from "react";
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css';
import  Dropdown from './Dropdown';



function Navbar() {

    const [click, setClick]=useState(false);
    const [dropdown, setDropdown]=useState(false);
    const handleClick =()=>setClick(!click);
    const closeMobileMenu = ()=>setClick(false);

    const onMouseEnter =()=>{
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(true)
        }
    };

    const onMouseLeave =()=>{
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else{
            setDropdown(false)
        }
    };
        return (
        <div>


        <nav className='navbar'>
                <Link to='/' className='navbar-logo'> <span class="material-symbols-outlined">
                more_up
                </span>recRoute</Link>
                <div className="menu-icon" onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'><Link to='/Onehome' className="nav-links" onClick={closeMobileMenu}>DISCOVER</Link></li>
                    <li className='nav-item'><Link to='/Contact' className="nav-links" onClick={closeMobileMenu}>CONTACT US</Link></li>
                    <li className="nav-item" onMouseEnter={onMouseEnter}  onMouseLeave={onMouseLeave}> <Link to='/Services' className="nav-links" onClick={closeMobileMenu}>SERVICES <i className="fas fa-caret-down"></i></Link> {dropdown && <Dropdown />}</li>
                    <li className='nav-item'><Link to='/Button' className="nav-links-mobile" onClick={closeMobileMenu}>SIGN UP</Link></li>
                </ul>
                <Button />
                </nav>
             </div>
        );
    }
export default Navbar;