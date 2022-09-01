import image from '../pic.png';
function Qr() {
    return (

             <div className="align-middle rounded-4" id="qr-card">
     <div id="image-cont">
      <img className="rounded-3" src={image} alt="qr code" width="250"/>
      
      <h2>Improve your frontend skills by building projects</h2>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
     </div>
    
   </div>

    );
  }
  
  export default Qr;