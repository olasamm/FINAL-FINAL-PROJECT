import React from 'react'
import './Student.css';

const Students = () => {
  return (
    <>
     <div className="container-fluid text-center mt-5 ">
        <div className="row">
            <div className="col-12 col-md-6 my-5">
                <h4 className="fw-bold mx-4">For Student</h4>
                <p className="mx-4 my-3 student fs-10 fs-md-5">
                Easily submit your assignment, track <br /> deadlines, and receive Feedback-all in <br /> one place. Stay organized and never miss <br /> a deadline again. Our platform is designed <br /> to make learning smoother and stress-free. <br /> Sign up today and stay ahead
                </p>
                <button type="button" className='btn btn-primary border-rounder-0'>Sign up</button>
            </div>
            <div className="col-12 col-md-6">
                <img src="https://s3-alpha-sig.figma.com/img/8383/f06e/84f003d5d49cb0e040b003d840886c10?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M4~20Ms53A7jUwJcRU5ewvaLihh0QN1A~pyBbTrE4PCdKfO~kh7aLV1u6GrkBcv0eTmpipSNqGiupkG3FKCKVLG3NV0xg6U9HYIUeTvbeVepRTSAU99rX41oMg92dkeE90-l5HHUD7uF8UNSbsYqTevp6N1FeN9odVvL-GEZOg-RZNZIFsSxun7LqZjtUOG42CZHSqOYxGe4RlnGP6KgU8dLSQjuk5q4guxAi0BYUrRhaAr0bJbFpYqxn~MzrJtERxEMaUPjnAMU4VcTYPkqJCAXMJaLMzUN1vOcpS9zrc3zUz~6ldPU2TKu7zgpq5Pt0FiS0I3QRT7iCF3EC-w9JQ__" alt="" className='img-fluid' />
            </div>
        </div>
      </div>
    </>
  )
}

export default Students