import React, {useState} from 'react';
import { AccordionStyled, AccordionItemStyled, AccordionHorizontalStyled } from './Accordion.styled'

const AccordionItems = (props) => {

    const [activeItem, setActiveItem] = useState(props.items[0]);

    return props.items.map((item, i)  => {
        return (
            <AccordionItemStyled key={i} onClick={() => setActiveItem(item)} className={activeItem === item && "active"} >
                <div className="accordion__header">
                    <span className="accordion__number">{item.number}</span>
                    <h2>{item.title}</h2>
                </div>
                <div className="accordion__content">
                    <span className="accordion__number">{item.number}</span>
                    <h2>{item.title}</h2>
                    <p>
                        {item.content}
                    </p>
                </div>
            </AccordionItemStyled>
        );
    });
};

const Accordion = (props) => {
    return (
        <AccordionStyled>
            <AccordionItems items={props.items}></AccordionItems>
        </AccordionStyled>
    );
};

export const AccordionHorizontal = (props) => {
    return (
        <AccordionHorizontalStyled>
            <AccordionItems items={props.items}></AccordionItems>
        </AccordionHorizontalStyled>
    );
}

export default Accordion;