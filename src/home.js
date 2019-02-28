import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
        this.props.home &&<div>
            <div
          style={{
            width: "800px",
            height: "600px",
            backgroundColor: "white",
            margin: "0px auto"
          }}
        >
          <h1 style={{ textAlign: "center", paddingTop: "40px" }}>
            {" "}
            Dungeon Crawler
          </h1>
          <p
            style={{
              textAlign: "center",
              paddingTop: "40px",
              width: "400px",
              margin: "0px auto"
            }}
          >
            This game is so simple you just need to find the way to treasure
            your can control character by arrow keys <br/><br/>
            <strong>solution is in the matrix </strong>
            
          </p>
        
          <p
            style={{
              textAlign: "center",
              paddingTop: "40px",
              width: "400px",
              margin: "0px auto",
              fontSize : '20px'
            }}
          >
        
              [ 0,0,6,6,6,6,6,6,6,6,5,5,6,6,6,6,6,6,6,6, ]<br/>
              [ 0,0,0,0,6,6,6,6,6,6,6,5,6,6,6,6,6,6,6,6, ]<br/>
              [ 6,6,0,0,0,6,6,6,6,6,6,5,6,0,0,0,6,6,6,6, ]<br/>
              [ 6,6,0,6,0,0,6,6,6,5,5,5,6,6,0,0,6,6,6,6, ]<br/>
              [ 6,6,6,6,0,0,6,6,0,5,5,5,0,0,0,3,6,5,6,6, ]<br/>
              [ 6,6,6,6,0,0,0,0,0,0,0,0,0,6,5,3,6,6,6,6, ]<br/>
              [ 6,6,0,0,0,0,0,0,6,0,6,6,0,5,5,3,6,6,6,6, ]<br/>
              [ 6,6,6,0,0,6,6,6,6,6,6,0,0,5,6,3,6,6,6,6, ]<br/>
              [ 6,6,6,6,6,6,6,5,5,6,6,5,5,5,5,3,0,0,6,6, ]<br/>
              [ 6,6,6,5,5,6,6,5,6,6,6,5,6,6,6,6,0,4,6,6, ]<br/>
              [ 6,6,6,6,5,6,6,6,6,6,6,5,6,6,6,6,6,6,6,6, ]<br/>
              [ 6,6,6,6,6,6,6,6,6,6,6,5,6,6,6,6,6,6,6,6, ]
          </p>
          <button
          onClick = { this.props.startGame }
          style = {{
              padding : '10px 20px',
              fontSize : '16px',
              boxSizing : 'border-box',
              float : 'right',
              marginRight : '10px',
              backgroundColor : 'blue',
              border : 'none',
              color : 'white'
              
          }}
          
          > start </button>
        </div>
      </div>
    )
  }
}

export default Home ;