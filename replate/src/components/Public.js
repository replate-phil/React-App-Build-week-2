import React, { Component } from 'react';
import { connect } from 'react-redux';

class Public extends Component {
    render() {
        console.log('entering public page!!');
        return (
            <div>
                <h1>Hello, Please Log in!</h1>
                <h1>{this.props.state}</h1>
            </div>       
        );          
    }
}

const mapStateToProps = state => ({
    replates: state.replates
});

export default connect(
    mapStateToProps,
    {}
 ) (Public);