import * as React from "react";
import { Container, LottieWrapper } from "./Animation.styled";
import * as CupAnimation from "../animations/test.json";

const animationOptions = {
  loop: true,
  autoplay: true,
  animationData: CupAnimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Animation = () => (
  <Container>
    <LottieWrapper
      isClickToPauseDisabled
      options={animationOptions}
      height={300}
      width={300}
    />
  </Container>
);

export default Animation;
