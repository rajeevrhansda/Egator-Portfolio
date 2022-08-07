import React from 'react'
import './testimonials.css'

import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      avatar: Avatar1,
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti pariatur facere soluta explicabo dignissimos unde necessitatibus eos ipsa consequuntur, recusandae sed excepturi voluptatum hic maxime inventore reiciendis exercitationem optio quaerat voluptatibus omnis a iusto reprehenderit? Deleniti esse ea molestiae velit.',

    },
    {
      id: 2,
      avatar: Avatar2,

      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti pariatur facere soluta explicabo dignissimos unde necessitatibus eos ipsa consequuntur, recusandae sed excepturi voluptatum hic maxime inventore reiciendis exercitationem optio quaerat voluptatibus omnis a iusto reprehenderit? Deleniti esse ea molestiae velit.',

    },
    {
      id: 3,
      avatar: Avatar3,

      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti pariatur facere soluta explicabo dignissimos unde necessitatibus eos ipsa consequuntur, recusandae sed excepturi voluptatum hic maxime inventore reiciendis exercitationem optio quaerat voluptatibus omnis a iusto reprehenderit? Deleniti esse ea molestiae velit.',

    },
    {
      id: 4,
      avatar: Avatar4,

      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti pariatur facere soluta explicabo dignissimos unde necessitatibus eos ipsa consequuntur, recusandae sed excepturi voluptatum hic maxime inventore reiciendis exercitationem optio quaerat voluptatibus omnis a iusto reprehenderit? Deleniti esse ea molestiae velit.',

    }
  ]
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial__container'
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>

            )
          })
        }



      </Swiper>
    </section>
  )
}

export default Testimonials



