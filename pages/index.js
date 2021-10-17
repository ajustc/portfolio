import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home () {
  const [bgnavbar, setBgnavbar] = useState(false)
  const [togglenavbar, setToggleNavbar] = useState(false)
  const [certificate, setCertificate] = useState(1)
  const [activity, setActivity] = useState(1)
  const [modal, setModal] = useState(0)
  const [closemodal, setCloseModal] = useState(false)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setBgnavbar(true)
    } else {
      setBgnavbar(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
  }, [])

  return (
    <>
      <Head>
        <title>JUST YA</title>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gradient-to-b from-gray-300/70 to-gray-600/70'>
        <nav
          className={`navbar w-full mx-auto py-4 z-50 xl:px-40 md:px-20 px-0 transition-all
        ${bgnavbar ? 'bg-white/90 fixed' : ''}`}
        >
          <div className='flex items-center'>
            <div className='w-4/12'>
              <Link href='/'>
                <a className='group flex items-center justify-center cursor-pointer'>
                  <div className='w-10 h-10 bg-gray-100/50 group-hover:bg-white flex items-center justify-center rounded mr-4 shadow'>
                    J
                  </div>
                  Just
                </a>
              </Link>
            </div>
            <div className='md:hidden w-8/12 flex justify-end mr-10'>
              {!togglenavbar ? (
                <button
                  onClick={() => {
                    setToggleNavbar(!togglenavbar)
                    console.log(togglenavbar)
                  }}
                  className='bg-gray-100/50 w-10 h-10 group-hover:bg-white flex items-center justify-center rounded shadow'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-align-justify'
                  >
                    <line x1='21' y1='10' x2='3' y2='10'></line>
                    <line x1='21' y1='6' x2='3' y2='6'></line>
                    <line x1='21' y1='14' x2='3' y2='14'></line>
                    <line x1='21' y1='18' x2='3' y2='18'></line>
                  </svg>
                </button>
              ) : (
                <button
                  onClick={() => {
                    setToggleNavbar(false)
                  }}
                  className='bg-gray-100/50 w-10 h-10 group-hover:bg-white flex items-center justify-center rounded shadow'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='black'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='feather feather-x'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                </button>
              )}
            </div>
            <div className='md:w-8/12'>
              <div className='flex justify-center'>
                <ul
                  className={`md:flex md:space-x-6 md:static md:w-0 md:flex-row transition-all absolute top-16 flex-col bg-white w-full
              ${togglenavbar ? 'left-0' : 'left-full'}
              `}
                >
                  <li className='py-3 ml-10'>
                    <Link href='/'>
                      <a>Hero</a>
                    </Link>
                  </li>
                  <li className='py-3 ml-10'>
                    <Link href='#tool'>
                      <a>Tool</a>
                    </Link>
                  </li>
                  <li className='py-3 ml-10'>
                    <Link href='#certificate'>
                      <a>Certificate</a>
                    </Link>
                  </li>
                  <li className='py-3 ml-10'>
                    <Link href='#activity'>
                      <a>Activity</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        <div id='hero' className='hero'>
          <div className='container mx-auto md:flex w-2/3 py-20'>
            <div className='block md:hidden w-full md:w-7/12 mb-4'>
              <div className='flex md:justify-end justify-center'>
                <img
                  src='/img/pp2.png'
                  className='w-1/2 md:w-3/4 lg:w-1/2 rounded'
                />
              </div>
            </div>

            <div className='w-full md:w-6/12 md:flex md:items-center'>
              <div className='flex flex-col'>
                <h1 className='text-2xl'>Hi! My name Rio Justicio</h1>
                <p className=''>
                  I graduate in informatics engineer. Where do I understand the
                  basic concepts of MVC in PHP programming language with the
                  help of a framework like CodeIgniter or Laravel, thank u.
                </p>
                <div className='flex my-3'>
                  <div className='flex items-center text-center'>
                    <p>Social : </p>
                  </div>
                  <div className='group text-center mx-2'>
                    <Link href='mailto:riojusticiof@gmail.com'>
                      <a>
                        <div className='bg-gray-100/50 group-hover:bg-white rounded-full flex justify-center w-11 h-11'>
                          <img src='/img/GMAIL.svg' className='w-5' />
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className='group text-center mx-2'>
                    <Link href='https://www.linkedin.com/in/rio-justicio-250b31158/'>
                      <a>
                        <div className='bg-gray-100/50 group-hover:bg-white rounded-full flex justify-center w-11 h-11'>
                          <img src='/img/LinkedIn.svg' className='w-5' />
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className='group text-center mx-2'>
                    <Link href='https://www.github.com/ajustc'>
                      <a>
                        <div className='bg-gray-100/50 group-hover:bg-white rounded-full flex justify-center w-11 h-11'>
                          <img src='/img/Github.svg' className='w-5' />
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className='hidden md:block md:w-7/12'>
              <div className='flex md:justify-end justify-center'>
                <img
                  src='/img/pp2.png'
                  className='w-2/3 md:w-3/4 lg:w-1/2 rounded'
                />
              </div>
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div id='tool' className='group'>
          <div className='container mx-auto p-20'>
            <div className='w-full h-auto'>
              <div className='flex justify-center'>
                <div className='flex flex-col'>
                  <h1 className='text-3xl font-bold'>Tools</h1>
                  <hr className='w-50 my-10' />
                </div>
              </div>
            </div>

            <div className='w-full md:w-8/12 mx-auto'>
              <div className='text-center text-lg'>
                <p>
                  I need some time to improve my skills in web development. And
                  now I am quite confident in building applications using tools
                  like below :
                </p>
              </div>
            </div>

            <div className='w-full md:w-8/12 mx-auto mt-10'>
              <div className='flex flex-wrap justify-center'>
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/HTML5.svg'
                  title='HTML'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/CSS3.svg'
                  title='CSS'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/JAVASCRIPT.svg'
                  title='JavaScript'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/BOOTSTRAP5.svg'
                  title='Bootstrap'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/PHP.svg'
                  title='PHP'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/CodeIgniter.svg'
                  title='CodeIgniter'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/Laravel.svg'
                  title='Laravel'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/MySQL.svg'
                  title='MYSQL'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/Git.svg'
                  title='GIT'
                />
                <img
                  className='w-20 h-20 m-3 group-hover:drop-shadow-md transition-all grayscale group-hover:grayscale-0'
                  src='/img/React.svg'
                  title='React'
                />
              </div>
            </div>
          </div>
        </div>

        {/* CERTIFICATE */}
        <div id='certificate' className='group'>
          <div className='container mx-auto p-20'>
            <div className='w-full h-auto'>
              <div className='flex justify-center'>
                <div className='flex flex-col'>
                  <h1 className='text-3xl font-bold'>Certificates</h1>
                  <hr className='w-50 my-10' />
                </div>
              </div>
            </div>

            <div className='md:w-6/12 w-full mx-auto'>
              <div className='text-center'>
                <button
                  onClick={() => {
                    setCertificate(1)
                  }}
                  className={`rounded-full w-26 py-2 px-4 mx-2 ${
                    certificate === 1
                      ? 'bg-gray-200 shadow-lg'
                      : 'bg-none border text-white'
                  }`}
                >
                  Progate
                </button>
                <button
                  onClick={() => {
                    setCertificate(2)
                  }}
                  className={`rounded-full w-26 py-2 px-4 mx-2 ${
                    certificate === 2
                      ? 'bg-gray-200 shadow-lg'
                      : 'bg-none border text-white'
                  }`}
                >
                  Udemy
                </button>
              </div>
            </div>

            <div className='show xl:w-9/12 lg:w-full md:w-full mx-auto mt-10'>
              <div className='flex flex-wrap justify-center'>
                <div
                  className={`${
                    certificate === 1 ? 'transition-all block' : 'hidden'
                  }`}
                >
                  <div className='flex flex-wrap items-center justify-center'>
                    <img
                      className='md:w-1/2 w-full p-2'
                      src='/img/sertifikat/progate/HTMLCSS.png'
                      alt=''
                    />
                    <img
                      className='md:w-1/2 w-full p-2'
                      src='/img/sertifikat/progate/JavaScript.png'
                      alt=''
                    />
                    <img
                      className='md:w-1/2 w-full p-2'
                      src='/img/sertifikat/progate/PHP.png'
                      alt=''
                    />
                    <img
                      className='md:w-1/2 w-full p-2'
                      src='/img/sertifikat/progate/SQL.png'
                      alt=''
                    />
                  </div>
                </div>
                <div
                  className={`${
                    certificate === 2 ? 'transition-all block' : 'hidden'
                  }`}
                >
                  <div className='flex flex-wrap items-center justify-center'>
                    <img
                      className='md:w-1/2 w-full p-2'
                      src='/img/sertifikat/udemy/JavaScript-Bootstrap-PHP.jpg'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ACTIVITY */}
        <div id='activity' className='group'>
          <div className='container mx-auto p-20'>
            <div className='w-full h-auto'>
              <div className='flex justify-center'>
                <div className='flex flex-col'>
                  <h1 className='text-3xl font-bold'>Activities</h1>
                  <hr className='w-50 my-10' />
                </div>
              </div>
            </div>

            <div className='md:w-6/12 w-full mx-auto'>
              <div className='text-center'>
                <button
                  onClick={() => {
                    setActivity(1)
                  }}
                  className={`rounded-full w-26 py-2 px-4 mx-2 ${
                    activity === 1
                      ? 'bg-gray-200 shadow-lg'
                      : 'bg-none border text-white'
                  }`}
                >
                  Learn
                </button>
                <button
                  onClick={() => {
                    setActivity(2)
                  }}
                  className={`rounded-full w-26 py-2 px-4 mx-2 ${
                    activity === 2
                      ? 'bg-gray-200 shadow-lg'
                      : 'bg-none border text-white'
                  }`}
                >
                  Project
                </button>
              </div>
            </div>

            <div className='xl:w-9/12 lg:w-full md:w-full sm:w-full mx-auto mt-10'>
              <div className='flex flex-wrap justify-center'>
                {/* Learn */}
                <div
                  className={`${
                    activity === 1 ? 'transition-all block' : 'hidden'
                  }`}
                >
                  <div className='flex flex-wrap items-center justify-center'>
                    <button
                      className='flex md:w-1/2 flex-col items-center justify-center p-3 hover:shadow-xl hover:bg-white/10 rounded transition-all'
                      onClick={() => {
                        setModal(1)
                      }}
                    >
                      <img
                        className='w-full m-2'
                        src='/img/learn/SlicingBlog.JPG'
                        alt=''
                      />
                      <span className='bg-white border-2 border-transparent transition-all focus:hidden hover:border-2 py-2 px-4 rounded'>
                        View
                      </span>
                    </button>
                    <button
                      className='flex md:w-1/2 flex-col items-center justify-center p-3 hover:shadow-xl hover:bg-white/10 rounded transition-all'
                      onClick={() => {
                        setModal(1)
                      }}
                    >
                      <img
                        className='w-full m-2'
                        src='/img/learn/SlicingBlog.JPG'
                        alt=''
                      />
                      <span className='bg-white border-2 border-transparent transition-all focus:hidden hover:border-2 py-2 px-4 rounded'>
                        View
                      </span>
                    </button>

                    <div
                      className={`modal h-screen w-full fixed left-0 top-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50
                    ${modal === 0 ? 'hidden' : 'block'}
                    `}
                    >
                      <div className='bg-white rounded shadow-lg w-10/12 md:w-2/3 h-2/3 md:h-3/4 overflow-y-auto'>
                        <div className='border-b px-4 py-2 flex justify-between items-center'>
                          <h3 className='font-semibold text-lg'>Slicing UI</h3>
                          <button
                            className='abosulte bg-gray-400 hover:bg-gray-500 py-2 px-4 rounded'
                            onClick={() => {
                              setModal(0)
                            }}
                          >
                            Close
                          </button>
                        </div>

                        <div className=''>
                          <div className='w-full static p-4'>
                            <div className='desc font-bold mb-3'>
                              Description
                            </div>
                            Hi, Here I learn slicing with tailwind css and
                            nextjs
                          </div>

                          <div className='w--full p-4'>
                            <img
                              className='md:w-full shadow-xl p-2'
                              src='/img/learn/SlicingBlog.JPG'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END Learn */}

                {/* Project */}
                <div
                  className={`${
                    activity === 2 ? 'transition-all block' : 'hidden'
                  }`}
                >
                  <div className='flex flex-wrap items-center justify-center'>
                    <button
                      className='flex md:w-1/2 flex-col items-center justify-center p-3 hover:shadow-xl hover:bg-white/10 rounded transition-all'
                      onClick={() => {
                        setModal(1)
                      }}
                    >
                      <img
                        className='w-full m-2'
                        src='/img/project/sleigh/RESTSLEIGH.JPG'
                        alt=''
                      />
                      <span className='bg-white border-2 border-transparent transition-all focus:hidden hover:border-2 py-2 px-4 rounded'>
                        View
                      </span>
                    </button>

                    <div
                      className={`hidden modal h-screen w-full fixed left-0 top-0 overflow-y-auto flex justify-center items-center bg-black bg-opacity-50
                    ${modal === 0 ? 'hidden' : 'block'}
                    `}
                    >
                      <div className='bg-white rounded shadow-lg w-10/12 md:w-2/3 h-2/3 md:h-3/4 overflow-y-auto'>
                        <div className='border-b px-4 py-2 flex justify-between items-center'>
                          <h3 className='font-semibold text-lg'>Sleigh API</h3>
                          <button
                            className='abosulte bg-gray-400 hover:bg-gray-500 py-2 px-4 rounded'
                            onClick={() => {
                              setModal(0)
                            }}
                          >
                            Close
                          </button>
                        </div>

                        <div className=''>
                          <div className='w-full static p-4'>
                            <div className='desc font-bold mb-3'>
                              Description
                            </div>
                            Hi, this my final project in campus. This API is for
                            web and mobile applications. Web apps consume API
                            with curl because this technology is built with PHP
                            Native, and mobile apps consume API with Axios.
                          </div>

                          <div className='w--full p-4'>
                            <img
                              className='md:w-full shadow-xl p-2'
                              src='/img/project/sleigh/RESTSLEIGH.JPG'
                              alt=''
                            />
                            <img
                              className='md:w-full shadow-xl p-2'
                              src='/img/project/sleigh/WebLogin.png'
                              alt=''
                            />
                            <img
                              className='md:w-full shadow-xl p-2'
                              src='/img/project/sleigh/MobileLogin.png'
                              alt=''
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
