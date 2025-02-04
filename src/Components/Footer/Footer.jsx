
const Footer = () => {
  return (
    <div className="bg-white max-w-[1540px] mx-auto mb-9 pt-8">
      <div className="text-center mb-9">
        <h2 className="font-bold mb-4 text-3xl">Gadget Heaven</h2>
        <p className="text-gray-500 pb-10 border-b border-gray-300 w-3/4 mx-auto font-semibold">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 md:flex md:justify-center md:gap-44 md:flex-row text-center">
        <nav className="text-gray-500 font-semibold flex flex-col justify-center items-center">
          <h6 className="font-bold text-xl text-black">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="text-gray-500 font-semibold flex flex-col justify-center items-center">
          <h6 className="font-bold text-xl text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="text-gray-500 font-semibold flex flex-col justify-center items-center">
          <h6 className="font-bold text-xl text-black">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>

    </div>
  );
};

export default Footer;