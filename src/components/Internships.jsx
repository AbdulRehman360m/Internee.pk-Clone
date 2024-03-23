import InternshipsComponent from "./InternshipsComponent";
import { Link } from "react-router-dom";
const Internships = () => {
  return (
    <>
      <section className="w-full bg-[url(/millennial-group-young-businesspeople.jpg)] bg-cover bg-bottom pt-20 pb-20 relative bg-gray-700 opacity-1 bg-blend-overlay ">
        <div className="bg-green-primary opacity-60 absolute top-0 left-0 min-w-full min-h-full bg-blend-multiply"></div>
        <div className="text-white responsive-container px-5 sm:px-auto relative ">
          <div className="text-center m-auto flex items-center justify-center flex-col cursor-pointer">
            <h1 className="md:text-6xl text-3xl font-bold mb-4">Internships</h1>
            <div className="md:text-xl text-black text-sm font-medium bg-white rounded-3xl px-4 py-2 w-fit">
              <Link to="/">
                <span className="text-green-primary">Home</span>
              </Link>{" "}
              / Internships
            </div>
          </div>
        </div>
      </section>
      <section className="my-20">
        <InternshipsComponent heading="Internships we offer" />
      </section>
    </>
  );
};

export default Internships;
