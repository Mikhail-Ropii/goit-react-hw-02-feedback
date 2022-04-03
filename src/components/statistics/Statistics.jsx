import { Component } from "react/cjs/react.development";
import { Title, Buttons, Container } from "./Statistics.styled.js";


export class Statistics extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    
    addGoodFeedback = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        });
    }
    addNeutralFeedback = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
    }
    addBadFeedback = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        });
    }
    
    render() {
        return (<Container>
            <Title>Please leave feedback</Title>
            <Buttons>
                <button type="button" onClick={this.addGoodFeedback}>Good</button>
                <button type="button" onClick={this.addNeutralFeedback}>Neutral</button>
                <button type="button" onClick={this.addBadFeedback}>Bad</button>
            </Buttons>
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
                    </Container>
)
    }
}