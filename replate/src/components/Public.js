import React, { Component } from 'react';
import { connect } from 'react-redux';

class Public extends Component {
    render() {
       return (
           <h1>Error: Please Log in!</h1>
       )    
    }
}

const mapStateToProps = state => {
    return {
        prop: state.prop
    }
}

export default connect(
    mapStateToProps,
    {}
 ) (Public);