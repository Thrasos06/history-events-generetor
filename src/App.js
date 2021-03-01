import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      month: null,
      day: null,
    };
    
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  publish() {
      fetch(`http://numbersapi.com/${this.state.month}/${this.state.day}/date`)
        .then(response=> response.text())
        .then(text => {this.setState({ robots: text })});
      
    // window.open(`http://numbersapi.com/${this.state.month}/${this.state.day}/date`);
    // this.Brings();
  }
  
  render() {
    return <div id='containerForm'>
      <input 
        class='inputForm'
        type="number" 
        name="month" 
        min = '1'
        max='12'
        placeholder="Enter month of birth (number)..." 
        value={ this.state.month }
        onChange={ this.handleChange } 
      />
      
      <input 
        class='inputForm'
        type="number" 
        name="day" 
        min = '1'
        max='31'
        placeholder="Enter day of birth (number)..."
        value={ this.state.day } 
        onChange={ this.handleChange } 
      />
      <br></br>
      <button id='buttonClick' value="Send" onClick={ this.publish }>Lets Learn!</button>

      <div id='theEvent'>
         <p>{this.state.robots}</p>
      </div>

      <footer id='footer'>Made for fun by Thrasos!</footer>
    </div>

   
    
  }
}


  export default App;