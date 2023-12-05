export default function Kep(props){
    
    function kattintasKezeles(){
        //console.log("Index:", props.index)
        props.kattintasKezeles(props.index)
    }
    
    return (
        <div className="kep" onClick={kattintasKezeles}>
        <img src={props.src}></img>
        </div>
    )
}