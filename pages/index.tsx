import Link from "next/link";
import Layout from "../components/Layout";
import { Button, Container } from "react-bootstrap";
import Icon from "../components/icon/icon";
import Image from "next/image";

const IndexPage = () => (
  <>
    <Container>
      <div className="flex flex-col items-end text-right mt-24">
        <div
          className="h-[60%] w-[60%] -z-1 absolute left-[15%] top-[60%] bg-cover opacity-60 bg-center bg-[url('https://images.unsplash.com/photo-1594998893017-36147cbcae05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=886&q=80')]"
          style={{
            clipPath:
              "polygon(50% 0%, 50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)",
          }}
        ></div>
        <div
          className="h-[25%] w-[25%] -z-1 absolute left-[55%] top-[37.5%] bg-cover opacity-40 bg-center bg-[url('https://images.unsplash.com/photo-1626200926015-7f545c9002c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=779&q=80')]"
          style={{
            clipPath:
              "polygon(50% 0%, 50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)",
          }}
        ></div>
        <div className="relative z-1 flex flex-col items-end">
          <div className="bg-neutral-300 rounded-full">
            <Image src="/plateUp.svg" width="200" height="200" alt={""} />
          </div>
          <h1 className="font-['DM_Serif_Text'] text-lime-500 text-6xl mb-3">
            Register
          </h1>
          <h5 className="font-['PT_Sans_Narrow'] text-white font-bold uppercase tracking-wide leading-relaxed mb-2">
            Work out desktop application <br />
            based on{" "}
            <span className="underline decoration-red-400 decoration-dotted">
              to do list
            </span>
            . <br />
            Our app philosophy combines <br />
            <span className="underline decoration-amber-400 decoration-dotted">
              happiness, love and health
            </span>
            . <br />
            We are here to guide you{" "}
            <span className="underline decoration-blue-400 decoration-dotted">
              achieve <br />
              the body you love
            </span>
            .
          </h5>
          <Button
            variant="success"
            className="!flex items-center !font-[Hurricane] !text-3xl !rounded-full my-4 !bg-lime-500 !border-lime-500 drop-shadow-xl"
          >
            Get Started! {Icon("md", "MdNavigateNext")}
          </Button>
        </div>
      </div>
      <div className="relative z-1 text-white">
        <h2 className="font-['DM_Serif_Text'] text-lime-500 border-b-2 border-lime-500 pl-6">
          Our Promise To You
        </h2>
        <h5 className="font-['DM_Serif_Text'] flex items-start">
          {Icon("ri", "RiDoubleQuotesL", "32px")}
          <i>
            The two biggest sellers in any bookstore are the cookbooks and the
            diet books. The cookbooks tell you how to prepare the food, and the
            diet books tell you how not to eat any of it!"
          </i>
        </h5>
        <h2 className="font-[Hurricane] text-2xl text-right -mt-6 text-lime-500">
          – Andy Rooney
        </h2>
        <h3 className="font-['Square_Peg'] text-center text-amber-300">
          - We promise you how to figure it out this quote. -
        </h3>
      </div>
    </Container>
  </>
);

export default IndexPage;
