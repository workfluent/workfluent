import * as React from "react"
import { useState, useEffect } from "react"
import { Link, withPrefix, graphql, useStaticQuery } from "gatsby"
import { InlineWidget } from "react-calendly"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ChatBot from "../components/ChatBot"

const projects = [
  {
    title: "Dentist assistant",
    description: "The modern dental practice's essential support professional, skilled in patient care, instrument sterilization, and chairside assistance during complex procedures.",
    image: "dentist.jpg",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    title: "Personal secretary",
    description: "The efficient organizational expert who manages schedules, coordinates communications, and handles administrative tasks for high-level executives and busy professionals.",
    image: "secretary.jpg",
    gradient: "from-purple-500 to-cyan-500"
  },
  {
    title: "International trade broker",
    description: "The global commerce specialist who facilitates cross-border transactions, navigates complex regulations, and connects suppliers with international buyers across continents.",
    image: "trade.jpg",
    gradient: "from-cyan-500 to-pink-500"
  },
  {
    title: "Real estate broker",
    description: "The property market expert who negotiates transactions, analyzes market trends, and guides clients through the complexities of buying and selling residential and commercial properties.",
    image: "real-estate.jpg",
    gradient: "from-pink-500 to-cyan-500"
  },
]

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [showStars, setShowStars] = useState(true)

  /* Image Query */
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 800
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setShowStars(window.scrollY < 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Role Rotation Logic */
  const roles = [
    "a business owner?",
    "a doctor?",
    "an engineer?",
    "an influencer?",
    "an entrepreneur?",
    "a student?"
  ]
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex]
    const words = currentFullText.split(' ').filter(word => word !== "")

    let timer

    if (isDeleting) {
      // Fade out/Clear effect before switching
      timer = setTimeout(() => {
        setIsDeleting(false)
        setDisplayedText("")
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      }, 1000)
    } else {
      // Reveal words one by one
      const currentWordCount = displayedText ? displayedText.split(' ').length : 0

      if (currentWordCount < words.length) {
        timer = setTimeout(() => {
          setDisplayedText(words.slice(0, currentWordCount + 1).join(' '))
        }, 200) // Fast word reveal
      } else {
        // Wait before starting to delete/switch
        timer = setTimeout(() => {
          setIsDeleting(true)
        }, 2000) // Role stay visible time
      }
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex])

  /* Benefit Rotation Logic */
  const benefits = [
    "More Money",
    "Happier Customers",
    "Higher Efficiency",
    "Less Staff Hiring",
    "More Freedom"
  ]
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0)
  const [benefitDisplayedText, setBenefitDisplayedText] = useState("")
  const [isBenefitDeleting, setIsBenefitDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = benefits[currentBenefitIndex]
    const words = currentFullText.split(' ').filter(word => word !== "")

    let timer

    if (isBenefitDeleting) {
      // Fade out/Clear effect before switching
      timer = setTimeout(() => {
        setIsBenefitDeleting(false)
        setBenefitDisplayedText("")
        setCurrentBenefitIndex((prev) => (prev + 1) % benefits.length)
      }, 1000)
    } else {
      // Reveal words one by one
      const currentWordCount = benefitDisplayedText ? benefitDisplayedText.split(' ').length : 0

      if (currentWordCount < words.length) {
        timer = setTimeout(() => {
          setBenefitDisplayedText(words.slice(0, currentWordCount + 1).join(' '))
        }, 200) // Fast word reveal
      } else {
        // Wait before starting to delete/switch
        timer = setTimeout(() => {
          setIsBenefitDeleting(true)
        }, 2000) // Stay visible time
      }
    }

    return () => clearTimeout(timer)
  }, [benefitDisplayedText, isBenefitDeleting, currentBenefitIndex])

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <ChatBot />
      {/* Navbar - Hidden initially, appears on scroll */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${scrolled
          ? 'translate-y-0 opacity-100 bg-black/90 backdrop-blur-lg'
          : '-translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="max-w-[1400px] mx-auto px-5">
          <nav className="flex items-center justify-between h-20">
            {/* Logo - 24px */}
            <Link to="/" className="text-[24px] font-bold tracking-tight hover:opacity-80 transition-opacity">
              <span className="text-white">work</span>
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">fluent</span>
            </Link>

            {/* Main Menu - 16-18px */}
            <div className="hidden md:flex items-center space-x-10">
              <a href={withPrefix("/#work")} className="text-[17px] text-white/90 hover:text-white transition-colors duration-200">Work</a>
              <a href={withPrefix("/blogs")} className="text-[17px] text-white/90 hover:text-white transition-colors duration-200">Blog</a>
              <a href={withPrefix("/#services")} className="text-[17px] text-white/90 hover:text-white transition-colors duration-200">Services</a>
              <a href={withPrefix("/#about")} className="text-[17px] text-white/90 hover:text-white transition-colors duration-200">About</a>
              <a href={withPrefix("/#contact")} className="text-[17px] text-white/90 hover:text-white transition-colors duration-200">Contact</a>
            </div>

            {/* CTA Button - Scrolls to Contact */}
            <a
              href={withPrefix("/#contact")}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full text-[16px] font-semibold hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
            >
              Start
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Precise measurements */}
      <section className="relative pt-64 pb-24 mb-16 px-8 lg:px-12">
        <div className={`absolute inset-0 pointer-events-none ${showStars ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          <div className="stars"></div>
        </div>
        <div className="max-w-[1400px] mx-auto flex justify-center">
          <div className="max-w-[1200px] animate-slide-up">
            <h1 className="text-[72px] lg:text-[96px] font-black leading-[0.95] tracking-tighter mb-8">
              Future Business Solutions
              <br />
              <span className="text-[72px]">are you </span>
              <span className="inline-block">
                {roles[currentRoleIndex].split(' ').map((word, wordIndex) => {
                  const currentWordCount = displayedText ? displayedText.split(' ').length : 0
                  const isVisible = wordIndex < currentWordCount
                  return (
                    <span
                      key={`${currentRoleIndex}-${wordIndex}`}
                      className={`inline-block mr-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent text-[72px] transition-all duration-700 ease-out transform ${isVisible && !isDeleting ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-4 filter blur-sm'
                        }`}
                    >
                      {word}
                    </span>
                  )
                })}
              </span>
            </h1>

            <button className="group relative bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full text-[16px] font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]">
              <span className="relative z-10">Let's work together</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>


      {/* Projects Grid - Exact spacing */}
      <section className="py-24 mb-16 px-8 lg:px-12" id="work">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <br />
          <h2 className="text-[48px] lg:text-[56px] font-bold tracking-tight mb-16">We make solutions for <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">every </span>business</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              // Find matching image
              const imageNode = data.allFile.edges.find(edge => edge.node.relativePath === project.image)
              const image = imageNode ? getImage(imageNode.node) : null

              return (
                <div
                  key={index}
                  className="group relative bg-zinc-900/50 rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors duration-500 hover:shadow-2xl cursor-pointer overflow-hidden transform-gpu"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {image && (
                    <>
                      <div className="absolute inset-0 z-0">
                        <GatsbyImage
                          image={image}
                          alt={project.title}
                          className="w-full h-full"
                          imgClassName="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/80 z-10 group-hover:bg-black/70 transition-colors duration-500"></div>
                    </>
                  )}

                  <div className="relative z-20">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${project.gradient} mb-8 group-hover:scale-110 transition-transform duration-500`}></div>
                    <h3 className="text-[28px] font-bold mb-4 tracking-tight">{project.title}</h3>
                    <p className="text-[16px] text-gray-400 leading-relaxed mb-8">{project.description}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-[15px] font-semibold text-pink-500 hover:text-pink-400 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      Explore project
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Philosophy Sections - Proper spacing */}
      <section className="py-24 mb-16 px-8 lg:px-12 bg-gradient-to-b from-black via-purple-950/10 to-black" id="philosophy">
        <div className="max-w-[900px] mx-auto space-y-24">
          <div className="animate-fade-in">
            <h2 className="text-[42px] lg:text-[52px] font-bold leading-tight tracking-tight mb-6">
              Business Automation Means
              <br className="md:hidden" />
              <span className="inline-block ml-2">
                {benefits[currentBenefitIndex].split(' ').map((word, wordIndex) => {
                  const currentWordCount = benefitDisplayedText ? benefitDisplayedText.split(' ').length : 0
                  const isVisible = wordIndex < currentWordCount
                  return (
                    <span
                      key={`${currentBenefitIndex}-${wordIndex}`}
                      className={`inline-block mr-3 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-700 ease-out transform ${isVisible && !isBenefitDeleting ? 'opacity-100 translate-y-0 filter blur-0' : 'opacity-0 translate-y-4 filter blur-sm'
                        }`}
                    >
                      {word}
                    </span>
                  )
                })}
              </span>
            </h2>
            <p className="text-[18px] lg:text-[20px] text-gray-400 leading-relaxed mb-6">
              Because every business is different, we take the time to understand your unique needs and goals in a 1 to 1 conversation. As we listen to your needs and expectations and we tell you about opportunities we think you can capitalize on.           </p>
            <a href="#" className="inline-flex items-center text-[16px] font-semibold text-pink-500 hover:text-pink-400 transition-colors">
              Learn How We Work
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-[42px] lg:text-[52px] font-bold leading-tight tracking-tight mb-6">
              State Of The Art Web Applications and Dashboards
            </h2>
            <p className="text-[18px] lg:text-[20px] text-gray-400 leading-relaxed mb-6">
              We build web applications and dashboards that are fast, secure, and easy to use.            </p>
            <a href="#" className="inline-flex items-center text-[16px] font-semibold text-pink-500 hover:text-pink-400 transition-colors">
              Learn About The Client Experience
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-[42px] lg:text-[52px] font-bold leading-tight tracking-tight mb-6">
              Worldwide Coverage and Support In Different Languages
            </h2>
            <p className="text-[18px] lg:text-[20px] text-gray-400 leading-relaxed mb-6">
              We offer support and maintenance for our clients' web applications and dashboards.            </p>
            <a href="#" className="inline-flex items-center text-[16px] font-semibold text-pink-500 hover:text-pink-400 transition-colors">
              Learn how we think
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section - Refined cards */}
      <section className="py-24 mb-16 px-8 lg:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-transparent rounded-[32px] p-12 border border-pink-500/10 hover:border-pink-500/30 transition-all duration-500 hover:scale-[1.01]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-[40px] font-bold mb-6 tracking-tight">Brand Design</h3>
                <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
                  We don't do quick, easy, or basic. Instead we listen to your brand's inner voice that's been wanting to express itself. Lean into progressive, experimental design and let your competition blend together.
                </p>
                <a href="#" className="inline-flex items-center text-[16px] font-semibold text-pink-500 hover:text-pink-400 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="group relative bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-transparent rounded-[32px] p-12 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-500 hover:scale-[1.01]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-[40px] font-bold mb-6 tracking-tight">React Development</h3>
                <p className="text-[17px] text-gray-400 leading-relaxed mb-8">
                  Delight your customers while unleashing Google® PageSpeed™ scores on your search engine rankings. Leave your competitors in the dust with a high-performance digital presence built with React.
                </p>
                <a href="#" className="inline-flex items-center text-[16px] font-semibold text-cyan-500 hover:text-cyan-400 transition-colors">
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - WorkFluent Style */}
      <section className="py-32 mb-16 px-8 lg:px-12 bg-gradient-to-t from-black via-purple-950/10 to-black" id="contact" style={{marginBottom: 0}}>
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[42px] lg:text-[52px] font-bold leading-tight tracking-tight mb-6">
              Let's start a project together
            </h2>
            <p className="text-[18px] lg:text-[20px] text-gray-400 leading-relaxed">
              Tell us about your vision and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-[14px] text-gray-400 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 text-[16px]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[14px] text-gray-400 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 text-[16px]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-[14px] text-gray-400 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 text-[16px]"
                placeholder="Your company name"
              />
            </div>

            {/* Project Type and Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="project-type" className="block text-[14px] text-gray-400 mb-2">
                  Project Type *
                </label>
                <select
                  id="project-type"
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 text-[16px] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="brand-design">Brand Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="both">Brand + Website</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-[14px] text-gray-400 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 text-[16px] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1rem center',
                    backgroundSize: '1.5em 1.5em',
                  }}
                >
                  <option value="">Select budget</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-[14px] text-gray-400 mb-2">
                Tell us about your project *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-white/10 transition-all duration-300 text-[16px] resize-none"
                placeholder="Share your vision, goals, and timeline..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-5 rounded-full font-semibold hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(236,72,153,0.6)] transition-all duration-300 text-[17px]"
              >
                Send Message
              </button>
              <p className="text-center text-[14px] text-gray-500 mt-4">
                We'll respond within 24 hours
              </p>
            </div>
          </form>

          {/* Calendly Booking Section */}
          <div className="mt-24">
            <h3 className="text-[32px] font-bold text-center mb-12">Or book a call directly</h3>
            {isClient && (
              <div className="rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/50">
                <InlineWidget
                  url="https://calendly.com/alielhajj/30min"
                  styles={{
                    height: '700px',
                    width: '100%',
                    minWidth: '320px'
                  }}
                  pageSettings={{
                    backgroundColor: '000000',
                    hideEventTypeDetails: false,
                    hideLandingPageDetails: false,
                    primaryColor: 'ec4899',
                    textColor: 'ffffff'
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 lg:px-12 border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[14px] text-gray-500">
              © 2024 WorkFluent. All rights reserved.
            </div>
            <div className="flex items-center space-x-8">
              <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors duration-200" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors duration-200" aria-label="GitHub">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-[14px] text-gray-500 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9H12.92v1.627h.049c.496-.94 1.712-1.933 3.521-1.933 3.765 0 4.46 2.48 4.46 5.707v6.052zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.062 2.062 0 012.063-2.065 2.062 2.062 0 012.063 2.065 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
          {/* Bottom Fade Effect */}
          <div
            className="pointer-events-none fixed left-0 right-0 bottom-0 h-32 z-50"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.0) 100%)"
            }}
          />
    </div>
  )
}

export function Head() {
  return (
    <>
      <html lang="en" />
      <title>WorkFluent - Creative Brand Design and React Development</title>
      <meta name="description" content="We craft alternative brands and wicked-fast websites. Let's delight your customers and accelerate your business!" />

      <style>{`
        .stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          overflow: hidden;
        }
        .stars::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.5), transparent),
            radial-gradient(2px 2px at 250px 90px, rgba(255,255,255,0.8), transparent),
            radial-gradient(1px 1px at 400px 50px, rgba(255,255,255,0.9), transparent);
          background-repeat: repeat;
          background-size: 400px 100px;
          opacity: 0.8;
        }
      `}</style>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://workfluent.com/" />
      <meta property="og:title" content="WorkFluent - Creative Brand Design and React Development" />
      <meta property="og:description" content="We craft alternative brands and wicked-fast websites. Let's delight your customers and accelerate your business!" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://workfluent.com/" />
      <meta property="twitter:title" content="WorkFluent - Creative Brand Design and React Development" />
      <meta property="twitter:description" content="We craft alternative brands and wicked-fast websites. Let's delight your customers and accelerate your business!" />

      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#000000" />
      <link rel="canonical" href="https://workfluent.com/" />
    </>
  )
}
