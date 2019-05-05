import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoodbank, postFoodbank} from '../actions';
import styled from 'styled-components';

const FoodbankPage = styled.div`
 line-height: .4;
 color: chocolate;
`;

class Foodbank extends Component {
    constructor() {
        super();
        this.state = {
            foodbanks: {
                'businessName': '',
                'businessAddr': '',
                'phone': '',
                'email': '',
                'password': '',
                'usertype': '' 
            }
        }
    };

    componentDidMount() {
        this.props.getFoodbank();
    }
    
    handleChanges = e => {
        this.setState({
            foodbanks: {
            ...this.state.foodbanks,
            [e.target.name]: e.target.value}
        });
    };
    
    // foodbank = e => {
    //     e.preventDefault();
    //     this.props.postFoodbank(this.state.foodbank);
    // }

    render() { 
        console.log('hello, welcome to the foodbank page!!')
        return ( 
           <FoodbankPage>
                <h1>'Welcome to the FoodBank!'</h1>
                {(this.props.foodbank.map((foodbanks, index) => {
                    console.log(foodbanks);
                    return (
                        <div key={index}>
                            <h3>{foodbanks.businessName}</h3>
                            <h3>{foodbanks.businessAddr}</h3>
                            <h3>{foodbanks.phone}</h3>
                            <h3>{foodbanks.email}</h3>
                            <h3>{foodbanks.usertype}</h3>
                        </div>
                    )
                }))}
           </FoodbankPage>
         );
    }
}

const mapStateToProps = (state) => ({
    foodbank: state.foodbank
});

export default connect(
    mapStateToProps,
    { getFoodbank, postFoodbank }
) (Foodbank);