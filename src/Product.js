
import React from 'react';

export const Product = (props) =>
            <li key={props.product.id}>
                <button onClick={() => props.onClick()}>{props.product.title}</button>
                {props.expanded && <p>{props.product.description}</p>}
            </li>;