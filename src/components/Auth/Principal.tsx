import React, { useState } from 'react'
import Login from './Login';
import Register from './Register';

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
                    src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.0-9/116167552_2595113950749904_7127006449389419011_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=xVrLIgIkoFkAX_jse3L&_nc_ht=scontent-bog1-1.xx&oh=2698613cfc0c74a1b33fe45f3c6604fc&oe=6083275F"
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
