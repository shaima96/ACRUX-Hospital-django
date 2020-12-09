import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import TwitterIcon from '@material-ui/icons/Twitter';
import './footer.css'
import CallIcon from '@material-ui/icons/Call';
function Footer() {
  return (
    <div className="footer">
      {/* <div class="container1">
        <img src={CallIcon} alt="img" class="phone" /><p>2520954</p><br />
      </div> */}
      <div class="container2">
        <MailOutlineIcon />
        <p>acrux@gmail.com</p>
      </div>

      <div class="socialMedia">
        <a href="https://www.facebook.com/" ><FacebookIcon style={{ color: "#20889C" }} stroke={"black"} stroke-width={2} /></a>
        <a href="https://www.instagram.com/" ><InstagramIcon style={{ color: "black" }} /></a>
        <a href="https://www.twitter.com/" ><TwitterIcon style={{ color: "#20889C" }} stroke={"black"} stroke-width={2} /></a>
      </div>

      <div class="container3">
        <p><b>Copyright @ 2020</b></p>
      </div>
    </div>
  );
}

export default Footer;