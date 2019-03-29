import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Publicpage = styled.div`
    align-self: center;
    color: brown;
    border: 1px solid chocolate;
    border-radius: 5px;
    width: 400px;    
`;

class Public extends Component {
    render() {
        console.log('entering public page!!');
        return (
            <Publicpage>
                <h1>Hello, Please Log in!</h1>
                
            </Publicpage>       
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