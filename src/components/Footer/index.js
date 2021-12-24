import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="company-name-logo">
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1639481430/Group_7420_y63l48.png"
        alt="website-footer-logo"
        className="footer-company-logo"
      />
      <h1 className="footer-company-name">Tasty Kitchens</h1>
    </div>
    <p className="footer-description">
      The only thing we are serious about is food. Contact us on
    </p>
    <div>
      <FaPinterestSquare
        testid="pintrest-social-icon"
        className="footer-icons"
      />
      <FaInstagram testid="instagram-social-icon" className="footer-icons" />
      <FaTwitter testid="twitter-social-icon" className="footer-icons" />
      <FaFacebookSquare
        testid="facebook-social-icon"
        className="footer-icons"
      />
    </div>
  </div>
)

export default Footer
