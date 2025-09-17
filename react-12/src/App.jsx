import './App.css'

function App() {

  return (
    <>
      <h1>King Shohan</h1>
      <Student></Student>
      <Student></Student>
      {/* <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Person></Person> */}
      <Person></Person>
      <Developer></Developer>
      <Developer></Developer>
    </>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>DepartMent: </p>
    </div>
  )
}


function Developer () {
  return (
    <div style={{
        border: '2px solid green',
        borderRadius: '20px'
    }}>
      <h3>Developer: </h3>
      <p>Technology: </p>
    </div>
  )
}


function Person() {
  const name = "Sam Altman";
  const age = 32;
  const personStyle = {
    color: 'red',
    textAlign: 'left'
  }


  return (
    <>
      <h4 style={personStyle}>Hi, I am __ {name}</h4>
      <p>I am a {age} professional  web developer</p>
    </>
  )
}
function Sports() {
  return (
    <div>
      <h1>Bangladesh Cricket team</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis minus, beatae ipsa, tempore molestiae animi autem illo obcaecati delectus maiores dolor quae ipsum quisquam ducimus eos aliquid perferendis! Accusamus enim omnis dolorem, iste animi ab perferendis porro corporis aut officia exercitationem odio sequi suscipit iure cupiditate fuga eveniet provident blanditiis?</p>
    </div>
  )
}



export default App
