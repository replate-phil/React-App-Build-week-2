import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Lambda',
            password: 'enter',
            usertype: '',
        };
    }

    handleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        let newUser = {};
        const { usertype } = this.props.match.params;

        if (usertype === 'volunteer') {
            newUser = {
                username: this.state.username,
                password: this.state.password,
                usertype: usertype,
            };
        } else newUser = { ...this.state, usertype: usertype };

        console.log(newUser);

        axios
            .post('https://replate-phil.herokuapp.com/api/auth/register', newUser)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                this.props.history.push('/loggedin');
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <h1>{this.props.replate}</h1>
            </div>
        )
    };
}    

const mapStateToProps = state => ({
        replates: state.replates
});

export default connect(
    mapStateToProps, 
    {}
) (RegisterForm);