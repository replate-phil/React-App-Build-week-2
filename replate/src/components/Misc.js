








// import React from 'react';
// // import { connect } from 'react-redux';
// // import Loader from 'react-loader-spinner';
// // import { register, getData } from '../actions';
// // import styled from 'styled-components';

// // const WrapperDiv = styled.div`
// //     flex-direction: column;
// //     /* border: 1px solid black;
// //     margin-top: 20px; */
// // `;


// // Donation
// const Donation = props => {
//     return (
//         <div className="donation-page">
//             {props.donate.map(items => {
//                 return (
//                     <div className='data' key={items.name}> 
//                         <h2>Name: {items.name}</h2>
//                         <p>Quantity: {items.quantity_lbs}</p>
//                         <p>Picked: {items.picked_up}</p>
//                         <p>Comment: {items.comment}</p>
//                         <p>Business Id: {items.business_id}</p>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };


// export default Donation;





/*

// <h3>{props.name}</h3>
// <strong>{props.name}</strong>
// <p>{props.quantity_lbs}</p>
// <p>{props.picked_up}</p>
// <p>{props.comment}</p>
// <p>{props.business_id}</p>

// Donation.defaultProps = {
//     name:'',
//     quantity_lbs: '',
//     picked_up: '',
//     comment: '',
//     business_id: ''    
// };

// class Register extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         userC: {
//             'name': '',
//             'quantity_lbs': '',
//             'picked_up': '',
//             'comment': '',
//             'business_id': ''
//         }}
//     };
    
//     componentDidMount() {
//         this.props.getData();
//     }

//     handleChanges = e => {
//         this.setState({
//             userC: {
//                 ...this.state.userC,
//                 [e.target.name]: e.target.value,
//             }    
//         });
//     };

//     register = e => {
//         e.preventDefault();
//         this.props.register(this.state.userC);
//         this.props.history.push('/');
//     };    

//     render() {
//         console.log('entering donation!!');
//         return (
//             <WrapperDiv>
//                 <form onSubmit={this.register}>
//                     <h2>Donations!</h2>
//                     <h5>Please Register your donation here!!</h5>
//                     <input 
//                         type='text'
//                         name='name'
//                         value={this.state.userC.name}
//                         placeholder='Enter Name'
//                         onChange={this.handleChanges}
//                         required
//                     />
//                     <input 
//                         type='text'
//                         name='quantity_lbs'
//                         value={this.state.userC.quantity_lbs}
//                         placeholder='Enter Quantity(lbs)'
//                         onChange={this.handleChanges}
//                         required
//                     />
//                     <input
//                         type='text'
//                         name='picked_up'
//                         value={this.state.userC.picked_up}
//                         placeholder='Is item picked up?'
//                         onChange={this.handleChanges}
//                         required
//                     />
//                     <input
//                         type='text'
//                         name='comment'
//                         value={this.state.userC.comment}
//                         placeholder='Enter Comments'
//                         onChange={this.handleChanges}
//                         required
//                     />
//                     <input 
//                         type='text'
//                         name='business_id'
//                         value={this.state.userC.business_id}
//                         placeholder='Enter Business Id'
//                         onChange={this.handleChanges}
//                         required
//                     />
//                     <button type="submit">

//                         {this.props.inRegister ? (
//                             <Loader type="ThreeDots" color="green" height='12' width='37' />
//                         ) : (
//                             'Donate!'    
//                         )}
//                     </button> 
//                 </form>
//             </WrapperDiv>
//         );
//     }
// }    

// const mapStateToProps = state => ({
//     inRegister: state.inRegister
// });

// export default connect(
//     mapStateToProps,
//     { register, getData }
// ) (RegisterC); */



// donations

/*    
   */
 /*
// export default Donations;
 componentDidMount() {
        this.getDonation('https://replate-phil.herokuapp.com/api/donations/');
    }

    getDonation = URL => {
        fetch(URL)
            .then(res => {return res.json();
            })
            .then(data => {this.setState({ donation: data.results });
            })
            .catch(err => {console.log(err)
            });
    };

    render() {
        console.log('Thank you for your donation')
        return (
            <div className='donations-page'>
                <Donation donate={this.state.donation}/>
            </div>
        );
    }
}


Donation.defaultProps = {
    donations: [],
};
handleClick () {
    //         return (
    //             this.props.history.push('/thank')
                
    //         );
    //     };
    
    //     render() {
    //         const {name, quantity_lbs, 
    //         picked_up, comment, business_id} = this.state.donation;
    //             return (
    //                 <div>
    //                     <h1>'Welcome, Please Donate!'</h1>
    //                     <form onSubmit={this.handleClick}>
    //                         <strong>
    //                         <FormattedMessage
    //                             id='Donations'
    //                             defaultMessage={`
    //                             Name: ${name}`} 
    //                         /><br/>
    //                         </strong>
    //                         <strong>
    //                         <FormattedMessage
    //                             id='Donations'
    //                             defaultMessage={`
    //                             Quantity: ${quantity_lbs}`} 
    //                         /><br/>
    //                         </strong>
    //                         <strong>
    //                         <FormattedMessage
    //                             id='Donations'
    //                             defaultMessage={`
    //                             Picked: ${picked_up}`} 
    //                         /><br/>
    //                         </strong>
    //                         <strong>
    //                         <FormattedMessage
    //                         id='Donations'
    //                         defaultMessage={`
    //                         Comment: ${comment}`}
    //                         /><br/>   
    //                         </strong>
    //                         <strong>
    //                         <FormattedMessage
    //                             id='Donations' 
    //                             defaultMessage={`
    //                             Business Id: ${business_id}`}
    //                         /><br/>
    //                         </strong>
    //                         <button type="submit">Donate!</button>
    //                     </form>   
    //                 </div>
    //             );
    //     }
    // }   
    
    // const mapStateToProps = ({donation}) => ({
    //     donation
    // });
    
    // export default connect(
    //     mapStateToProps,
    //     { FormattedMessage}
    // ) (Donations);
  
//  constructor(props) {
    //     super(props);
    //     this.state = {
    //         replate: {
    //             Business: '',

    //         }
    //       }
    // }

    // // componentDidMount() {
    // //     this.props.getData(this.state.replates);
    // // }

    // // addReplate = e => {
    // //     e.preventDefault();
    // //     this.props.postData(this.state.replate)
    // // }

    // handleChanges = e => {
    //     this.setState({
    //         replate: {
    //             ...this.state.replate,
    //             [e.target.name]: e.target.value}
    //         });
    //     };


*/