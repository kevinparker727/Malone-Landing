"use client";

import { Link } from "react-router-dom";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

type Props = {};
type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export function Footer({}: Props) {
  const position = { lat: 35.62, lng: -80.83 };

  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(2).max(30),
    lastName: z.string().min(2).max(30),
    email: z.string().email(),
    message: z.string().min(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const submitData = (data: FormData) => {
    console.log("IT WORKED", data);
  };

  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full flex flex-wrap max-lg:h-80 border-b border-slate-400 xl:h-[500px] bg-gradient-to-br from-stone-300 to-stone-50 from-5%">
        <APIProvider apiKey="AIzaSyDiFTRIuPozKsL6b7hrWvqNSnJjbl0FIV8">
          <div className="w-full h-80 p-10 flex justify-center xl:h-[500px] xl:w-1/2">
            <Map
              defaultZoom={9}
              defaultCenter={position}
              mapId="78c8e961508ab7ea"
            >
              <AdvancedMarker position={position}>
                <Pin borderColor={"#C79388"} glyphColor={"white"}></Pin>
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
        {/* <section className="w-1/2 flex justify-center">Form</section> */}

        <div className="max-xl:hidden xl:w-1/2 p-10 w-[300px] h-full">
          <form
            onSubmit={handleSubmit(submitData)}
            className="h-full w-[90%] mx-[5%] max-lg:hidden"
          >
            <section className="w-[100%] flex mb-3">
              <div className="w-[50%]">
                <div className="mb-1 font-light">
                  <label>First Name</label>
                </div>
                {errors.firstName && (
                  <span className="text-red-500 text-xs font-light">
                    {errors.firstName.message}
                  </span>
                )}
                <input
                  type="text"
                  {...register("firstName")}
                  className="border-slate-400 border h-[40px] w-[80%] bg-gray-50"
                />
              </div>

              <div className="w-[50%]">
                <div className="mb-1 font-light">
                  <label>Last Name</label>
                </div>
                {errors.lastName && (
                  <span className="text-red-500  text-xs font-light">
                    {errors.lastName.message}
                  </span>
                )}
                <input
                  type="text"
                  {...register("lastName")}
                  className="border-slate-400 border h-[40px] w-[80%] bg-gray-50"
                />
              </div>
            </section>

            <section className="w-full mb-3">
              <div className="mb-1 font-light">
                <label className="">Email</label>
              </div>
              {errors.email && (
                <span className="text-red-500 text-sm font-light">
                  {errors.email.message}
                </span>
              )}
              <input
                type="text"
                {...register("email")}
                className="border-slate-400 border h-[40px] w-[90%] mr-[10%] bg-gray-50"
              />
            </section>

            <section className="w-full">
              <div className="mb-1 font-light">
                <label className="">Message</label>
              </div>
              {errors.message && (
                <span className="text-red-500 text-xs font-light">
                  {errors.message.message}
                </span>
              )}
              <input
                type="text"
                {...register("message")}
                className="border-slate-400 border bg-gray-50 w-[90%] h-[80px] mb-8"
              />
            </section>

            <div className="w-full flex justify-center">
              <input
                type="submit"
                className="bg-maloneBeige py-2 px-5 rounded-md cursor-pointer text-white duration-300 xl:hover:bg-beigeHover"
              />
            </div>
          </form>
        </div>
      </div>

      <div className="w-full h-40 xl:h-72 flex bg-gradient-to-bl from-stone-50 to-stone-300 from-5%">
        <section className="w-1/2 h-full xl:h-3/4 px-10 flex flex-wrap md:px-[15%] content-center justify-center text-center tracking-wide">
          <div className="font-semibold cursor-default py-2 md:py-0 md:pb-4 text-xl md:text-3xl xl:text-4xl">
            Malone
          </div>
          <div className="text-sm md:text-lg cursor-default py-2 font-light">
            {" "}
            Made with Love by <br />
            <Link
              to={"https://www.linkedin.com/in/kevin-parker-35ab4b148/"}
              target="_blank"
              className="text-maloneBeige underline lg:hover:text-beigeHover hover:translate-x-0 hover:transition-all"
            >
              Kevin Parker
            </Link>
          </div>
        </section>

        <section className="w-1/2 h-full border-l border-slate-400">
          <div className="w-full px-3 h-full text-sm tracking-wider leading-9 underline text-maloneBeige flex align-middle xl:text-xl xl:leading-[60px] xl:font-light">
            <div className="w-1/2 h-full content-center py-5 flex flex-col text-center">
              <div>
                <Link to={"/ourMission"}>Our Mission</Link>
              </div>
              <div>
                <Link to={"/services"}>Services</Link>
              </div>
              <div>
                <Link to={"/team"}>Team</Link>
              </div>
            </div>
            <div className="w-1/2 flex py-5 flex-col text-center ">
              <div>
                <Link to={"/getInvolved"}>Get Involved</Link>
              </div>
              <div>
                <Link to={"/donate"}>Donate</Link>
              </div>
              <div>
                <Link to={"/blog"}>Blog</Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
