import { Link } from "react-router-dom";
import Map from "./Map";
const Contact = () => {
  return (
    <div>
      {/* Contact: Hero Section  */}
      <section className="w-full bg-[url(/millennial-group-young-businesspeople.jpg)] bg-cover bg-bottom pt-20 pb-20 relative bg-gray-700 opacity-1 bg-blend-overlay ">
        <div className="bg-green-primary opacity-60 absolute top-0 left-0 min-w-full min-h-full bg-blend-multiply"></div>
        <div className="text-white responsive-container px-5 sm:px-auto relative ">
          <div className="text-center m-auto flex items-center justify-center flex-col cursor-pointer">
            <h1 className="md:text-6xl text-3xl font-bold mb-4">
              Get in Touch
            </h1>
            <div className="md:text-xl text-black text-sm font-medium bg-white rounded-3xl px-4 py-2 w-fit">
              <Link to="/">
                <span className="text-green-primary">Home</span>
              </Link>{" "}
              / Contact
            </div>
          </div>
        </div>
      </section>

      {/* Contact: Contact Info Section */}
      <section className="my-10 md:my-32">
        <div className="responsive-container justify-center flex relative flex-col md:flex-row">
          <div className="left-map w-full h-11/12 px-5 ">
            <Map />
          </div>
          <div className="right py-5 px-5 md:pl-20 flex flex-col gap-5 my-5 md:my-auto">
            <h1 className="text-black text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-black text-lg font-medium mb-4">
              We are always here to help you. Please feel free to contact us for
              any queries or information.
            </p>
            <div className="flex items-center mb-4">
              <div className="icon mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="green"
                  className="bi bi-buildings"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                  <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                </svg>
              </div>
              <div className="text-black">
                <h1 className="text-sm text-purple-primary font-medium">
                  Office
                </h1>
                <p className="text-lg font-medium">
                  National Incubation Center, Karachi, Pakistan.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="icon mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="green"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </div>
              <div className="text-black">
                <h1 className="text-sm text-purple-primary font-medium">
                  Linkedin
                </h1>
                <p className="text-lg font-medium">faaiz-amir/</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="icon mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="green"
                  className="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                </svg>
              </div>
              <div className="text-black">
                <h1 className="text-sm text-purple-primary font-medium">
                  Phone
                </h1>
                <p className="text-lg font-medium">+92 315 4879020</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="icon mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="green"
                  className="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <div className="text-black">
                <h1 className="text-sm text-purple-primary font-medium">
                  Email
                </h1>
                <p className="text-lg font-medium">faaizammir@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact: Form Section */}
      <section className="my-10 md:my-32 px-5 md:px-0">
        <div className="lg:md:w-1/2 m-auto  ">
          <h1 className="text-3xl md:text-4xl my-10 text-black text-center font-bold">
            Project in mind? Let&apos;s Talk!
          </h1>
          <div className="form responsive-container">
            {/* Make a form with 3 text fields and a submit button */}
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4 w-1/2 inline-block">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Faaiz Amir"
                  className="mt-1 px-4 py-2 outline-green-primary w-full outline-1 shadow-sm sm:text-sm  rounded-md"
                />
              </div>
              <div className="mb-4 md:w-5/12 inline-block md:ml-10">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="faaizammir@gmail.com"
                  className="mt-1 px-4 py-2 outline-green-primary w-full outline-1 shadow-sm sm:text-sm  rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="mt-1 px-4 py-2 outline-green-primary w-full outline-1 shadow-sm sm:text-sm  rounded-md "
                  defaultValue={""}
                />
              </div>
              <button
                type="submit"
                className="w-auto flex m-auto justify-center py-2 px-6 text-lg font-semibold border border-transparent rounded-3xl shadow-sm text-center text-white bg-green-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
