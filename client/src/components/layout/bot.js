import React,{Component} from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

class Bot extends Component {
    render(){
        return (
            <div className="container">
            {/* <div className="fb-customerchat"
                pageId="2229029307312970"
                ref="7565fff798a57b777aa32985f975d5925840d5983400170871"
                logged_in_greeting="<GREETING_MESSAGE_FOR_LOGGED_IN_USERS>"
                logged_out_greeting="<GREETING_MESSAGE_FOR_LOGGED_OUT_USERS>">
            </div> */}
            <MessengerCustomerChat
                pageId="2229029307312970"
                appId="2015199145383303"
                htmlRef="7565fff798a57b777aa32985f975d5925840d5983400170871"
            />
            </div>
        )
    }
}

export default Bot;
