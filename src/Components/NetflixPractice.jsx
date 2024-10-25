


const NetflixSeriese = () => {
    const name = "Queen of Tears";
    const rating = "8.2";
    const summary = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam labore ex ea iure rerum quibusdam modi deserunt, ipsa, quam explicabo amet vel autem laborum doloribus enim est unde! Quam, maiores!";
  
    const returnGenre = () => {
      const genre = "RomCom";
      return genre;
    }
  
    const age=18;
  
    // if (age > 18) { 
    //   return (
    //     <div>
    //       <div><img src="images/Queen of Tears.jpg" alt="Queen of Tears.jpg" width="40%" height="40%" /></div>
    //       <h2>Name: {name} </h2>
    //       <h3>Rating: {rating} </h3>
    //       <p>Summary: {summary} </p> 
    //       <p>Genre: {returnGenre()} </p> 
    //       <button disabled>Disable</button>
         
    //     </div>
    //   )
    // } 1st example 
  
    // let canWatch = "Not Available";
    // if(age >= 18) canWatch = "Watch Now"; //-- 3rd Example 
  
    const canWatch = () => {
      if(age >= 18) return "Watch Now";
      return "Not Available";
    }
  
    return (
      <div>
        <div><img src="images/Queen of Tears.jpg" alt="Queen of Tears.jpg" width="40%" height="40%" /></div>
        <h2>Name: {name} </h2>
        <h3>Rating: {rating} </h3>
        <p>Summary: {summary} </p> 
        <p>Genre: {returnGenre()} </p> 
        {/* <button> { age >= 18 ? "Watch Now" : "Not Available" } </button> --2nd example  */}
        {/* <button> { canWatch } </button> */}
        <button> { canWatch() } </button>
        
      </div>
    )
  }


  export default NetflixSeriese;