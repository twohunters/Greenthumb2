//slide 6

import './howtoModule.css'
import {Button} from 'react-bulma-components';


const HowToModule = props => {
    if (!props.show){
        return null
    }

 
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">How To </h4>
                </div>
                <div className="modal-body">
                <ol>
                <li>Sign Up</li>
                <li>Click "Create a Garden"</li>
                <li>Choose your garden size</li>
                <li>Select your plants</li>
                <li>View your garden</li>
                <li>Don't forget to keep an eye on the weather!</li>
                    </ol>
                </div>
                <div className="modal-footer">
                    <Button onClick={props.onClose}  className="button ">Close</Button>
                </div>
            </div>
        </div>
        
    )
}
export default HowToModule