import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black relative top-[30rem] text-white pt-8">
      <div className="container px-[4rem] py-[4rem] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Quick Links */}
        <div className='flex flex-col gap-y-2'>
          <h4 className="text-2xl font-bold mb-4">Epiphany</h4>
          <p className='text-base font-medium'>
          Our mission is to inspire your journey towards a healthier and happier life.
          </p>
          <p className='text-base font-medium'>
          Discover wellness with Epiphany!
          </p>
        </div>

        {/* Categories */}
        <div className='flex flex-col gap-y-2'>
          <h4 className="text-2xl font-bold mb-4">Support</h4>
          <p className='text-base font-medium' >
          111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
          </p>
          <p  className='text-base font-medium'>
          exclusive@gmail.com
          </p>
          <p  className='text-base font-medium'>
          +88015-88888-9999
          </p>
        </div>

        {/* Follow Us */}
        <div className='flex flex-col gap-y-2'>
          <h4 className="text-2xl font-bold mb-4">Account</h4>
          <p className='text-base font-medium' >
          My Account
          </p>
          <p  className='text-base font-medium'>
          Login / Register
          </p>
          <p  className='text-base font-medium'>
          Cart
          </p>
          <p  className='text-base font-medium'>
          Wishlist
          </p>
          <p  className='text-base font-medium'>
          Shop
          </p>
        </div>

        {/* About Us */}
        <div className='flex flex-col gap-y-2'>
          <h4 className="text-2xl font-bold mb-4">Quick Link</h4>
          <p className='text-base font-medium' >
          Privacy Policy
          </p>
          <p  className='text-base font-medium'>
          Terms Of Use
          </p>
          <p  className='text-base font-medium'>
          FAQ
          </p>
          <p  className='text-base font-medium'>
          Contact
          </p>
       
        </div>


        {/* Contact Us */}
        <div className='flex flex-col gap-y-3'>
          <h4 className="text-2xl font-bold mb-4">Follow Us</h4>
          <p className='text-base font-medium'>
          Follow us for more updates on new products, promotions, and wellness tips!
          </p>
          <div className='flex gap-x-4'>
          <span className='icon-[iconoir--facebook] text-white h-5 w-5'></span>
          <span className='icon-[gg--instagram] text-white h-5 w-5'></span>
          <span className='icon-[teenyicons--twitter-outline] text-white h-5 w-5'></span>
          <span className='icon-[ri--linkedin-line] text-white h-5 w-5'></span>
          </div>
        </div>
      </div>
      <div className='flex h-[4rem] items-center justify-center text-white/50 border border-x-black border-t-white/50 border-b-black'>
       copyright @lordwhitefie. All right reserved
      </div>
    </footer>
  );
};

export default Footer;
