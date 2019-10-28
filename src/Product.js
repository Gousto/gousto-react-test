
import React from 'react';

export const Product = (props) =>
            <li>
                <button onClick={() => props.onClick()}>{props.product.title}</button>
                {props.expanded && <p data-test="product-description">{props.product.description}</p>}
            </li>;