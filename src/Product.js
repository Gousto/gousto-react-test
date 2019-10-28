
import React from 'react';

export const Product = (props) =>
            <li>
                <button onClick={() => props.onClick()}>{props.product.title}</button>
                {props.expanded && <p>{props.product.description}</p>}
            </li>;