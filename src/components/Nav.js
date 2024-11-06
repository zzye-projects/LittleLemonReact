import logo from '../assets/Logo.svg';
import './Nav.css';

const Nav = () => (
    <section id='nav-section'>
    <img src={logo} alt='Company Logo'/>
    <nav>
        <ul>
            <li key='home'><a href='/'>Home</a></li>
            <li key='about'><a href='/about'>About</a></li>
            <li key='menu'><a href='/menu'>Menu</a></li>
            <li key='reservations'><a href='/booking'>Reservations</a></li>
            <li key='order-online'><a href='/order'>Order Online</a></li>
            <li key='login'><a href='/login'>Login</a></li>
        </ul>
    </nav>
    </section>
)
export default Nav;