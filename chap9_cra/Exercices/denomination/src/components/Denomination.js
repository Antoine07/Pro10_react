import React, { Component } from 'react';

import Button from '../Styles/Button';

class Denomination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            message: '',
            results: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
            results: [],
            message: ''
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const { amount } = this.state;

        // vérification que c'est bien un entier
        if (parseInt(amount) != amount) {

            this.setState({
                message: `Attention le montant ${amount} n'est pas valide`
            })

            return;
        }

        this.setState({
            results: this.calcul(amount),
            amount : ''
        })
    }

    calcul(N) {

        const results = [{'amount' : N}];

        // attention reverse est fait dans App.js
        for (const d of this.props.denominations) {
            let nbD = Math.floor(N / d);
            if (nbD >= 1) {
                N = N - d * nbD;
                results.push({ 'token': d, 'count': nbD });
            }
        }

        return results;
    }

    render() {
        const { denominations } = this.props;
        const { amount, results, message } = this.state;

        return (
            <>
                {message && <p>{message}</p>}
                <h2>Liste des tokens {denominations.join(', ')}</h2>
                <form onSubmit={this.handleSubmit}>
                    <label  >Amount</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={amount}
                        name="amount"
                    />
                    <Button primary>Ok</Button>
                </form>
                { results.length > 0 && (
                    <>
                        <h3>Mountant : {results[0].amount}</h3>
                        {results.slice(1).map((t, i) => (
                            <p key={i}>Token : {t.token} Count : {t.count}</p>
                        ))}
                    </>
                )}
            </>
        )

    }
}

export default Denomination;