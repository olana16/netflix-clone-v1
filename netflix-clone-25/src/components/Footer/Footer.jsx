import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer_outer_container'>

      <div className="footer_inner_container">

        <div className='footer_icons'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />

        </div>

        <div className="footer_data">

          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>

         <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs </li>
              <li>Cookies Prefernces </li>
            </ul>
          </div>

           <div>
            <ul>
              <li>Gift Card</li>
              <li>Term of Use </li>
              <li>Corporate Informations</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy  </li>
              <li>Contacut us </li>
            </ul>
          </div>

        </div>

        <div>
          <p className="service_code">
            Service Code
          </p>
        </div>

        <div>
          <p className='copy_write'>&copy; 1997 - 2025 Netflix.inc Company.</p>

        </div>

      </div>

    </div>
  )
}

export default Footer