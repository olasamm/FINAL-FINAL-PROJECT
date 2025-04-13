import React from 'react'
import './Card.css';

const Card = () => {
  return (
      <div className='track '>
        <div className=' gap-5 row justify-content-center my-5 '>
          <div class="card" style={{width: "23rem", height: "21rem"}}>
            <div class="card-body">
              <h5 class="card-title text-center mt-5 my-4 fw-bold">Students</h5>
              <p class="card-text text-center">Submit Assignments, <br />  Track deadlines <br />  Receive Feedbacks & Grades <br /> Resubmit <br />  Stay Organized</p>
            </div>
          </div>
          <div class="card" style={{width: "23rem", height: "21rem"}}>
            <div class="card-body">
              <h5 class="card-title text-center fw-bold mt-5 my-4">Lecturer</h5>
              <p class="card-text text-center">Create & Manage Assignment <br />  Receive & Review Submissions <br />  Grades & Provide Feedbacks <br /> Track Students Progess <br />  Communicate with Students</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Card