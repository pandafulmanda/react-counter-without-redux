class MyComponent extends React.Component {
  handleClick() {
    console.log('You clicked me!')
  }
  render() {
    return <div>
      <button onClick={this.handleClick}>click</button>
    </div>
  }
}

ReactDOM.render(<MyComponent name="Bananas"/>, document.getElementById('root'))