import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, postData, getBusiness, postBusiness, 
getVolunteer, postVolunteer, getDonation, postDonation, 
getFoodbank, postFoodbank } from '../actions';

class Replate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            replate: []
          }
    }

    componentDidMount() {
        this.props.getData(this.state.replates);
    }

    addReplate = e => {
        e.preventDefault();
        this.props.postData(this.state.replate)
    }

    handleChanges = e => {
        this.setState({
            replate: {
                ...this.state.replate,
                [e.target.name]: e.target.value}
            });
        };
    
    render() { 
        return ( 
            {this.props.replates.map((replate, index) => {
                return (
                    <div key= {index}>
                        
                    </div>    
                )
            })}
         );
    }
}

const mapStateToProps = state => {
    return {
        prop: state.prop
    }
}

export default connect(
    mapStateToProps,
    { getData, postData, getBusiness, postBusiness, 
        getVolunteer, postVolunteer, getDonation, postDonation, 
        getFoodbank, postFoodbank }
  ) (Replate);
