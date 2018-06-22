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
  font-size: 3vmax;
  margin: 0 0 -9vw;

  @media only screen and (max-width: 600px) {
    font-size: 2vmax;
  }
`;

const DonutText = styled.p`
  font-size: 3vmax;
  position: absolute;
  top: 41%;
  margin: 0;
  left: 50%;
  transform: translate(-50%, -50%);

  color: ${props => (props.color ? props.color : colors.orange)};

  @media only screen and (max-width: 600px) {
    font-size: 3vmax;
    top: 45%;
  }
`;

export const Donut = ({ color = colors.orange, title = "Title" }) => {
  const data = {
    datasets: [
      {
        data: [60, 40],
        backgroundColor: [color, "#828282"],
        hoverBackgroundColor: [color, "#828282"]
      }
    ]
  };
  return (
    <DonutWrapper>
      <DonutTitle>{title}</DonutTitle>
      <DonutText color={color} timeout={200}>
        3.5
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
