import { Component } from "react";
import Button from "react-bootstrap/Button";

class EvenClicks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 0,
            value: "even or odd"
        };
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let { clicks } = this.state;
        this.setState({ clicks: clicks + 1 });
    }

    oddOrEven() {
        let clicks = this.state.clicks
        if (clicks % 2 === 0){
            return "Even" 
        }
        else {
            return "Odd"
        }
    }

    render() {
        return (
        <>
            <p>{this.oddOrEven()}</p>
            <Button 
                onClick={ this.handleClick }>
                Clicked even or odd times?
            </Button> 
        </>
        )
    }
}

export default EvenClicks;