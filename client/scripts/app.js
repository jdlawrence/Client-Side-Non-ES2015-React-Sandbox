var Jamil = React.createClass({
  render: function() {
    return (
      <div >
        My component
      </div>
      )
  }
});


var App = React.createClass({
  render: function() {
    return (
      <div className="something">
        <Jamil />      
        Hello, world!
      </div>
      )
  }
})

var Counter = React.createClass({
  getInitialState: function() {

    return {count: this.props.initialCount};
  },

  handleClicker: function() {
    this.setState({count: this.state.count + 1});
    console.log('this.state', this.state);
  },

  render: function() {
    return <div onClick={this.handleClicker}>{this.state.count}</div>;
  }
});


React.render(
  <Counter initialCount={7} />,
  document.getElementById('app')
);