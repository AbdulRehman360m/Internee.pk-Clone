const Home = () => {
  return (
    <div>
      {/* Home Section 1 : Introduction*/}
      <section className="w-full bg-[url(/close-up-young-business-team-working.jpg)] bg-cover bg-no-repeat bg-top pt-36 pb-36 relative bg-gray-500 opacity-75 bg-blend-multiply ">
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
            <button className="px-5 py-3 rounded-full font-thin text-sm bg-transparent border border-white hover:bg-purple-primary">
              Browse Internships
            </button>
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
      <section></section>

      {/*Home Section 4 : Google Cloud */}
      <section></section>

      {/* Home Section 5 : Internships  */}
      {/*Internship Component here*/}

      {/* Home Section 6 : Testimonials */}
      {/* Testimonials component here  */}
    </div>
  );
};

export default Home;
