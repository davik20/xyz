import styled, { keyframes } from "styled-components";
import React from "react";

function ModalContainer(props: any) {
  const { isShown } = props;
  return (
    <>
      {isShown && (
        <Container>
          <div>{props.children}</div>
        </Container>
      )}
    </>
  );
}

const grow = keyframes`
 from {
     transform: scale(0)
 }
 to {
     transform: scale(1)
 }
`;

const Container = styled.div`
  > div {
    animation-name: ${grow};
    animation-duration: 0.25s;
  }

  color: white;
  position: fixed;
  background-color: #00000099;
  backdrop-filter: blur(10px);
  z-index: 700;
  width: 100%;
  height: 100%;
  top: 0;
`;

export default ModalContainer;
