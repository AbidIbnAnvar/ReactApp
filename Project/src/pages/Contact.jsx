import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div>
      <section class="contact-main">
            <div class="contact-textblock">
                <h1>CONTACT US</h1>
                <div class="contacts">
                    <div class="contact1">
                        <div class="icons"><span class="material-symbols-rounded">
                            location_on</span>
                        </div>
                        <div class="icon-text">Our Location</div>
                        
                    </div>
                    <div class="contact2">
                        <div class="icons"><span class="material-symbols-rounded">
                            call</span>
                        </div>
                        <div class="icon-text">Call us</div>
                    </div>
                    <div class="contact3">
                        <div class="icons"><span class="material-symbols-rounded">
                            mail</span>
                        </div>
                        <div class="icon-text">Email us</div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact
