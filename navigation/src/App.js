import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    // Ini adalah state awal yang di set sebelum render
    this.state = {
      elapsed: 0,
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {

    // componentDidMount dipanggil setelah component di render ke DOM.
    // Kita bisa set interval disini

    this.timer = setInterval(this.tick, 50);
  }

  componentWillUnmount() {

    // Method componentWillUnmount dipanggil sesaat sebelum
    // component di buang dari halaman
    // Kita bisa clear interval disini.

    clearInterval(this.timer);
  }

  tick() {

    // Fungsi ini dipanggil setial 50ms
    // Kita update elapsed disini.
    // Pemanggilan setState memicu component untuk melakukan re-render

    this.setState({
      elapsed: new Date() - this.props.start,
    })
  }

  render() {
    const elapsed = Math.round(this.state.elapsed / 100);

    const seconds = (elapsed / 10).toFixed(1);


    return <p>Contoh ini sudah dimulai sejak <b>{seconds} seconds</b> yang lalu</p>;
  }
}


export default App;
