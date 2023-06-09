import React, {useState} from 'react';
import './Question.scss'

function AccordionItem({isClicked, title, describe}) {
    const [open, setOpen] = useState(isClicked);

    return (
        <div className='accordion__item'>

            <div className='accordion__title--button'>
                <div className="accordion__title" >
                    <h3>{title}</h3>
                </div>
                <button className="accordion__button" style={{ transform: open ? 'rotate(0deg)' : '' }} onClick={() => setOpen(!open)}></button>
            </div>
            {open && (
                <div className="accordion__content">
                    {describe}
                </div>
            )}
        </div>
    );
}

export default AccordionItem;
