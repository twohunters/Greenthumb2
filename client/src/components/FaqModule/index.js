//5
import React, {useState} from "react";
import './faqModule.css'
import {Button} from 'react-bulma-components';
const FaqModule = props => {
    //Makes the accordian style UI 
    const [isActive1, setIsActive1] = useState(false); 
    const [isActive2, setIsActive2] = useState(false); 
    const [isActive3, setIsActive3] = useState(false); 
    if (!props.show){
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">FAQs</h4>
                </div>
                <div className="modal-body">
                <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive1(!isActive1)}>
        <div>How do you get your plant information?</div>
                 <div>{isActive1 ? '-' : '+'}</div>
             </div>
                 {isActive1 && <div className="accordion-content">Our developers have create our plant database. We have research these plants extensively to ensure our information is accurate</div>}
                </div>
                <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive2(!isActive2)}>
        <div>Can I add to yourplant database?</div>
                 <div>{isActive2 ? '-' : '+'}</div>
             </div>
                 {isActive2 && <div className="accordion-content">You sure can! To add to our plant database you can use the "Add to Our Plant DB" form. You can acces this from our sidebar menu.</div>}
                </div>
                <div className="accordion-item">
          <div className="accordion-title" onClick={() => setIsActive3(!isActive3)}>
        <div>How do I create a garden?</div>
                 <div>{isActive3 ? '-' : '+'}</div>
             </div>
                 {isActive3 && <div className="accordion-content">To create a garden, select the "Create a Garden" option from the sidebar menu! You may also view our "How To" to see a full list of steps.</div>}
                </div>
                </div>
                <div className="modal-footer">
                    <Button onClick={props.onClose} align='right' className="button ">Close</Button>
                
            </div>
        </div>
        </div>
        
    )
}
export default FaqModule