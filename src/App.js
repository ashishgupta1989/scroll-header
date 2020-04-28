import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headroom from './react-headroom-forked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showheader: false,
      scrollLeftElement: null,
      scrollRightElement: null,
      scrollingPanel: 'left'
    }
    this.leftPanelScrollRef = React.createRef();
    this.rightPanelScrollRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      showheader: true,
      scrollLeftElement: this.leftPanelScrollRef.current,
      scrollRightElement: this.rightPanelScrollRef.current
    })
    this.leftPanelScrollRef.current.addEventListener('scroll', this.setLeftScrollElement)
    this.rightPanelScrollRef.current.addEventListener('scroll', this.setRightScrollElement)
  }

  componentWillUnmount() {
    this.leftPanelScrollRef.current.removeEventListener('scroll', this.setLeftScrollElement)
    this.rightPanelScrollRef.current.removeEventListener('scroll', this.setRightScrollElement)
  }

  setLeftScrollElement = (event) => {
    this.setState({
      scrollLeftElement: event.target,
      scrollingPanel: 'left'
    })
  }

  setRightScrollElement = (event) => {
    this.setState({
      scrollRightElement: event.target,
      scrollingPanel: 'right'
    })
  }

  getLeftScrollElement = () => {
    return this.state.scrollLeftElement
  }

  getRightScrollElement = () => {
    return this.state.scrollRightElement
  }

  render() {
    return (
      <>
        {this.state.showheader &&
          <Headroom className="header" style={{
            background: 'rgb(57, 111, 176)',
            boxShadow: '1px 1px 1px rgba(0,0,0,0.25)',
            height: '10vh'
          }}
            parent={this.state.scrollingPanel === 'left' ? this.getLeftScrollElement : this.getRightScrollElement}>
            Test Header
          </Headroom>
        }
        <div className="main-container">
          <div className="left-panel" ref={this.leftPanelScrollRef}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).
        </div>
          <div className="right-panel" ref={this.rightPanelScrollRef}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humor and the like).
        </div>
        </div>
      </>
    );
  }
}

export default App;
