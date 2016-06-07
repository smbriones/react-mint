import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = React.createClass({
  render: function() {
    return (
      <div className="app">
        <div className="container">
          <h1 className="title">react-mint</h1>
        </div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('app-container')
);
