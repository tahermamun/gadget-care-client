import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css'

const FooterCol = (props) => {
    return (
        <div className="col-md-2">
            <h6 className="footer-col-title">{props.footerMenuTitle}</h6>
            <ul className="list-unstyled mt-4">
                {
                    props.footerMenuItems.map((item, index) => <li key={index}><Link to={item.link} className="footer-link">{item.name}</Link></li>)
                }
            </ul>

        </div>
    );
};

export default FooterCol;