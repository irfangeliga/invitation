import { useState } from "react";

function Text(proops){
  const [counter, setCounter] = useState(0)
  
  let newCounter = 0;
  function clickHandler(){
    newCounter = counter+1;
    console.log("ya saya" + newCounter);
    setCounter(newCounter)
  }

  return(
    <>
      <h1 className={"text-"+proops.align+" h"+proops.size+" mt-3 mb-5"}>
      {proops.title}
    </h1>
    <div className={"text-"+proops.align+" mb-3"}>
      <button className="btn btn-primary" onClick={clickHandler}>Click For Money {counter}</button>
    </div>
    </>
  )
}
export default Text