import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Description = styled.div`
  width: 100%;
  height: 752px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const DescriptTitle = styled.div`
  width: 218px;
  height: 59px;
  margin-left: 160px;
  margin-bottom: 32px;
  h2 {
    margin: 0;
    font-size: 51px;
  }
`;

const Descript = styled.div`
  width: 1038px;
  height: 152px;
  margin-left: 169px;
  margin-bottom: 32px;
  p {
    font-size: 24px;
    line-height: 1.29;
  }
`;

const MoreInfo = styled.div`
  width: 927px;
  height: 227px;
  margin-left: 225px;
  ul {
    li {
      font-size: 23px;
      line-height: 1.65;
    }
  }
`;

const Information = (props) => {
  const [info, setInfo] = useState([]);
  return (
    <Description>
      <DescriptTitle>
        <h2>Re-build</h2>
      </DescriptTitle>
      <Descript>
        <p>
          One advanced diverted domestic sex repeated bringing you old. Possible
          procured her trifling laughter thoughts property she met way.
          Companions shy had solicitude favourable own. Which could saw guest
          man now heard but. Lasted my coming uneasy marked so should. Gravity
          letters it amongst herself dearest an windows by. Wooded ladies she
          basket season age her uneasy saw. Discourse unwilling am no described
          dejection incommode no listening of. Before nature his parish boy.
        </p>
      </Descript>
      <MoreInfo>
        <ul>
          <li>One advanced diverted domestic sex repeated bringing you old</li>
          <li>Possible procured her trifling laughter thoughts property </li>
          <li>
            Companions shy had solicitude favourable own. Which could saw guest
            man now{" "}
          </li>
          <li>
            Lasted my coming uneasy marked so should. Gravity letters it amongst
            herself dearest{" "}
          </li>
        </ul>
      </MoreInfo>
    </Description>
  );
};

export default Information;
