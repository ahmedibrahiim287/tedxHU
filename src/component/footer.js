        import React, { Component } from "react";
     

        export class Footer extends Component {
          render() {
            return (
            
            <div className="container navbar-fixed-bottom">
        <div className=" text-center navbar-dark">
          <p>
            &copy;2021 TEDxHelwanUniversity. This independent TEDx event is operated under license from TED.{" "}
          </p>
          <div className="social-fot">
          <ul className="displayi">
            <li>
              <a target="_blank" rel="noreferrer" href={'https://www.twitter.com'}
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={'https://www.twitter.com'}>
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href={'https://www.twitter.com'}>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    
    );
}
}

export default Footer;

