import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  width: 100vw;
`;

export default function BetaForm() {
  return (
    <Wrapper>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdxa8POJo54upicFxbGIMHmKYm8bffuGQJw2cAs9tQ34H-Nug/viewform?embedded=true"
        width="100%"
        height="100%"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        title={"form1"}
      >
        Loading...
      </iframe>
    </Wrapper>
  );
}
