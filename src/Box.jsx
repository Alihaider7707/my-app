import React from "react"
import "./Box.css"


const Box = () => {
  return (
    <>
    <div className="boxcontainer">
      <div className="boxtext">
        <h1>OUR SERVICES</h1>
        <p>Focused on results we seek to raise the level of our customers.</p>
      </div>
    </div>
      <div className="container">
        <div className="box">
          <img 
            src="https://i.pinimg.com/736x/6a/f4/a0/6af4a0d438df1f1d664a4103802c73ac.jpg" alt=""/>
            <div className="overlay">
              <div className="content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
        </div>
        <div className="box">
          <img
            src="https://i.pinimg.com/736x/73/b5/28/73b5287bef91f3e9134b5f8746dc1c06.jpg" alt=""/>
            <div className="overlay">
              <div className="content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
        </div>
        <div className="box">
          <img
            src="https://i.pinimg.com/564x/65/c6/26/65c6263e07490b1df5efa550e6dfeac4.jpg" alt=""/>
            <div className="overlay">
              <div className="content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
        </div>
        <div className="box">
          <img
            src="https://i.pinimg.com/564x/5b/e1/2e/5be12e6b60336095526649c536a4cc9c.jpg" alt=""/>
            <div className="overlay">
              <div className="content">
                <h1>Heading</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
        </div>
      </div>
      <div className="boxcontainer">
        <div className="boxtext">
        <p>Giving your concept an identity and making it arrive in the market as a Brand is our aim</p>
      </div>
      </div>
    </>
  )
}
export default Box
