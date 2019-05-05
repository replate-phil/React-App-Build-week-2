import React, { Component } from 'react';
import { connect } from 'react-redux';

class Thank extends Component {
    render() {
        console.log('entering thanking page!!');
        return (
            <div>
                <h1>Thank you for your donation!</h1>
            </div>       
        );          
    }
}

const mapStateToProps = replates => ({
    replates
});

export default connect(
    mapStateToProps,
    {}
 ) (Thank);