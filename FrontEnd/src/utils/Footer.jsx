import React from "react";

const Footer = () => {
  return (
    <div className="w-full max-h py-10 bg-[#8B77E8] text-white " >
      <div className="title-and-logo flex  flex-col items-center justify-center">
        <h1 className="logomainheading text-[30px] mt-5 text-white ">Learnify</h1>
        <div className="social-log flex gap-3 mt-2">
          <div className="insta w-[30px] h-[30px]">
            <img
              className="w-full h-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
              alt=""
            />
          </div>
          <div className="insta w-[30px] h-[30px]">
            <img
              className="w-full h-full object-cover"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
              alt=""
            />
          </div>
          <div className="insta w-[30px] h-[30px] rounded-md">
            <img
              className="w-full h-full object-cover"
              src="https://freelogopng.com/images/all_img/1690643591twitter-x-logo-png.png"
              alt=""
            />
          </div>
        </div>
      </div>
   
        <div className="footer-left flex items-center justify-center gap-3 text-sm mt-5">
          <h1 className=" px-2 rounded ">About</h1>
          <h1 className=" px-2 rounded ">Careers</h1>
          <h1 className=" px-2 rounded ">Diversity, Equity and inclusion</h1>
          <h1 className=" px-2 rounded ">Reconcillation Action Plan</h1>
          <h1 className=" px-2 rounded ">Contact</h1>
        </div>
        <div className="footer-right flex items-center justify-center gap-3 text-sm mb-5 mt-2">
          <h1 className=" px-2 rounded ">Terms of Service</h1>
          <h1 className=" px-2 rounded ">Privacy Policy</h1>
          <h1 className=" px-2 rounded ">Cookie Policy</h1>
        </div>
  
      <div className="copyright-text flex items-center justify-center">
        <p className="text-white text-[12px]">Copyright &copy; 2021 Learnify</p>
      </div>
    </div>
  );
};

export default Footer;
