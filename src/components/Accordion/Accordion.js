import React, {useState} from 'react';
import { AccordionStyled, AccordionItemStyled } from './Accordion.styled'

const Accordion = (props) => {

    const [activeItem, setActiveItem] = useState(props.items[0]);

    let accordionItems = props.items.map((item, i)  => {
        console.log(i)
        return (
            <AccordionItemStyled onClick={() => setActiveItem(item)} className={activeItem === item && "active"} key={i}>
                <div className="accordion__header">
                    <span className="accordion__number">{item.number}</span>
                    <h2>{item.title}</h2>
                </div>
                <div className="accordion__content">
                    <h2>{item.title}</h2>
                    <p>
                        {item.content}
                    </p>
                </div>
            </AccordionItemStyled>
        );
    });


    return (
        <AccordionStyled>
            { accordionItems }
        </AccordionStyled>
    );
};

export default Accordion;