import React from 'react';

import fullpage from '../../../fullpage/fullpage.js';

// let distance = 0;//куда ее запихнуть?

class mainPage extends React.Component {
  // moveDown(){
  //   // ничего не делаем если distance меньше чем 400(vh) - высота четырех слайдов
  //   if(distance <= (this.refs.container.children.length - 1) * 100 * -1){
  //     return;
  //   } else {
  //     this.refs.container.style.transform = 'translateY(' + (distance -= 100) + 'vh)';
  //   }
  // }
  //
  // moveUp(){
  //   // если distance 0 - значить мы на первом слайде - ничего не делаем
  //   if(distance === 0){
  //     return;
  //   } else {
  //     this.refs.container.style.transform = 'translateY(' + (distance += 100) + 'vh)';
  //   }
  // }
  //
  // keyHandler(e){
  //   if(e.keyCode === 38){
  //     this.moveUp();
  //   }
  //   else if (e.keyCode === 40){
  //     this.moveDown();
  //   }
  // }
  //
  // wheelHandler(e){
  //   e = e || window.event;
  //
  //   let delta = e.deltaY || e.detail || e.wheelDelta;
  //
  //   e.preventDefault();
  //   console.log(delta);
  //   if(delta > 0) {
  //     this.moveDown();
  //   }
  //   else if (delta < 0) {
  //     this.moveUp();
  //   }
  // }

  componentDidMount() {
    fullpage.initialize('.container', {
        menu: '#menu',
        css3: true
    });

    const container = this.refs.container,
          sections = container.children;

    for (var i = 0; i < sections.length; i++) {
      sections[i].style.height = window.innerHeight + 'px';
    }
    //
    // window.addEventListener('keydown', this.keyHandler.bind(this));
    //
    // if (window.addEventListener) {
    //   if ('onwheel' in document) {
    //     window.addEventListener("wheel", this.wheelHandler.bind(this));
    //   } else if ('onmousewheel' in document) {
    //     window.addEventListener("mousewheel", this.wheelHandler.bind(this));
    //   } else {
    //     window.addEventListener("MozMousePixelScroll", this.wheelHandler.bind(this));
    //   }
    // } else {
    //   window.attachEvent("onmousewheel", this.wheelHandler.bind(this));
    // }
  }

  render() {
    return (
      <div className='container' ref='container'>
        <section className='section'><h1>First</h1></section>
        <section className='section'><h1>About</h1></section>
        <section className='section'><h1>Works</h1></section>
        <section className='section'><h1>Resources</h1></section>
        <section className='section'><h1>Contact</h1></section>
      </div>
    );
  }
}

export default mainPage;
