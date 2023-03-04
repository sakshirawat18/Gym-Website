import '../style/Programs.css'
import { programsData } from '../data/programsData'
import right_arrow from '../assests/right_arrow.png';
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="program-header">
        <span className='outline-text'>Explore our</span>
        <span>Programs</span>
        <span className='outline-text'>to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) =>(
        <div className="category" key={program.id}>
        {program.image}
        <span>{program.heading}</span>
        <span>{program.details}</span>
        <div className="join-now">
        Join Now
          <span><img src={right_arrow} alt="" /></span>
        </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
