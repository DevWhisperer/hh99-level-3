import React, { useRef, useState } from "react";
import ModalArea from "../components/ModalArea";
import ModalPageInner from "../components/ModalPageInner";
import ModalBackground from "../style/ModalBackground";
import ModalPage from "../style/ModalPage";

const Home = () => {
  const modalPageRef = useRef(null);
  const [modalNum, setModalNum] = useState(0);
  const pageClickToOut = (e) => {
    if (modalNum === 2 && e.target !== modalPageRef.current && modalNum) {
      setModalNum(0);
    }
  };
  return (
    <div onClick={(e) => pageClickToOut(e)}>
      <ModalBackground modalNum={modalNum}>
        <ModalArea setModalNum={setModalNum} />
      </ModalBackground>
      <ModalPage modalNum={modalNum} ref={modalPageRef}>
        <ModalPageInner modalNum={modalNum} setModalNum={setModalNum} />
      </ModalPage>
    </div>
  );
};

export default Home;
