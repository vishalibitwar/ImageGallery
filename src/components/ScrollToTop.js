import React, { useState, Fragment } from 'react';

const ScrollToTop = () => {

  const [show, setShow] = useState(false);
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60)
      setShow(true)
    else
      setShow(false)
  })

  const ScrollTop = () => {
    window.scrollTo(0, 0);
  }
  return (

    <Fragment>
      {
        show && <div className=" fixed m-2 right-0 bottom-0 lg:m-4">
          <span title="Back to Top" onClick={ScrollTop} className="bg-gray-700  hover:bg-gray-800 cursor-pointer px-1 font-bold rounded text-2xl text-white">^</span>
        </div>

      }
    </Fragment>
  )
}

export default ScrollToTop;
