import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import { Doughnut } from "react-chartjs-2";

const DonutWrapper = styled.div`
  display: flex;
  justify-content: flexEnd;
  flex-direction: column;
  position: relative;
  width: 10vw;
  margin: 10px 0;
`;

const DonutTitle = styled.h3`
  text-align: center;
  font-size: 1.3em;
  margin: 0 0 -9vw;

  @media only screen and (max-width: 600px) {
    font-size: 1em;
  }
`;

const DonutText = styled.p`
  font-size: 2em;
  position: absolute;
  top: 36%;
  margin: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${props => (props.color ? props.color : colors.orange)};

  @media only screen and (max-width: 600px) {
    font-size: 1em;
    top: 47%;
  }
`;

export const Donut = ({ score = 0, color = colors.orange, title = "Title" }) => {
  let scorePercent = score * 20;
  let inverseScore = 100 - scorePercent;
  const data = {
    datasets: [
      {
        data: [scorePercent, inverseScore],
        backgroundColor: [color, "#828282"],
        hoverBackgroundColor: [color, "#828282"]
      }
    ]
  };
  return (
    <DonutWrapper>
      <DonutTitle>{title}</DonutTitle>
      <DonutText color={color} timeout={200}>
        {score}
      </DonutText>
      <Doughnut
        width={50}
        data={data}
        options={{
          cutoutPercentage: 80,
          responsive: true,
          tooltips: { enabled: false }
        }}
      />
    </DonutWrapper>
  );
};
