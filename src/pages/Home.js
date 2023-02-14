import React, { useRef, useState } from "react";
import ButtonArea from "../components/ButtonArea";
import InputArea from "../components/InputArea";
import ModalArea from "../components/ModalArea";
import ModalPageInner from "../components/ModalPageInner";
import ModalBackground from "../style/ModalBackground";
import ModalPage from "../style/ModalPage";

const Home = () => {
  const ModalBackgroundRef = useRef(null);
  const [modalNum, setModalNum] = useState(0);
  const pageClickToOut = (e) => {
    if (modalNum === 2 && e.target === ModalBackgroundRef.current && modalNum) {
      setModalNum(0);
    }
  };
  return (
    <div onClick={(e) => pageClickToOut(e)}>
      <ModalBackground modalNum={modalNum} ref={ModalBackgroundRef}>
        <ModalArea setModalNum={setModalNum} />
      </ModalBackground>
      <ModalPage modalNum={modalNum}>
        <ModalPageInner modalNum={modalNum} setModalNum={setModalNum} />
      </ModalPage>
      <ButtonArea />
      <InputArea />
    </div>
  );
};

export default Home;
