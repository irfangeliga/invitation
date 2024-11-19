import Header from "../Components/Header";

 function Invitation(props){
  let name = props.name.replaceAll("+"," ").replaceAll("/","");
    return(
        <>
        <div>
        <h1>{name}</h1>
        </div>
      
      </>
    )
 }

 export default Invitation;