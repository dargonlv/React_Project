import { useState, useRef, useEffect } from "react";
import ClickAwayListener from "react-click-away-listener";

function App2() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();

  
    const handleClickAway = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        
            setIsOpen(false);
        
      }
    };

    

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
      {isOpen ? (
        <ClickAwayListener onClickAway={handleClickAway}>

        <div ref={ref} style={{ height: "300px", background: "red" }}>
          This is the content of the div.
        </div>
        </ClickAwayListener>
      ):null}
    </div>
  );
}

export default App2;
