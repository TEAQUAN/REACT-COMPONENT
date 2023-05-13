const Myadde = () => {
    const styles = {
        main: {
            backgroundColor: "lightblue",
          width: "100%",
          textAlign: "center"
          
        },
        inputText: {
          padding: "10px",
          color: "red",
        },
      };
  
    return (
        
      <div className="main" style={styles.main}>
        <h2  style={{textAlign: "center"}}> PoliceRecord</h2>
        <h1 style={{textDecoration: "underline"}}>OFFENSES</h1>
        <h3  style={{textAlign: "center"}}>Smuggling</h3>
        <h3 style={{textAlign: "center"}}>Transport of stolen goods</h3>
        <h3 style={{textAlign: "center"}}>cyberstalking</h3>
        
        <hr></hr>
        <hr></hr>
        <h2  style={{textDecoration: "underline"}}> ADDRESS</h2>
        <h1 style={{textAlign: "center"}}>LAGOS NIGERIA</h1>
        <h3  style={{textAlign: "center"}}>230 Herbert Macaulay Way</h3>
        <h3 style={{textAlign: "center"}}> Alagomeji-Yaba</h3>
        <h3 style={{textAlign: "center"}}>Postal code:101245, Lagos</h3>

      </div>
      
    );
  };
  export default Myadde;