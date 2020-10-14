import React from 'react'

class Form extends React.Component {
    
    state={
        funds: ""
    }
    
    submitHandle = event => {
        event.preventDefault();
        this.props.addFunds(this.state.funds);
        this.setState({
            funds: ""
        })
    }

    changeHandle = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.submitHandle}>
                <input type="number" name="funds" placeholder="Write Amount Here" value={this.state.funds} onChange={this.changeHandle} />
                <button type="submit">Add Funds</button>
            </form>
        )
    }
}

export default Form;