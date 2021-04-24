import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';
import Logo from '../../images/176244152_139134654884833_6416900934015126848_n.jpg'

function Principal() {
          
          const [lg, setLg] = useState(true)
          
          return (
            <div
                className=" form-group row col-lg-12"
              >
                <div
                  className=" form-group col-lg-7"
                  style={{
                    height: window.screen.height-150,
                    backgroundColor: "black"
                  }}
                >
                  <img
                    src={Logo}
                    style={{
                      backgroundSize: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                {lg ? 
                <Login setLg={setLg}/> 
                :
                <Register setLg={setLg}/>
                }
                               
              </div>
          )
}

export default Principal
