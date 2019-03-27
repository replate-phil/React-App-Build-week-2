import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

class Public extends Component {
    render() {
        return (
            <div>
                <h1>Error: Please Log in!</h1>
                <Link><Redirect to="/login" /></Link>
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