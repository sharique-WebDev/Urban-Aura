import React from 'react'

const Section = ({Image}) => {
  return (
    <>
        <div className="container hero-section" id='hero'>
            <div className="row text-white">
                <div className="col-lg-7 hero-left">
                    <h2>Step into Style with <span className="text-warning brand-name">Urban Aura</span> Where Fashion Meets Comfort!</h2>
                    <p className=''>
                        <em>Discover the latest trends, timeless classics, and outfits that speak your vibe. Shop now and redefine your wardrobe!</em>
                    </p>
                    <a href="#popular" className='btn btn-danger btn-lg'>Explore Fashion</a>
                </div>
                <div className="col-lg-4 offset-lg-1 hero-img text-center">
                    <img className='img-fluid' src={Image} alt=""/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Section;