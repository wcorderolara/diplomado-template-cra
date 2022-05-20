import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            hide: true
        };
        this.toggleClock = this.toggleClock.bind(this);
    }

    toggleClock() {
        this.setState(prevState => ({
            hide: prevState.hide ? false : true
        }))
    }

    componentDidMount() {
        const oneSecond = 1000;
        this.intervalId = setInterval( () => {
            this.setState({
                date: new Date()
            })
        }, oneSecond);
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log('prevState', prevState);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <>
                <button onClick={this.toggleClock}>Toggle Clock</button>
                <div>{ this.state.hide && this.state.date.toLocaleTimeString()}</div>
            </>
        )
    }

    
}

export default Clock;
