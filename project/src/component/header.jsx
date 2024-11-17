import './styleHeader.css'
import imgver from './assets/1E9E6624-CE9A-452E-A0B4-5DE20D89D8C4.png'
const Header = ({ accountName, onAccountChange }) => {
    const handleAccountChange = (event) => {
        onAccountChange(event.target.value);
    }
    return(
        <header>
            <h6><span className="so">so</span>cio</h6>
            <div className="verified">
                <img src={imgver} alt="check" />
                <p>verified</p>
                <div className="userAcc">
                <select value={accountName} onChange={handleAccountChange}>
                        <option value="kigewew826">kigewew826</option>
                        <option value="user123">user123</option>
                        <option value="testaccount">testaccount</option>
                    </select>
                </div>
            </div>
        </header>
    );
};
export default Header;