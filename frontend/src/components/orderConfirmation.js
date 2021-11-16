import img from './Daco.png'

export default function OrderConfirmation() {

    return (
        <div style={{display: "flex"},{justifyContent: "space-evenly"}}>
            <div>
            <img src={img} alt={"image"} style={{width: "150px", height: "150px", padding: "40px"}}></img>
            <img src={img} alt={"image"} style={{width: "150px", height: "150px", padding: "40px"}}></img>
            <img src={img} alt={"image"} style={{width: "150px", height: "150px", padding: "40px"}}></img>
            <img src={img} alt={"image"} style={{width: "150px", height: "150px", padding: "40px"}}></img>
            </div>
            <div style={{display: "flex",justifyContent: "space-evenly"}}>
            <spam>1</spam>
            <spam>2</spam>
            <spam>3</spam>
            <spam>4</spam>
            </div>
        </div>
    );
}