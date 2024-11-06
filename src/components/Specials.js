import Button from './Button';
import Card from './Card';
import './Specials.css';
import greeksalad from '../assets/greek salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemondessert from '../assets/lemon dessert.jpg';

const special_items = [
    { 
        'title': 'Greek Salad',
        'price': '12.99',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
        'img_source': greeksalad,
        'img_alt': 'Greek Salad'    
    }, {
        'title': 'Bruschetta',
        'price': '5.99',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
        'img_source': bruchetta,
        'img_alt': 'Bruchetta'    
    }, {
        'title': 'Lemon Dessert',
        'price': '5.00',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.',
        'img_source': lemondessert,
        'img_alt': 'Lemon Dessert'    
    }];

const Specials = () => (
    <section id='specials-section'>
        <div>
            <h1>This week's specials!</h1>
            <Button>Online Menu</Button>
        </div>
        <div>
            { special_items.map((item,index) => (
                <Card key={index} {...item}/>))
            }
        </div>
    </section>
);

export default Specials;