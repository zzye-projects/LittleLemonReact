import restaurantfood from '../assets/restauranfood.jpg';
import Button from './Button';
import './Hero.css';

const Hero = () => (
    <section id='hero-section'>
        <article>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
            <Button>Reserve a Table</Button>
        </article>
        <img src={restaurantfood} alt='restaurant food'/>
    </section>
);

export default Hero;