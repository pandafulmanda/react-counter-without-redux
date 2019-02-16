class MyComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
    }
  }

  componentDidMount(){
    console.log('This component just mounted to the DOM!')
  }

  componentDidUpdate() {
    console.log('This component just updated')
  }

  componentWillUnmount() {
    console.log('This component is about to unmount!')
  }

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