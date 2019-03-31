import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFoodbank} from '../actions';

class Foodbank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodbank: {
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
        this.props.getFoodbank(this.state.foodbank);
    }
    

    handleChanges = e => {
        this.setState({
                foodbank: {
            ...this.state.foodbank,
            [e.target.name]: e.target.value}
        });
    };

    foodbank = e => {
        e.preventDefault();
        this.props.foodbank(this.state.foodbank);
    }

    render() { 
        console.log('hello, welcome to the foodbank page!!')
        return ( 
           <div className='foodbank-page'>
                <h1>'Welcome to the FoodBank!'</h1>
                {(this.props.foodbanks.map((foodbank, index) => {
                    return (
                        <div key={index}>
                            <h3>{foodbank.businessName}</h3>
                            <h3>{foodbank.businessAddr}</h3>
                            <h3>{foodbank.phone}</h3>
                            <h3>{foodbank.email}</h3>
                            <h3>{foodbank.password}</h3>
                            <h3>{foodbank.usertype}</h3>
                        </div>
                    )
                }))}
           </div>
         );
    }
}

const mapStateToProps = state => ({
    foodbanks: state.foodbanks
});

export default connect(
    mapStateToProps,
    { getFoodbank }
) (Foodbank);