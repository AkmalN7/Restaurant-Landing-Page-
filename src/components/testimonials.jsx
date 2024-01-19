import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

export default function Testimonials() {
return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary-subheading'>Testimonials</p>
            <h1 className='primary-heading'> What they are saying </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quisquam vel repellat exercitationem id nihil illo ducimus deleniti provident ad voluptatum rerum minus.
            </p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae eos impedit perspiciatis sapiente voluptas excepturi dolor eum distinctio, corporis alias tempore ullam delectus assumenda libero repellendus.</p>
            <div className="testimonials-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
)
}
