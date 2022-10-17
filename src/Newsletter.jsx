import React from "react";

const Newsletter = () => {
  return (
    <>
      <section id="newsletter" className="bg-softBlue">
        {/* main container */}
        <div className="max-w-lg mx-auto py-24">
          <p className="mb-6 text-lg tracking-widest text-center text-white uppercase">
            35,000+ already joined
          </p>
          <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
            Stay up to date with what we're doing
          </h2>
          {/* form */}
          <form className="flex flex-col items-start justify-center max-w-2xl mx-auto space-y-6 text-base px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0">
            {/* input & button container */}
            <div className="flex flex-col justify-between items-center mx-auto md:flex-row md:mx-0">
              <input
                type="text"
                class="flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1 border-white focus:outline-none md:mr-3 md:mb-0"
                placeholder="Enter your email address"
              />

              <input
                type="submit"
                class="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
                value="Contact Us"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-veryDarkBlue">
        {/* footer flex container */}
        <div className="container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0">
          {/* Logo/Menu Container */}
          <div className="flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue">
            <img
              src="images/logo-bookmark-footer.svg"
              alt=""
              className="mb-1"
            />
            <a href="#features" className="uppercase hover:text-softRed">
              Features
            </a>
            <a href="#download" className="uppercase hover:text-softRed">
              Download
            </a>
            <a href="#faq" className="uppercase hover:text-softRed">
              Faq
            </a>
          </div>
          {/* Social Container */}
          <div className="flex space-x-10">
            <img src="images/icon-facebook.svg" alt="" className="h-6 ficon" />
            <img src="images/icon-twitter.svg" alt="" className="h-6 ficon" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Newsletter;
