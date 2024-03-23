import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      {/* About: Hero Section  */}
      <section className="w-full bg-[url(/millennial-group-young-businesspeople.jpg)] bg-cover bg-bottom pt-20 pb-20 relative bg-gray-700 opacity-1 bg-blend-overlay ">
        <div className="bg-green-primary opacity-60 absolute top-0 left-0 min-w-full min-h-full bg-blend-multiply"></div>
        <div className="text-white responsive-container px-5 sm:px-auto relative ">
          <div className="text-center m-auto flex items-center justify-center flex-col cursor-pointer">
            <h1 className="md:text-6xl text-3xl font-bold mb-4">About</h1>
            <div className="md:text-xl text-black text-sm font-medium bg-white rounded-3xl px-4 py-2 w-fit">
              <Link to="/">
                <span className="text-green-primary">Home</span>
              </Link>{" "}
              / About
            </div>
          </div>
        </div>
      </section>

      {/* About: Content Section */}
      <section className="my-36">
        <div className="responsive-container flex flex-col items-center lg:items-stretch lg:flex-row gap-5 justify-center">
          <div className="left p-4 lg:p-10 flex flex-col gap-5 w-svw">
            <h1 className="text-3xl font-semibold md:text-5xl text-black">
              Welcome to Internee.pk
            </h1>
            <p className="text-sm md:text-lg font-thin ">
              Our internship program is designed to give students the
              opportunity to work on meaningful projects and tasks, while also
              receiving mentorship and guidance from experienced professionals
              in the field. Our goal is to help interns develop the skills and
              knowledge they need to succeed in their careers, while also
              building a strong network of talented individuals who may become
              valuable members of our team in the future.
            </p>
            <div className="flex gap-5 lg:ml-5 my-5">
              <Link to="/internships" className="hover:text-purple-primary">
                Explore Internships
              </Link>
              <Link to="/contact" className="hover:text-purple-primary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="right">
            <img
              src="/close-up-young-business-team-working.jpg"
              alt="About"
              className="right w-full h-full object-cover rounded-3xl px-5 sm:px-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
