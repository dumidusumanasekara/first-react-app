import React from "react";

class ContactDetails extends React.Component{

    render(){
        return(
            <div>
                <h1>You entered the following contact data</h1>
                <div>
                    <div>
                        Contact Name: {this.props.name}
                    </div>
                    <div>
                        Contact Telephone Number: {this.props.number}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactDetails;