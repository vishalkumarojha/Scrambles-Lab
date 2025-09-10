"use client"

import type React from "react"
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperCore } from "swiper"
import { Navigation, Pagination, EffectCoverflow, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/autoplay"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

interface Mentor {
  id: number
  name: string
  title: string
  company: string
  companyLogo: string
  image: string
  bio: string
  expertise: string
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Arjun Vaidya",
    title: "Co-Founder",
    company: "VII",
    companyLogo: "/placeholder.svg?height=40&width=80&text=VII",
    image: "/professional-headshot-of-arjun-vaidya.jpg",
    bio: "Leading digital transformation initiatives with over 15 years of experience in marketing strategy.",
    expertise: "Digital Marketing, Brand Strategy",
  },
  {
    id: 2,
    name: "Shitij Jain",
    title: "Ex - Head of Media",
    company: "Apple",
    companyLogo: "/apple-logo.jpg",
    image: "/professional-headshot-of-shitij-jain.jpg",
    bio: "Former Apple executive with expertise in global media campaigns and brand positioning.",
    expertise: "Media Strategy, Global Campaigns",
  },
  {
    id: 3,
    name: "Arpan Biswas",
    title: "Chief Marketing Officer",
    company: "AJIO",
    companyLogo: "/ajio-logo.jpg",
    image: "/professional-headshot-of-arpan-biswas.jpg",
    bio: "CMO at AJIO with deep expertise in e-commerce marketing and customer acquisition.",
    expertise: "E-commerce, Customer Acquisition",
  },
  {
    id: 4,
    name: "Priya Sharma",
    title: "VP Marketing",
    company: "Flipkart",
    companyLogo: "/placeholder.svg?height=40&width=80&text=Flipkart",
    image: "/placeholder.svg?height=200&width=200&text=Priya+Sharma",
    bio: "VP Marketing at Flipkart, specializing in performance marketing and growth strategies.",
    expertise: "Performance Marketing, Growth",
  },
  {
    id: 5,
    name: "Rahul Kumar",
    title: "Head of Growth",
    company: "Zomato",
    companyLogo: "/placeholder.svg?height=40&width=80&text=Zomato",
    image: "/placeholder.svg?height=200&width=200&text=Rahul+Kumar",
    bio: "Growth expert at Zomato with focus on user acquisition and retention strategies.",
    expertise: "Growth Hacking, User Retention",
  },
  {
    id: 6,
    name: "Anita Desai",
    title: "Marketing Director",
    company: "Swiggy",
    companyLogo: "/placeholder.svg?height=40&width=80&text=Swiggy",
    image: "/placeholder.svg?height=200&width=200&text=Anita+Desai",
    bio: "Marketing Director at Swiggy, leading brand campaigns and market expansion initiatives.",
    expertise: "Brand Campaigns, Market Expansion",
  },
]

const MentorsSection: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null)
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              Learn with <span className="text-lime-400">Mentors</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Get guidance from industry leaders who have built and scaled successful marketing teams
            </p>
          </div>

          <div className="relative">
            <Swiper
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView="auto"
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet !bg-gray-600",
                bulletActiveClass: "swiper-pagination-bullet-active !bg-lime-400",
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              className="mentor-slider pb-12"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              onSwiper={(swiper: SwiperCore) => {
                swiperRef.current = swiper
              }}
            >
              {mentors.map((mentor: Mentor) => (
                <SwiperSlide key={mentor.id} className="!w-80 !h-auto">
                  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 hover:bg-gray-800/90 hover:border-lime-400/30 transition-all duration-300 group h-full">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700 ring-2 ring-gray-600/50 group-hover:ring-lime-400/50 transition-all duration-300">
                        <img
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-lime-400 transition-colors duration-300">
                        {mentor.name}
                      </h3>
                      <p className="text-gray-400 mb-3 text-sm">{mentor.title}</p>
                      <div className="bg-white rounded-full px-4 py-2 inline-flex items-center justify-center shadow-lg group-hover:bg-lime-400 transition-colors duration-300 mb-4">
                        <img
                          src={mentor.companyLogo || "/placeholder.svg"}
                          alt={mentor.company}
                          className="h-5 object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-gray-300 text-sm mb-3 leading-relaxed">{mentor.bio}</p>
                      <div className="text-xs text-lime-400 font-medium">{mentor.expertise}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-white !bg-gray-800/80 !w-12 !h-12 !rounded-full hover:!bg-gray-700 !transition-all !duration-200 after:!text-lg after:!font-bold !-left-2 !top-1/2 !-translate-y-1/2 md:!block !hidden !z-10"></div>
            <div className="swiper-button-next !text-white !bg-lime-400 !w-12 !h-12 !rounded-full hover:!bg-lime-300 !transition-all !duration-200 after:!text-lg after:!font-bold after:!text-gray-900 !-right-2 !top-1/2 !-translate-y-1/2 md:!block !hidden !z-10"></div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .mentor-slider {
            padding: 20px 0;
          }
          
          .mentor-slider .swiper-pagination {
            bottom: 0;
          }
          
          .mentor-slider .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            margin: 0 4px;
            opacity: 0.5;
          }
          
          .mentor-slider .swiper-pagination-bullet-active {
            opacity: 1;
          }
        `,
        }}
      />
    </section>
  )
}

export default MentorsSection