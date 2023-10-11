import { useEffect, useState } from 'react';

function useCoordinates() {
    // const [coordinates, setCoordinates] = useState({x:0, y:0})
    const [x, setXCoordinates] = useState(0)
    const [y, setYCoordinates] = useState(0)
  // document.ready()
  // The empty array tells useEffect to execute the code once and only once the app is loaded
  // Custom hook -> Helpers that use React hooks
  // That doesn't mean that React can't have helpers, they can and they go into their own folder -> helpers
  useEffect(()=>{
    // Are usually used with fetchs
    const handleMouseMove = (event) => {
      // we want to capture the event and set the coordinates of our mouse position
      // console.log(event)
    //   setCoordinates({x: event.x, y: event.y});
    setXCoordinates(event.x);
    setYCoordinates(event.y);
    }
    document.addEventListener('mousemove', handleMouseMove)
  }, [])
  return {x, y}
}

export default useCoordinates;