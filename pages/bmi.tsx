import Link from "next/link";
import Layout from "../components/Layout";
import { Button, Col, Container, Form, Modal, Row } from "react-bootstrap";
import Icon from "../components/icon/icon";
import { useState } from "react";

function BMIPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  return (
    // <Layout title="About | Next.js + TypeScript Example">
    <>
      <Container>
        <div className="flex flex-col items-end text-white text-right mt-24">
          <h2 className="font-['Square_Peg']">
            If you don't give up, you still have a chance
          </h2>
          <h1 className="font-['DM_Serif_Text'] text-lime-500">
            BMI Caculator
          </h1>
          <div className="my-3">
            <Button
              className="!rounded-full !p-2 rotate-[15deg]"
              onClick={handleShow}
            >
              {Icon("hi", "HiOutlineCalculator", "32px")}
            </Button>
          </div>
        </div>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        className="font-['PT_Sans_Narrow']"
      >
        <Modal.Header className="!border-0" closeButton>
          <Modal.Title>
            <h1 className="font-['DM_Serif_Text'] text-lime-500">
              BMI Caculator
            </h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <Form.Group className="mb-2">
                <Form.Label>Height (m)</Form.Label>
                <Form.Control
                  placeholder="1.79"
                  value={height}
                  onChange={(e: any) => setHeight(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Label>Weight (kg)</Form.Label>
                <Form.Control
                  placeholder="87"
                  value={weight}
                  onChange={(e: any) => setWeight(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="flex flex-col justify-center items-center">
              <h5 className="font-['PT_Sans_Narrow']">Your BMI:</h5>
              <h1 className="font-['DM_Serif_Text'] text-amber-300 text-6xl">
                {Math.round((weight / (height * height)) * 10) / 10}
              </h1>
              <h4 className="font-['Square_Peg'] -rotate-[9deg]">
                {Math.round((weight / (height * height)) * 10) / 10 < 16 ? (
                  <span className="text-red-500 flex flex-col items-end">
                    Nothing Good Buddy, we must change everything
                    {Icon("bs", "BsFillEmojiAngryFill")}
                  </span>
                ) : Math.round((weight / (height * height)) * 10) / 10 > 16 &&
                  Math.round((weight / (height * height)) * 10) / 10 < 18.5 ? (
                  <span className="text-yellow-500 flex flex-col items-end">
                    Some increment are needed{" "}
                    {Icon("bs", "BsEmojiExpressionlessFill")}
                  </span>
                ) : Math.round((weight / (height * height)) * 10) / 10 > 18.5 &&
                  Math.round((weight / (height * height)) * 10) / 10 < 25 ? (
                  <span className="text-lime-500 flex flex-col items-end">
                    You are just fine {Icon("bs", "BsFillEmojiSunglassesFill")}
                  </span>
                ) : Math.round((weight / (height * height)) * 10) / 10 > 25 &&
                  Math.round((weight / (height * height)) * 10) / 10 < 30 ? (
                  <span className="text-yellow-500 flex flex-col items-end">
                    You need to work I little herder
                    {Icon("bs", "BsEmojiNeutralFill")}
                  </span>
                ) : Math.round((weight / (height * height)) * 10) / 10 > 30 ? (
                  <span className="text-red-500 flex flex-col items-end">
                    We have many work to done there, let start
                    {Icon("bs", "BsEmojiDizzyFill")}
                  </span>
                ) : undefined}
              </h4>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="!border-0">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
    // </Layout>
  );
}

export default BMIPage;
