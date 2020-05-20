import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {}
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()) {
            ingredients[param[0]] = +param[1]; 
        }
        this.setState({ingredients: ingredients})
    }

    onCheckoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    onCheckoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return ( 
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients}
                    onCheckoutCancelled={this.onCheckoutCancelledHandler}
                    onCheckoutContinued={this.onCheckoutContinuedHandler}
                    />
                <Route path={this.props.match.url + '/contact-data'} component={ContactData} />
            </div>
        )
    }
}

export default Checkout;