import { Link } from "react-router-dom";
import { useState } from "react";
import { thePups } from "../assets/pupsData";
import Modal from "../components/Modal";
import { TfiClose } from "react-icons/tfi";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

export function Home() {
  const [selectedImage, setSelectedImage] = useState<{
    name: string;
    description: string;
    src: string;
    alt: string;
    id: number;
  }>({
    name: "",
    description: "",
    src: "",
    alt: "",
    id: 0,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  isModalOpen
    ? disableBodyScroll(document.body)
    : enableBodyScroll(document.body);

  const handleClick = (image: {
    name: string;
    description: string;
    src: string;
    alt: string;
    id: number;
  }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  return (
    <div className="selection:bg-beigeHover">
      {isModalOpen && (
        <Modal>
          <div className="fixed w-full h-full top-0 flex align-middle justify-center bg-zinc-300/90 z-50 max-sm:px-[10%] pt-20 lg:pt-32 xl:pt-10">
            <div className="bg-gradient-to-br from-stone-400 to-stone-200 from-5% shadow-xl overflow-hidden rounded-3xl p-4 w-[530px] h-[680px] md:h-[800px]  lg:h-[1100px] lg:w-[700px] xl:h-[680px] xl:w-[550px]">
              <div className="flex justify-end w-full pr-4 pt-3">
                <button>
                  <TfiClose
                    className="size-5 lg:size-9 xl:size-5 xl:cursor-pointer"
                    onClick={() => setIsModalOpen(false)}
                  />
                </button>
              </div>
              <section className="w-full pb-5 xl:pb-4 flex justify-center">
                <div className="w-3/4 xl:w-[90%]">
                  <div className="w-full pb-3 flex justify-center">
                    <p className="text-2xl md:text-4xl md:pb-2 md:font-semibold text-stone-800 md:pt-3 lg:pt-2 lg:text-4xl xl:text-3xl">
                      {selectedImage.name}
                    </p>
                  </div>
                  <div className="w-full pb-5 flex justify-center">
                    <img
                      src={selectedImage.src}
                      className="h-80 rounded-xl md:h-[400px] lg:rounded-2xl lg:h-[600px] xl:h-[350px]"
                    />
                  </div>
                  <div className="w-full flex justify-center">
                    <p className="text-center max-sm:text-sm font-light md:text-lg md:pb-2 lg:text-2xl lg:leading-9 lg:py-4 xl:text-base xl:leading-6 xl:py-1">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </section>
              <div className="w-full flex justify-center">
                <Link
                  to={"https://www.linkedin.com/in/kevin-parker-35ab4b148/"}
                  target="_blank"
                >
                  {" "}
                  <button className="bg-maloneBeige text-white py-3 px-8 rounded-md tracking-wide font-light lg:py-6 lg:px-14 lg:text-2xl xl:text-base xl:py-3 xl:px-8 xl:hover:bg-beigeHover">
                    Inquire
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <header className="h-96 xl:h-[480px] w-full bg-cover bg-center bg-local bg-hero-pattern">
        <div className="w-1/2 max-sm:h-4/5 h-full pl-5 pt-4 sm:pb-12 md:pt-8 md:pb-18 flex flex-col justify-around xl:text-left">
          <h3 className="text-white cursor-default static text-2xl font-normal tracking-wide md:text-3xl xl:text-5xl xl:leading-normal xl:px-4">
            Making new best friends since 1994
          </h3>
          <h1 className="text-white cursor-default static tracking-wide font-extralight md:text-lg md:tracking-wider xl:text-2xl xl:px-6 xl:leading-8">
            Bring home a new fully trained and vaccinated family member.
          </h1>
          <div>
            <button className="text-white static cursor-pointer bg-maloneBeige xl:hover:bg-beigeHover tracking-wide p-3 ml-8 rounded-md md:px-6 md:py-4 md:text-lg">
              <Link
                to={"https://www.linkedin.com/in/kevin-parker-35ab4b148/"}
                target="_blank"
              >
                Get Involved
              </Link>
            </button>
          </div>
        </div>
      </header>
      <section className="px-20 md:px-36 xl:px-96 xl:h-[480px] xl:flex xl:flex-col xl:justify-center bg-gradient-to-br from-stone-300 to-white from-0%">
        <h2 className="text-3xl font-normal tracking-wide leading-9 text-center py-10 xl:py-5 xl:mt-6 md:font-semibold xl:text-4xl xl:leading-normal">
          Adopting is one of the best things you can do.
        </h2>
        <div className="mb-14 text-normal font-extralight tracking-wide leading-7 text-center md:text-xl md:leading-9 xl:p-4 xl:font-light xl:leading-10 xl:hover:scale-105 duration-500 xl:hover:bg-stone-300 xl:rounded-xl opacity-60 hover:opacity-100 xl:shadow-2xl">
          When you adopt, you're not just giving a deserving dog a home. You're
          also reducing the demand for puppy mills and industrail-scale breeding
          operations that put profit before animal welfare.
        </div>
      </section>
      <section className="w-full md:py-6 md:flex flex-col md:justify-center bg-maloneBeige ">
        <h2 className="w-full text-white text-3xl tracking-wide pt-8 pb-4 md:pb-6 flex xl:pt-14 xl:pb-8 justify-center md:text-4xl xl:text-5xl">
          Meet Our Pups
        </h2>
        <h3 className="max-sm:px-[12.5%] max-sm:font-extralight max-sm:text-center max-sm:pb-6 w-full text-white tracking-wider md:pb-8 flex lg:text-lg xl:pb-8 justify-center xl:text-lg font-light">
          Click on any of the images below to learn more about our furry
          friends.
        </h3>
        <div className="w-full max-sm:pb-10 px-14 flex flex-col md:flex-row md:flex-wrap justify-center md:justify-around">
          {thePups.map((image) => {
            return (
              <div
                key={image.id}
                className={`w-full px-5 md:w-1/2 xl:w-1/3 flex flex-col`}
              >
                <div className="md:mb-6 px-12 md:px-0 xl:w-[85%] xl:flex xl:justify-center xl:ml-[7.5%]">
                  <button className="xl:flex xl:justify-center">
                    <img
                      key={image.id}
                      src={image.src}
                      alt={image.alt}
                      className="rounded-3xl max-md:mt-6 lg:mt-8 xl:hover:scale-105 duration-300 xl:cursor-pointer xl:w-full"
                      onClick={() => handleClick(image)}
                    />
                  </button>
                </div>

                <div className="items-center md:mb-2 xl:text-center xl:mb-10">
                  <h4 className="w-full text-center text-white text-2xl tracking-wide leading-10 md:text-4xl md:tracking-wider">
                    {image.name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full pb-10 flex justify-center md:pt-12">
          <Link
            to={"https://www.linkedin.com/in/kevin-parker-35ab4b148/"}
            target="_blank"
          >
            {" "}
            <button className="bg-white py-4 px-10 rounded-md tracking-wide font-light xl:hover:text-beigeHover duration-300 xl:text-lg xl:tracking-wider">
              Inquire
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
