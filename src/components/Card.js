import './Card.css';
import basket from '../assets/Basket.svg';

const Card = ({img_source, img_alt, title, price, description, link}) => (
    <section className='card-section'>
        <img src={img_source} alt={img_alt}/>
        <article>
            <span>
                <h3>{title}</h3>
                <h3 className='price'>${price}</h3>
            </span>
            <p>{description}</p>
            <a href={link}>
                <h3>Order a delivery</h3>
                <img src={basket} alt='Basket Icon'/>
            </a>
        </article>
    </section>
);

export default Card;