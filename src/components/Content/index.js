import React from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondCounter: 1,
      counter: 0,
      apiData: null,
    }
  }
  componentDidMount() {
    console.log('hey i am mounted!');
    // dataProvider.getWeather('london').then();
    fetch('https://api.github.com/users/jurekbarth').then(res => res.json()).then(json => {
      this.setState({
        apiData: json
      });
    }).catch(err => console.log(err))
  }
  countUp() {
    console.log('count up');
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    console.log(this.state)
    const { apiData } = this.state;
    if (apiData === null) {
      return (
        <div>
          <h1>Counter {this.state.counter}</h1>
          <button onClick={() => this.countUp()}>Count 🔝</button>
        </div>
      )
    }
    return (
      <div>
        <img src={apiData.avatar_url} alt="" />
      </div>
    )

  }
}



export default MyComponent;
