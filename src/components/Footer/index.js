import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="company-name-logo">
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1639481430/Group_7420_y63l48.png"
        alt="logo"
        className="footer-company-logo"
      />
      <h1 className="footer-company-name">Tasty Kitchens</h1>
    </div>
    <p className="footer-description">
      The only thing we are serious about is food. Contact us on
    </p>
    <div>
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1639482252/App_Logo_Inspiraton_111_shvvzu.png"
        alt="app"
        className="footer-icons"
      />
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1639482252/instagram_lqafs9.png"
        alt="insta"
        className="footer-icons"
      />
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1639482252/path3611_ozinth.png"
        alt="twitter"
        className="footer-icons"
      />
      <img
        src="https://res.cloudinary.com/anitha/image/upload/v1639482252/Vector_gomygh.png"
        alt="fb"
        className="footer-icons"
      />
    </div>
  </div>
)

export default Footer
