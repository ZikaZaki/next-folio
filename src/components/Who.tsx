import { FC } from "react";

const Who: FC = () => {
  return (
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[225px] h-[225px] rounded-full"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Who am I?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          My name is Zakariya Al-Khamisi. I&apos;m a web/mobile focused full-stack developer living in Sana&apos;a, Yemen. I started tinkering with computers at 5 years old and that’s when my interest in software engineering grew. I&apos;m also a big admirer and contributor of open source projects. Besides
          coding, I also like{" "}
          <a
            className="underline underline-offset-2"
            href="https://dev.to/zikazaki/is-programming-art--1n5e"
            target="_blank"
            rel="noopener noreferrer"
          >
            writing blog posts
          </a>
          , listening to music and playing video games.
        </p>
      </div>
    </div>
  );
};

export default Who;
