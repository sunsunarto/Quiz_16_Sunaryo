import './styleMiddleComponent.css'
import logoK from './assets/Screenshot_2024-11-15_124027-removebg-preview.png'
const MiddleComponent = () => {
    return(
        <body>
            <div className="logo">
                <img src={logoK} alt="" />
                <textarea cols={50}> what happend today?</textarea>
            </div>
        </body>
    )
}
export default MiddleComponent