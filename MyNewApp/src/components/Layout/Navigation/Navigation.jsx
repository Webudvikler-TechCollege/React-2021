


export function Navigation(props) {
  console.log("🚀 ~ file: Navigation.jsx ~ line 5 ~ Navigation ~ props", props)
  
  const className = "nav"

  let background = "#ececec"; 

  if(props.background) {
    background = props.background
  }

  if(props.darkMode) {
    background = "#333"
  }

  const style = {
    background: background,
    color: props.darkMode ? "white" : "black"
  }

  return (
    <nav className={className} style={style} >
      <ul style={{flexDirection: props.direction}}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
