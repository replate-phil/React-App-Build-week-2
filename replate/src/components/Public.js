import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Publicpage = styled.div`
    align-self: center;
    color: brown;
    /* border: 2px dashed chocolate;
    border-style: double;
    border-radius: 10px; */
    width: 400px;    
`;

class Public extends Component {
    render() {
        console.log('entering public page!!');
        return (
            <Publicpage>
                <h1>Hello, Please Log in for further information, Thank You!</h1>
                
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