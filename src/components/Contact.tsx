import { FC } from "react";
import { socialLinks } from "../shared/contants";

const Contact: FC = () => {
  return (
    <div className="pb-20">
      <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
        Get in touch
      </h1>
      <div
        data-scroll
        data-scroll-speed="1"
        className="flex justify-center mx-[5vw] mt-8"
      >
        <div className="w-full max-w-[1100px] flex gap-10 flex-col md:flex-row">
          <div className="flex-1">
            <form
              action={process.env.NEXT_PUBLIC_FORM_URL}
              method="POST"
              className="flex flex-col gap-2"
            >
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="ZikaZaki"
                required
                minLength={3}
              />
              <label htmlFor="email">Your email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="ziiikoooo2000@gmail.com"
                required
              />
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="I want like to hire you"
                required
              />
              <button className="mt-2 py-2 text-white rounded transition duration-300 flex justify-center items-center gap-[10px] bg-[#1876d2] hover:bg-[#2884e0]">
                Send
              </button>
            </form>
          </div>
          <div className="flex-1">
            <h1 className="text-xl mb-2">Other places</h1>
            {socialLinks.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:bg-slate-900 p-2 transition duration-300"
              >
                <div
                 className={`w-[32px] h-[32px] ${ item.title.toLowerCase() === "linkedin" ? " bg-white rounded-md" : "rounded-full" }`}
                >
                  <img 
                    className="w-full h-full object-cover"
                    src={item.icon} 
                    alt="" 
                  />
                </div>
                <h1>{item.title}</h1>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
