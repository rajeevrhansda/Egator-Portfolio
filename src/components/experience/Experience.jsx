import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skill I have</h5>
      <h2>My experience</h2>

      <div className='container experience__container' >
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Html</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SASS</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small>Experienced</small>
              </div>
            </article>

          </div>
        </div>

        {/* =================== END OF FRONT END======================= */}
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>NodeJs</h4>
                <small>Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small>Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill  className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small>Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small>Experienced</small>
              </div>
            </article><article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience