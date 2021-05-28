import React from 'react'
import "./Footer.css"
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

function Footer() {
    return (
        <div className="footer">
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">About</h5>
                <p>
                  Everything about black-fungal
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h4 className="title">Go to --> </h4>
                <ul>
                  <li className="list-unstyled">
                    <a id="link__x" href="#!" color="black ">Our team members</a>
                  </li>
                  <li className="list-unstyled">
                    <a id="link__x" href="#!">Contact us</a>
                  </li>
                  <li className="list-unstyled">
                    <a id="link__x" href="#!">Git repo</a>
                  </li>
                  <li className="list-unstyled">
                    <a id="link__x" href="#!">about</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="#"> Our Team </a>
            </MDBContainer>
          </div>
        </MDBFooter>
        </div>
      );
}

export default Footer
