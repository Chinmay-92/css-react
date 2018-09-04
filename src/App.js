import React, { Component } from 'react';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  render() {
    const ITEMS = [
      {
        title: 'Home 🏠',
        url: '/'
      },
      {
        title: 'About 👋',
        url: '/about'
      },
      {
        title: 'Blog ✍️',
        url: '/blog'
      }
    ];
    return (
      <div>
        <Header
          logo="https://source.unsplash.com/200x200"
          navItems={ITEMS}
        />
        <Content />
      </div>
    );
  }
}

export default App;
