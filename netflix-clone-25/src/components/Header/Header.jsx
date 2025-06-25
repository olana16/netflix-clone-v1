import './Header.css'
import headerlogo from '../../assets/images/Netflix_Logo_RGB.png'
import SearchIcon from '@mui/icons-material/Search';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>

        <div className="header_container">

            <div className="header_left">

                <ul>
                    <li><img src={headerlogo} alt="netflix-logo" width="180" /></li>
                    <li>Home</li>
                    <li>TVShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>My List</li>
                    <li>Browse by languge</li>
                </ul>

            </div>

            <div className="header_right">

              <ul>
                <li><SearchIcon/></li>
                <li><AddAlertIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropDownIcon/></li>
              </ul>

            </div>
        </div>
        
    </div>
  )
}

export default Header