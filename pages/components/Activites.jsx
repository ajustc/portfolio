import { useState } from "react";

const Activities = () => {
  return (
    <div id="navigate-activity" className="group">
      {/*  */}
      <div className="container mx-auto md:p-20 p-5">
        <div className="w-full h-auto">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">Activities</h1>
              <hr className="w-50 my-10" />
            </div>
          </div>
        </div>

        <div className="xl:w-9/12 lg:w-full md:w-full sm:w-full mx-auto mt-10">
          <div className="flex flex-row justify-between bg-white/50 rounded p-4">
            {/* School */}
            <div className="w-6/12">
              <div className="sticky top-[10%] md:top-[25%] border-l-2 border-white pl-5 pb-5 h-fit">
                <h1 className="text-2xl font-bold mb-3">Academy</h1>
                <div className="before:content-[''] before:ml-[-11px] before:absolute before:top-0 before:left-0 before:width-[16px] before:height-[16px] before:bg-white/90 before:rounded-full before:shadow-lg before:p-2.5"></div>
                <div className="section-company">
                  <h3 className="mb-2 font-medium text-lg leading-5">
                    Budi Luhur University
                  </h3>
                </div>

                <div className="section-date">
                  <p className="mb-2 bg-white inline-block text-xs p-2 rounded">
                    2017 - 2021
                  </p>
                </div>

                <div className="section-job-desc">
                  <p className="mb-2">
                    <span className="italic font-bold">
                      Informatics Engineering
                    </span>
                  </p>
                </div>

                <div className="section-description">
                  <p className="mb-2">
                    This my final project in campus. This API is for web and
                    mobile applications. Web apps consume API with curl because
                    this technology is built with PHP Native, and mobile apps
                    consume API with Axios.
                  </p>
                  <ul>
                    <li className="mb-1 list-item list-disc">
                      Created RESTful API with CodeIgniter 4.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Created Web App with PHP Native, Mobile App with React
                      Native for testing other than using Postman.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Exp */}
            <div className="w-6/12">
              <div className="relative border-l-2 border-white pl-5 pb-5">
                <h1 className="text-2xl font-bold mb-3">Experience</h1>
                <div className="before:content-[''] before:ml-[-11px] before:absolute before:top-0 before:left-0 before:width-[16px] before:height-[16px] before:bg-white/90 before:rounded-full before:shadow-lg before:p-2.5"></div>
                <div className="section-company">
                  <h3 className="mb-2 font-medium text-lg leading-5">
                    Freelance - Remote
                  </h3>
                </div>

                <div className="section-date">
                  <p className="mb-2 bg-white inline-block text-xs p-2 rounded">
                    Oct 2021 - Nov 2021
                  </p>
                </div>

                <div className="section-job-desc">
                  <p className="mb-2">
                    <span className="italic font-bold">Web Developer</span>
                  </p>
                </div>

                <div className="section-description">
                  <p className="mb-2"></p>
                  <ul>
                    <li className="mb-1 list-item list-disc">
                      Created Web App imitates Laracast’s with Laravel 8.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Improve user roles for user and admin pages with
                      middleware.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Created Series, Episode, and Podcast with sample website
                      Laracasts.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Styling with Bootstrap 5, and modify some styles.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-2 border-white pl-5 pb-5">
                <div className="before:content-[''] before:ml-[-11px] before:absolute before:top-0 before:left-0 before:width-[16px] before:height-[16px] before:bg-white/90 before:rounded-full before:shadow-lg before:p-2.5"></div>
                <div className="section-company">
                  <h3 className="mb-2 font-medium text-lg leading-5">
                    PT. Jaringan Pemberitaan Nusantara Negeriku | Contract -
                    Hybrid
                  </h3>
                </div>

                <div className="section-date">
                  <p className="mb-2 bg-white inline-block text-xs p-2 rounded">
                    Dec 2021 - Feb 2023
                  </p>
                </div>

                <div className="section-job-desc">
                  <p className="mb-2">
                    <span className="italic font-bold">Programmer</span>
                  </p>
                </div>

                <div className="section-description">
                  <ul>
                    <li className="mb-1 list-item list-disc">
                      Maintenance CMS & all news portals.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Create API Web & Mobile apps.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Grab Data Realtime User Google Analytics 4.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-2 border-white pl-5 pb-5">
                <div className="before:content-[''] before:ml-[-11px] before:absolute before:top-0 before:left-0 before:width-[16px] before:height-[16px] before:bg-white/90 before:rounded-full before:shadow-lg before:p-2.5"></div>
                <div className="section-company">
                  <h3 className="mb-2 font-medium text-lg leading-5">
                    PT. Keizah Sukses Mulia | Freelance – Remote
                  </h3>
                </div>

                <div className="section-date">
                  <p className="mb-2 bg-white inline-block text-xs p-2 rounded">
                    Jun 2022 - Jan 2023
                  </p>
                </div>

                <div className="section-job-desc">
                  <p className="mb-2">
                    <span className="italic font-bold">Programmer</span>
                  </p>
                </div>

                <div className="section-description">
                  <ul>
                    <li className="mb-1 list-item list-disc">
                      Troubleshoot logistic system with CI Framework.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Rewrite system to Laravel framework.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Improve data type, view table in database.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative border-l-2 border-white pl-5 pb-5">
                <div className="before:content-[''] before:ml-[-11px] before:absolute before:top-0 before:left-0 before:width-[16px] before:height-[16px] before:bg-white/90 before:rounded-full before:shadow-lg before:p-2.5"></div>
                <div className="section-company">
                  <h3 className="mb-2 font-medium text-lg leading-5">
                    PT. Rabbit Fire Indonesia | Freelance – Remote
                  </h3>
                </div>

                <div className="section-date">
                  <p className="mb-2 bg-white inline-block text-xs p-2 rounded">
                    Feb 2023 - Jun 2023
                  </p>
                </div>

                <div className="section-job-desc">
                  <p className="mb-2">
                    <span className="italic font-bold">Backend Developer</span>
                  </p>
                </div>

                <div className="section-description">
                  <ul>
                    <li className="mb-1 list-item list-disc">
                      Create API Web & Mobile apps for social media platform.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Integrate payment gateway.
                    </li>
                    <li className="mb-1 list-item list-disc">
                      Integrate FFMpeg for reduce.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
