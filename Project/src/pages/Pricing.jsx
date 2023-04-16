import React from 'react'
import './Pricing.css'

function Pricing() {
  return (
    <div>
      <section className="pricing-main">
        <h1>PRICING</h1>
            <div className="boxes">
                <div className="box1">
                    <h2 className="box-heading">BASIC</h2>
                    <div className="price-container"><h6><div className="price">$39</div>/MONTH</h6></div>
                </div>
                <div className="box2">
                    <h2 className="box-heading">PLUS</h2>
                    
                    <div className="price-container"><h6><div className="price">$59</div>/MONTH</h6></div>
                </div>

                <div className="box3">
                    <h2 className="box-heading">PRO</h2>
                    <div className="price-container"><h6><div className="price">$89</div>/MONTH</h6></div>
                </div>
                
                
            </div>
      </section>
            
    </div>
  )
}

export default Pricing
