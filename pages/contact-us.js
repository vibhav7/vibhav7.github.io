import React from 'react';
import Wrapper from '../components/core/Wrapper';

function ContactUs(props) {
  function eyeMovementhandler() {
    // $(".move-area").mousemove(function (event) {
    // var eye = $(".eye");
    // var x = (eye.offset().left) + (eye.width() / 2);
    // var y = (eye.offset().top) + (eye.height() / 2);
    // var rad = Math.atan2(event.pageX - x, event.pageY - y);
    // var rot = (rad * (180 / Math.PI) * -1) + 180;
    // eye.css({
    //   '-webkit-transform': 'rotate(' + rot + 'deg)',
    //   '-moz-transform': 'rotate(' + rot + 'deg)',
    //   '-ms-transform': 'rotate(' + rot + 'deg)',
    //   'transform': 'rotate(' + rot + 'deg)'
    // });
    // });
  }
  return (
    <Wrapper>
      <section onMouseMove={eyeMovementhandler} className="move-area">
        <div className='eye-container'>
          <div className='eye'></div>
          <div className='eye'></div>
        </div>
      </section>
    </Wrapper>
  );
}

export default ContactUs;