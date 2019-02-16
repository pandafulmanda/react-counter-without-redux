class MyComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

ReactDOM.render(<MyComponent name="Bananas"/>, document.getElementById('root'))