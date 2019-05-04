import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, postData} from '../actions';

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
        this.props.getData(this.state.foodbank);
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
    //     this.props.postData(this.state.foodbanks);
    // }

    render() { 
        console.log('hello, welcome to the foodbank page!!')
        return ( 
           <div className='foodbank-page'>
                <h1>'Welcome to the FoodBank!'</h1>
                {(this.props.foodbank.map((foodbanks, index) => {
                    console.log(foodbanks);
                    return (
                        <div key={index}>
                            <h3>{foodbanks.businessName}</h3>
                            <h3>{foodbanks.businessAddr}</h3>
                            <h3>{foodbanks.phone}</h3>
                            <h3>{foodbanks.email}</h3>
                            <h3>{foodbanks.password}</h3>
                            <h3>{foodbanks.usertype}</h3>
                        </div>
                    )
                }))}
           </div>
         );
    }
}

const mapStateToProps = (state) => ({
    foodbank: state.foodbank
});

export default connect(
    mapStateToProps,
    { getData, postData }
) (Foodbank);