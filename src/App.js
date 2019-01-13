import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      m1: 20,
      m2: 20,
      x1: 150,
      y1: 300,
      x2: 350,
      y2: 300,
      x: 480,
      y: 20
    }
  }

  render() {

    const m1 = this.state.m1 === '' ? 0 : this.state.m1
    const m2 = this.state.m2 === '' ? 0 : this.state.m2
    const x1 = this.state.x1 === '' ? 0 : this.state.x1
    const y1 = this.state.y1 === '' ? 0 : this.state.y1
    const x2 = this.state.x2 === '' ? 0 : this.state.x2
    const y2 = this.state.y2 === '' ? 0 : this.state.y2
    const x = this.state.x === '' ? 0 : this.state.x
    const y= this.state.y === '' ? 0 : this.state.y



    return (
      <div className="App">
        <div>
          <span>m1</span>
          <input
            type="number"
            value={this.state.m1}
            onChange={(e) => this.onChange(e, 'm1')}
          />
          <span>m2</span>
          <input 
            type="number"
            value={this.state.m2}
            onChange={(e) => this.onChange(e, 'm2')}
          />
          <span>х1</span>
          <input 
            type="number"
            value={this.state.x1}
            onChange={(e) => this.onChange(e, 'x1')}
          />
          <span>y1</span>
          <input 
            type="number"
            value={this.state.y1} 
            onChange={(e) => this.onChange(e, 'y1')}
          />
          <span>x2</span>
          <input 
            type="number"
            value={this.state.x2} 
            onChange={(e) => this.onChange(e, 'x2')}
          />
          <span>y2</span>
          <input 
            type="number" 
            value={this.state.y2}
            onChange={(e) => this.onChange(e, 'y2')}
          />
          <span>x</span>
          <input 
            type="number"
            value={this.state.x} 
            onChange={(e) => this.onChange(e, 'x')}
          />
          <span>y</span>
          <input 
            type="number"
            value={this.state.y} 
            onChange={(e) => this.onChange(e, 'y')}
          />
        </div>

        <div className="svgContainer">
          <svg width="500" height="500">
            <path
              d={`M${m1} ${m2} C ${x1} ${y1}, ${x2} ${y2}, ${x} ${y}`}
              stroke="black"
              fill="transparent"
            />
          </svg>
        </div>
      </div>
    );
  }

  onChange = (e, point) => {
    this.setState({
      [point]: e.target.value
    })
  }
}

export default App;
