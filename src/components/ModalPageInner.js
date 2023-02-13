import React from "react";

const ModalPageInner = ({ modalNum, setModalNum }) => {
  const closeModalPage = () => {
    setModalNum(0);
  };
  switch (modalNum) {
    case 1:
      return (
        <div>
          <button onClick={closeModalPage}>취소</button>
          <button>확인</button>
        </div>
      );
    case 2:
      return (
        <div>
          <button onClick={closeModalPage}>닫기</button>
        </div>
      );
  }
};

export default ModalPageInner;
