import './styleSidebar.css'
import home from './assets/WhatsApp_Image_2024-11-14_at_13.38.52_d9a7216f-removebg-preview.png'
import notification from './assets/app-indicator.svg'
import massage from './assets/png-clipart-speech-balloon-computer-icons-icones-angle-text-removebg-preview.png'
import accont from './assets/501-5010656_my-account-comments-my-account-icon-vector.png'
const Sidebar =() => {
    return(
        <>
            <div className="container">
                <div className=" index home">
                    <img src={home} alt="Home" />
                    <p>home</p>
                </div>
                <div className="index notification">
                    <img src={notification} alt="notfication" />
                    <p>Notfication</p>
                </div>
                <div className="index massages">
                    <img src={massage} alt="Massages" />
                    <p>Massages</p>
                </div>
                <div className="index profile">
                    <img src={accont} alt="Profile" />
                    <p>Profile</p>
                </div>
                <div className=" index trendings">
                    <p>Trending</p>
                </div>
            </div>
        </>
    )
}
export default Sidebar