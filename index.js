let MyComponent = (props) => {
  return <div>Hello {props.name}</div>
}

ReactDOM.render(<MyComponent/>, document.getElementById('root'))