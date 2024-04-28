import {MdLocationOn} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'

const SimilarJobs = props => {
  const {similarJobData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    rating,
    title,
  } = similarJobData

  console.log(similarJobData)

  return (
    <li className="similar-job-li-container">
      <div className="img-job-title-container">
        <img
          className="company-logo"
          src={companyLogoUrl}
          alt="similar job company logo"
        />
        <div className="rating-container">
          <h1 className="title-job-heading">{title}</h1>
          <div className="star-job-container">
            <AiFillStar className="star-job-icon" />
            <p className="rating-job-text">{rating}</p>
          </div>
        </div>
      </div>
      <div className="second-container">
        <h1 className="job-heading">Description</h1>
        <p className="para">{jobDescription}</p>
      </div>
      <div className="location-container">
        <div className="location-icon-container">
          <MdLocationOn className="location-icon" />
          <p className="location-job">{location}</p>
        </div>
        <div className="employee-container">
          <p className="iob-type">{employmentType}</p>
        </div>
      </div>
    </li>
  )
}

export default SimilarJobs
