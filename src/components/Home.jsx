import InternshipsComponent from "./InternshipsComponent";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Home Section 1 : Introduction*/}
      <section className="w-full bg-[url(/close-up-young-business-team-working.jpg)] bg-cover bg-no-repeat bg-top pt-36 pb-36 relative bg-gray-700 opacity-1 bg-blend-overlay ">
        <div className="bg-green-primary opacity-60 absolute top-0 left-0 min-w-full min-h-full bg-blend-multiply"></div>
        <div className="text-white responsive-container px-5 sm:px-auto relative grid grid-cols-2">
          <div className="xl:col-span-1 w-[88%] col-span-2">
            <h1 className="font-bold mb-2 text-xl">
              Are you looking for your dream Internship ?
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold mb-4">
              Join <br></br> Internee.pk now..!
            </h1>
            <p className="md:text-xl text-sm font-light mb-4">
              Pakistan&apos;s Virtual Internship Platform Powered By{" "}
              <span className="font-bold">TechvioChats</span>
            </p>
            <Link to="/internships">
              <button className="px-5 py-3 rounded-full font-thin text-sm bg-transparent border border-white hover:bg-purple-primary">
                Browse Internships
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Home Section 2 : About*/}
      <section className="about">
        <div className="responsive-container my-10 xl:my-20">
          <div className="grid gird-cols-12 lg:gap-6 lg:grid-flow-col px-5 md:px-auto">
            <div className=" bg-green-primary lg:col-span-2 py-40 md:py-80 lg:py-10 lg:px-24 xl:px-32 rounded-t-3xl  lg:rounded-tr-none lg:rounded-l-3xl bg-cover bg-no-repeat bg-center bg-[url(/founder.jpg)] relative">
              <div className="absolute p-4 m-6 left-0 bottom-0 text-left bg-green-primary rounded-3xl">
                <h1 className="text-2xl text-white font-bold">Hammad Sheikh</h1>
                <p className="text-lg text-white">Founder</p>
              </div>
              {/* <img src="../../founder.jpg" alt="" className=""/> */}
            </div>
            <div className="lg:col-span-8 bg-purple-primary px-5 sm:px-12 py-10 md:py-20 flex flex-col justify-center">
              <h1 className="text-white font-bold text-3xl sm:text-5xl">
                Welcome to Internee.pk
              </h1>
              <p className="mt-4 text-white text-sm  lg:text-lg leading-normal lg:leading-7">
                Our internship program is designed to give students the
                opportunity to work on meaningful projects and tasks, while also
                receiving mentorship and guidance from experienced professionals
                in the field. Our goal is to help interns develop the skills and
                knowledge they need to succeed in their careers, while also
                building a strong network of talented individuals who may become
                valuable members of our team in the future. If you&apos;re
                looking for a challenging and rewarding internship experience,
                we invite you to explore our program and{" "}
                <span className="text-green-primary cursor-pointer">
                  Apply Today
                </span>
              </p>
              <div className=" text-white mt-10 flex gap-4 items-center">
                <button className="px-5 py-3 rounded-full font-thin text-sm bg-transparent border border-white hover:bg-white hover:text-purple-primary">
                  Get to know us
                </button>
                <p className="cursor-pointer text-sm font-thin">
                  Explore internships
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 bg-green-primary lg:rounded-bl-none rounded-b-3xl lg:rounded-r-3xl  lg:py-0 py-40 md:py-80 lg:py-auto lg:px-24 xl:px-32 bg-cover bg-no-repeat bg-center bg-[url(/rayyan.jpg)] relative">
              <div className="absolute p-4 m-6 left-0 bottom-0 text-left bg-green-primary rounded-3xl">
                <h1 className="text-2xl text-white font-bold">Rayyan Zain</h1>
                <p className="text-lg text-white">CMO</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Section 3 : Categories */}
      <section className="Categories-section my-32">
        <div className="responsive-container">
          <h1 className="text-black text-4xl font-bold mb-10  text-center">
            Browse By Categories
          </h1>

          <div className="lg:mx-20 mx-1 sm:mx-5 categories flex flex-wrap items-center justify-center gap-5">
            {/* item-1 */}
            <div className="item rounded-full m-auto  bg-green-primary px-2 w-36 h-36 border-8 border-purple-primary hover:border-white hover:shadow-lg shadow-black outline-purple-primary cursor-pointer transition-all ease-in-out duration-300 relative flex items-center justify-center flex-col gap-3">
              <div className="absolute top-0  right-0  bg-purple-primary rounded-full text-white px-2 py-1">
                05
              </div>
              {/* svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-window inline-block"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z" />
              </svg>
              <h3 className="text-white text-center text-sm font-thin">
                Website Designing
              </h3>
            </div>

            {/* item-2 */}
            <div className="item rounded-full m-auto  bg-green-primary px-2 w-36 h-36 border-8 border-purple-primary hover:border-white hover:shadow-lg shadow-black outline-purple-primary cursor-pointer transition-all ease-in-out duration-300 relative flex items-center justify-center flex-col gap-3">
              <div className="absolute top-0  right-0  bg-purple-primary rounded-full text-white px-2 py-1">
                05
              </div>
              {/* svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-globe"
                viewBox="0 0 16 16"
              >
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
              </svg>
              <h3 className="text-white text-center text-sm font-thin">
                Web Development
              </h3>
            </div>

            {/* item-3 */}
            <div className="item rounded-full m-auto  bg-green-primary px-2 w-36 h-36 border-8 border-purple-primary hover:border-white hover:shadow-lg shadow-black outline-purple-primary cursor-pointer transition-all ease-in-out duration-300 relative flex items-center justify-center flex-col gap-3">
              <div className="absolute top-0  right-0  bg-purple-primary rounded-full text-white px-2 py-1">
                05
              </div>
              {/* svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-robot"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" />
                <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" />
              </svg>
              <h3 className="text-white text-center text-sm font-thin">
                CRM&apos;s and Chatbot Development
              </h3>
            </div>

            {/* item-4 */}
            <div className="item rounded-full m-auto  bg-green-primary px-2 w-36 h-36 border-8 border-purple-primary hover:border-white hover:shadow-lg shadow-black outline-purple-primary cursor-pointer transition-all ease-in-out duration-300 relative flex items-center justify-center flex-col gap-3">
              <div className="absolute top-0  right-0  bg-purple-primary rounded-full text-white px-2 py-1">
                05
              </div>
              {/* svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-vector-pen"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"
                />
                <path
                  fillRule="evenodd"
                  d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"
                />
              </svg>
              <h3 className="text-white text-center text-sm font-thin">
                Graphic Designing & 3D Modeling
              </h3>
            </div>

            {/* item-5 */}
            <div className="item rounded-full m-auto  bg-green-primary px-2 w-36 h-36 border-8 border-purple-primary hover:border-white hover:shadow-lg shadow-black outline-purple-primary cursor-pointer transition-all ease-in-out duration-300 relative flex items-center justify-center flex-col gap-3">
              <div className="absolute top-0  right-0  bg-purple-primary rounded-full text-white px-2 py-1">
                05
              </div>
              {/* svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="white"
                className="bi bi-phone"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              <h3 className="text-white text-center text-sm font-thin">
                Mobile Application Development
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/*Home Section 4 : Google Cloud */}
      <section className="my-20">
        <div className="responsive-container px-4">
          <div className="flex lg:gap-5 xl:gap-10 flex-col lg:flex-row justify-center m-auto">
            <div className="rounded-t-3xl lg:rounded-tr-none lg:rounded-l-3xl left bg-green-primary px-5 lg:px-16  pt-10 lg:pt-20 pb-14 lg:pb-32">
              <h1 className="text-white  font-semibold text-2xl sm:text-5xl mb-5 ">
                Launching tech careers with internships, exposure, and
                networking.
              </h1>
              <p className="text-white text-lg sm:text-xl font-thin mb-10">
                Internee.pk kickstart student&apos;s tech careers with first
                internships, providing industry exposure, practical skills, and
                networking opportunities, paving the way for their success in
                the tech industry.
              </p>
              <div className="flex gap-5">
                <div className="first">
                  <h1 className="text-white  text-2xl lg:text-6xl font-medium">
                    5000+
                  </h1>
                  <p className="text-white text-sm lg:text-lg font-thin">
                    Registered users
                  </p>
                </div>
                <div className="second">
                  <h1 className="text-white  text-2xl lg:text-6xl font-medium">
                    35+
                  </h1>
                  <p className="text-white text-sm lg:text-lg font-thin">
                    Opening Internships
                  </p>
                </div>
              </div>
            </div>
            <div className="right rounded-b-3xl lg:rounded-bl-none rounded-r-3xl bg-[url(/people-working-as-team-company.jpg)] bg-cover bg-no-repeat bg-center  w-full lg:w-lvw h-[50vh] sm:h-[75vh] lg:h-auto"></div>
          </div>
        </div>
      </section>

      {/* Home Section 5 : Internships  */}
      <section className="my-24 flex flex-wrap">
        <InternshipsComponent
          heading="Recent Internships"
          para="Internships came after every two months. Grab your internships on your favourite domain to boost up yourself in the field of Computer technology"
        />
      </section>
    </div>
  );
};

export default Home;
