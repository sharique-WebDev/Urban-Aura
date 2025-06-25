import indianBanner from '../Assets/indianBanner.jpg'
import { useNavigate } from 'react-router-dom';


const IndianListing = () => {
  const navigate = useNavigate();

  const handleIndianClick = () => {
    navigate('/indian');
  };
  return (
    <>
      {/* Indian Outfits Banner Card */}
      <div className="container my-5 py-4 indian-section">
        <div
          className="card indian-card position-relative overflow-hidden"
          style={{ cursor: 'pointer' }}
          onClick={handleIndianClick}
        >
          <img
            src={indianBanner}
            className="card-img img-fluid"
            alt="Indian Outfits"
            style={{ filter: 'brightness(0.8)', height: '300px', objectFit: 'cover' }}
          />
          <div className="card-overlay position-absolute top-50 start-0 translate-middle-y text-white px-4">
            <h2 className="fw-bold fs-3 mb-2">Explore Indian Outfits</h2>
            <p className="mb-3">Elegant, traditional, and timeless styles.</p>
            <button className="btn btn-warning text-dark fw-semibold rounded-pill px-4 py-2">
              View Collection
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndianListing
