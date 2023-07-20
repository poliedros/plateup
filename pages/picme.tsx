import Link from "next/link";
import Layout from "../components/Layout";
import { Button, Container, Form, Modal } from "react-bootstrap";
import Icon from "../components/icon/icon";
import { useState } from "react";
import ModalPhoto from "./modalPhoto";

function PicMePage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    // <Layout title="About | Next.js + TypeScript Example">
    <>
      <Container>
        <div className="flex flex-col items-end text-white text-right mt-24">
          <h2 className="font-['Square_Peg']">
            One good day: work out, <br />
            one bad day: work out harder
          </h2>
          <h1 className="font-['DM_Serif_Text'] text-lime-500">
            Photo of Myself
          </h1>
          <div className="border-2 border-white p-1 rounded-full rotate-45 my-8">
            {/* <div className="rounded-full p-1 !border-2 !border-dotted border-black"> */}
            <Button
              className="!rounded-full !p-3 mr-2 -rotate-45"
              onClick={handleShow}
            >
              {Icon("hi", "HiOutlineCamera", "32px")}
            </Button>
            {/* </div> */}

            <Button variant="danger" className="!rounded-full !p-2 -rotate-45">
              {Icon("hi", "HiOutlineSave", "24px")}
            </Button>
          </div>
          <h2 className="font-['DM_Serif_Text'] text-lime-500">
            Drag and Drop your file here
          </h2>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Group className="mb-2">
                <Form.Control type="file" placeholder="name" />
              </Form.Group>
            </Form.Group>
          </Form>
        </div>
      </Container>
      <ModalPhoto show={show} onHide={handleClose} />
    </>
    // </Layout>
  );
}

export default PicMePage;
