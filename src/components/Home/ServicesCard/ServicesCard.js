import React from 'react';
import './ServicesCard.css'
import { useSpring, animated } from 'react-spring'
import { useHistory } from 'react-router';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const ServicesCard = ({ service }) => {
    const { _id, serviceTitle, serviceDescription, servicePrice, imageURL } = service
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    const history = useHistory()
    const handleBuyNow = (productId) => {
        history.push(`/payment/${productId}`)
    }
    return (
        <div className='service-card mt-5'>
            <animated.div
                class="service-card-icon"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <img src={imageURL} alt="" />
            </animated.div>
            <div className='mt-3'>
                <h4 className='service-title'>{serviceTitle}</h4>
                <p className='service-description'>{serviceDescription}</p>
                <h5 className='service-price'>${servicePrice}</h5>
                <button className="global-btn-style" onClick={() => handleBuyNow(_id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default ServicesCard;
