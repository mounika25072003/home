import {Link} from 'react-router-dom'
import {MdLoaction} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import './index.css'

const JobCardItem = props => {
  const {item} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = item
  return (
    <>
      <Link to={`/jobs/${id}`} className="link">
        <li className="job-item-container">
          <div className="first-container">
            <div className="img-title-container">
              <img
                className="company-logo"
                src={companyLogoUrl}
                alt="company logo"
              />
              <div className="title-rating-container">
                <h1 className="heading">{title}</h1>
                <div className="star-rating-container">
                  <AiFillStar className="star-icon" />
                  <p className="rating-text">{rating}</p>
                </div>
              </div>
            </div>
            <div className="location-package-container">
              <div className="location-job-container">
                <div className="location-icon-container">
                  <MdLoaction className="location-icon" />
                  <p className="location">{location}</p>
                </div>
                <div className="employee-container">
                  <p className="job-type">{employmentType}</p>
                </div>
              </div>

              <div>
                <p className="package">{packagePerAnnum}</p>
              </div>
            </div>
          </div>
          <hr className="hr-line" />
          <div className="second-container">
            <h1 className="des-head">Description</h1>
            <p className="para">{jobDescription}</p>
          </div>
        </li>
      </Link>
    </>
  )
}

export default JobCardItem
