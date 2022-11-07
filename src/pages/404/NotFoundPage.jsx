import chihuahua from "./../../assets/images/picture1.jpg"
const NotFoundComp = () => (
<>
    <div style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Page not found</h1>
        <img src={chihuahua} alt="photo" style={{height: "500px", width: "500px"}}/>
    </div>
    
</>    
)

export default NotFoundComp;
