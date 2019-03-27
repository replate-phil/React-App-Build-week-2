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
            <div>
                <div>
                    {this.props.replates.map((replate, index) => {
                        return (
                            <div key= {index}>
                                <h2>{replate.array}</h2>
                            </div>    
                        )
                    })}
                </div>
 
                <form onSubmit={this.addReplate}>
                    <input 
                    type='text'
                    name='name'
                    value={this.state.replate}
                    placeholder='...'
                    onChange={this.handleChanges}
                    />
                    <button type="submit">Add Replate</button>
                </form>

                <h1>{this.props.replate}</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    replates: state.replates
});

export default connect(
    mapStateToProps,
    { getData, postData, getBusiness, postBusiness, 
        getVolunteer, postVolunteer, getDonation, postDonation, 
        getFoodbank, postFoodbank }
  ) (Replate);
