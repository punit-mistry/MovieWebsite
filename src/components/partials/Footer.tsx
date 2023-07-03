import conf from "../../config";
import Image from '../../assets/logo.png'
export default function Footer(){
  return (
    <footer>
      <img src={Image} alt="Logo" />

      <div className="links">
       Happy Watching...
        
      </div>

      <p className="disclaimer">&copy;  We do not store any media.</p>
    </footer>
  )
}