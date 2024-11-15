import './styleHeader.css'
import imgver from './assets/1E9E6624-CE9A-452E-A0B4-5DE20D89D8C4.png'
const Header =() =>{
    return(
        <header>
            <h6><span className="so">so</span>cio</h6>
            <div className="verified">
                <img src={imgver} alt="check" />
                <p>verified</p>
                <div className="userAcc">
                    <select>
                        <option>
                        kigewew826
                        </option>
                    </select>
                </div>
            </div>
        </header>
    );
};
export default Header;