class App extends React.Component {
  // needs render method along with a return
  render() {
    return (
      <div className="app">
        <Header />
        <Review />
        <Rating />
        <Sentiment />
        <Visitors />
      </div>
    );
  }
}

class Header extends React.Component {
  // needs render method along with a return
  render() {
    return (
      <div className="header">
        <ul className="header-list">
          <li>Dashboard</li>
          <li>Widget</li>
          <li>Reviews</li>
          <li>Customers</li>
          <li>Online Analysis</li>
          <li>Settings</li>
        </ul>
      </div>
    );
  }
}
class Review extends React.Component {
  // needs render method along with a return
  render() {
    return (
      <div className="review">
        <h2>Review</h2>
        <h1>1234</h1>
      </div>
    );
  }
}
class Rating extends React.Component {
  // needs render method along with a return
  render() {
    return (
      <div className="rating">
        <h2> Average Rating</h2>
        <h1>4.6</h1>
      </div>
    );
  }
}
class Sentiment extends React.Component {
  // needs render method along with a return
  render() {
    return (
      <div className="sentiment">
        <h2>Sentiment-Anaylsis</h2>
        <ul>
          <li>
            <h1>960</h1>
          </li>
          <li>
            <h1>122</h1>
          </li>
          <li>
            <h1>321</h1>
          </li>
        </ul>
      </div>
    );
  }
}
class Visitors extends React.Component {
  // needs render method along with a return
  render() {
    return (
      <div className="visitors">
        <h2>Website-visitors</h2>
        <h1>821</h1>
        <div className="space"></div>
      </div>
    );
  }
}

ReactDOM.render(
  // we render components by writing like an HTML element
  <App />,
  document.querySelector("#container")
);
