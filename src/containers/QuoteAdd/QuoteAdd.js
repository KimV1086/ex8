import React, {Component, Fragment} from 'react';
import QuoteForm from "../../components/QuotesForm/QuotesForm";
import axios from "../../axios-quotes"

class QuoteAdd extends Component {
    addQuote = quote => {
        axios.post('quotes.json', quote).then(() => {
            this.props.history.replace('/');
        });
    };

    render() {
        return (
            <Fragment>
                <h3>Submit new quote</h3>
                <QuoteForm onSubmit={this.addQuote}/>
            </Fragment>
        );
    }
}

export default QuoteAdd;
