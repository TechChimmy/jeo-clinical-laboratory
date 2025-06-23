"use client";

const Footer = () => {
    return (
      <section className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Jeo Clinical Laboratory. All rights reserved.
          </p>
        </div>
      </section>
    );
  };
  
  export default Footer;
  