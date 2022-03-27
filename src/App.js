import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import corner from './images/corner.svg';
import hero from './images/hero.svg';
import Separator from './Separator';
import question from './images/question.svg';
import quick from './images/quick.svg';
import creative from './images/creative.svg';
import happy from './images/happy.svg';
import contact from './images/contact.svg';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [loading, setLoading] = useState(true)
  const handleThemeChange = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  }
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
    if (localStorage.getItem('theme'))
      setTheme(localStorage.getItem('theme'))
    setLoading(false)
  }, [])

  useEffect(() => {
    const html = document.getElementById('mainHTML');
    html.classList = theme;
    localStorage.setItem('theme', theme)
  }, [theme])
  const features = [
    {
      text: 'Great user experience',
      img: happy
    }
    , {
      text: 'Creative team.',
      img: creative
    }, {
      text: 'Quick work',
      img: quick
    }
  ];
  const products = [
    {
      name: 'alfa-zero',
      features: ['1-3 pages website.', 'no design file associated with.', 'delivery in 1-3 days.']
    },
    {
      name: 'alfa-pro',
      features: ['up to 7 pages.', 'design file associated with.', 'custom time delivery.', 'whole professional team working on your project.', 'great ui ux ']
    }
  ]
  return (
    loading ?
      <div className={`dark:bg-slate-900 bg-indigo-100 border-2 border-blue-300 shadow w-5/6 rounded-md p-4 mx-auto h-screen `}>
        <div className="animate-pulse flex space-x-4 w-full">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-48 dark:bg-slate-700 bg-slate-400 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-48 dark:bg-slate-700 bg-slate-400 rounded col-span-2"></div>
                <div className="h-48 dark:bg-slate-700 bg-slate-400 rounded col-span-1"></div>
              </div>
              <div className="h-48 dark:bg-slate-700 bg-slate-400 rounded"></div>
            </div>
          </div>
        </div>
      </div>
      :

      <>
        <div className="dark:bg-slate-900 bg-indigo-100 pt-4 relative max-w-screen">
          <div className="w-5/6 mx-auto main dark:bg-slate-800 dark:text-white">
            <img src={corner} alt="up-corner" className="absolute top-4 left-0 w-8 h-8 md:w-16 md:h-16" />
            <img src={corner} alt="up-corner" className="absolute bottom-4 right-0 rotate-180 w-8 h-8 md:w-16 md:h-16" />
            <header className="header sticky top-0 opacity-90 hover:opacity-100 transition-all duration-300 z-10 sm:px-3 pr-3 items-center mx-auto h-16 bg-white dark:bg-slate-800 flex justify-between">
              <a href="#">

                <img src="logo.png" alt="logo" className="mt-3 sm:ml-4" />
              </a>
              <ul className="flex items-center align-middle">
                <li>
                  <button className="h-5 w-5 sm:h-6 sm:w-6 transition-all duration-500" onClick={handleThemeChange}>
                    {theme === 'dark' ?
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="hover:fill-slate-100 transition-colors duration-200" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="hover:fill-slate-500 transition-colors duration-200" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                      </svg>}
                  </button>
                </li>
                <li>
                  <a href="#contact" className="mx-4 font-bold transition-all duration-300 contact-btn hover:bg-slate-400 dark:hover:bg-slate-600 rounded">Contact</a>
                </li>
                <li>
                  <a href="#services" className="main-btn transition-all duration-200 rounded">Purshase</a>
                </li>
              </ul>
            </header>
            <section className="ml-4 mx-auto flex">
              <div className="text-center" data-aos='fade-right'>
                <h1 className=" mt-3 text-3xl font-bold md:text-5xl md:mt-8">Piralfa</h1>
                <h3 className="font-bold text-base md:text-xl  opacity-60 mt-5">The best way to make your ideas come true.
                </h3>
                <a href="#services" className="rounded main-btn inline-block transition-all duration-200 mt-5">Purshase</a>
              </div>

              <img src={hero} alt="hero" className="overflow-hidden mr-10 max-h-96 max-w-96" data-aos='flip-right' data-aos-delay='100' />

            </section>

            <Separator content="Features" />
            <section className="sec flex flex-col sm:grid grid-cols-2 grid-rows-2 gap-24 w-4/5 mx-auto">
              <div className="text-center" data-aos='fade-right'>
                <img src={question} alt="" className="mx-auto h-48 w-48" />
                <h3 className="font-bold text-2xl opacity-60">Why choose us?</h3>
              </div>
              {features.map((feature, idx) => {
                return <div key={idx} className="text-center" data-aos={`${idx % 2 == 0 ? 'fade-left' : 'fade-right'}`}

                >
                  <img src={feature.img} alt="" className="mx-auto h-48 w-48" />
                  <h3 className="font-bold text-xl opacity-60">{idx + 1}. {feature.text}</h3>
                </div>
              })}

            </section>

            <Separator content="Services" />
            <section className="flex flex-col sm:flex-row justify-around">
              {products.map((product, idx) => {
                return <div key={idx} className="product relative w-4/5 sm:w-5/12 h-96 mb-7 sm:mb-0 mx-auto flex flex-col overflow-y-auto"
                  data-aos={`${idx ? 'flip-left' : 'flip-right'}`}
                  data-aos-delay='100'
                >
                  <h2 className='mx-auto mt-8 mb-8 font-black text-2xl uppercase'>{product.name}</h2>
                  <ol className='list-disc ml-4'>
                    {product.features.map((feature, idx) => <li key={idx} className='ml-6 mb-4 font-semibold capitalize'>{feature}</li>)}
                  </ol >
                  <div className="mx-auto block">
                    <a href="#contact" className="main-btn transition-all duration-300 absolute rounded  mx-auto bottom-0 left-0 text-center font-bold right-0 hover:bg-amber-500 ">Purshase</a>
                  </div>

                </div>
              })}
            </section>

            <Separator content="Contact us" />
            <section id='contact' 
            data-aos='zoom-in'
            >
              <div className="my-4 text-center flex flex-col sm:flex-row justify-between items-center">
                <h3 className="font-bold ml-8 mx-auto sm:text-xl dark:opacity-60 text-seco mb-4">Feel free to ask us whatever you want, <br /> whenever you want. </h3>
                <div className='mx-auto'>
                  <ul className="opacity-60 sm:font-semibold ">
                    <li className="flex my-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-seco mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <p>
                        75 75 75 75
                      </p>
                    </li>
                    <li className="flex my-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 fill-seco" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <p>
                        contact@piralfa.com
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between px-4">
                <form action="" className="md:w-5/12 flex flex-col px-4 py-4">
                  <input type="text" className="bg-transparent outline-none border-b-2 border-seco focus:border-b-4 transition-all duration-150 my-4 px-2" placeholder="name & surname" />
                  <input type="email" className="bg-transparent outline-none border-b-2 border-seco focus:border-b-4 transition-all duration-150 my-4 px-2" placeholder="your e-mail" />
                  <textarea name="user-message" id="user-message" cols="30" rows="30" placeholder="your message" className="bg-transparent outline-none ring-1 ring-seco focus:ring-2 h-28 resize-none my-4"></textarea>
                  <button type="submit" className="flex rounded bg-seco opacity-80 font-bold hover:opacity-100 transition-opacity duration-200 mx-auto items-center align-middle p-2">
                    <p className="mr-1">Send</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </form>
                <img src={contact} alt="contact-us" className="max-w-sm w-4/12 mx-auto" />
              </div>
            </section>
            <footer className="dark:bg-white text-center h-4 mt-8 bg-slate-900 text-white dark:text-black">
              Copyright &copy; {new Date().getFullYear()}. all rights reserved
            </footer>
          </div>
        </div>
      </>

  );
}
export default App;
