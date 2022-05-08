import React from 'react'
import './about.css'
import PersonalPicture from '../../assets/me-about.jpg'
import {GiPlantRoots} from 'react-icons/gi'
import {GiCampCookingPot} from 'react-icons/gi'
import {GiMountainClimbing} from 'react-icons/gi'
import {BiCodeCurly} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>A Little Bit About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={PersonalPicture} alt="About picture of myself." />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiPlantRoots className='about__icon'/>
              <h5>Plants</h5>
            </article>
            <article className='about__card'>
              <GiCampCookingPot className='about__icon'/>
              <h5>Cooking</h5>
            </article>
            <article className='about__card'>
              <GiMountainClimbing className='about__icon'/>
              <h5>Bouldering</h5>
            </article>
	    <article className='about__card'>
              <BiCodeCurly className='about__icon'/>
              <h5>Coding</h5>
            </article>
          </div>

          <p>
		In the last years I focused on my master studies, which I 
		successfully finished in September 2021. Now I am looking 
		for further challenges and a job where I can learn new things 
		and develop myself. 
		I would describe myself as a calm and open person who 
		learns quickly, listens well and values punctuality.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
