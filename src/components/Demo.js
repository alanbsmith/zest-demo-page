import React, { Component } from 'react';
import Zest from 'react-zest';


class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationName: 'beacon',
      animationTrigger: 'click',
      animationDuration: 400,
    };
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className="demo__form">
          <label className="demo__form__label">Animation Name</label>
          <select className="demo__form__input" defaultValue={this.state.animationName} onChange={e => this.setState({ animationName: e.target.value })} >
            <option value="beacon">Beacon</option>
            <option value="wiggle">Wiggle</option>
          </select>
          <label className="demo__form__label">Animation Trigger</label>
          <select className="demo__form__input" defaultValue={this.state.animationTrigger} onChange={e => this.setState({ animationTrigger: e.target.value })}>
            <option value="click">Click</option>
            <option value="hover">Hover</option>
          </select>
          <label className="demo__form__label">COMING SOON: Animation Duration (in milliseconds)</label>
          <input className="demo__form__input disabled" disabled={true} onChange={e => this.setState({ animationDuration: e.target.value })} value={this.state.animationDuration} />
        </div>
        <div className="demo__rendering">
          <Zest
            animationName={this.state.animationName}
            animationTrigger={this.state.animationTrigger}
            animationDuration={this.state.animationDuration}
          >
            <button className="demo__rendering__btn">Click Me!</button>
          </Zest>
        </div>
      </div>
    )
  }
}

export default Demo;
