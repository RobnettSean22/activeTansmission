import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Description = styled.div`
  width: 100%;
  height: 752px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 414px) {
    width: 362px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
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
  @media screen and (max-width: 414px) {
    background: green;
    margin-left: 0;
    margin-bottom: 0;
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
  @media screen and (max-width: 414px) {
    width: 322px;
    margin-left: 40px;
    background: blue;
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
  @media screen and (max-width: 414px) {
    width: 308px;
    margin-left: 0;
    margin-bottom: 0;
  }
`;

const Information = (props) => {
  const [info, setInfo] = useState([{}]);

  useEffect(() => {
    serviceInfo();
  }, []);

  const serviceInfo = async () => {
    const res = await axios.get("/info");
    const { data } = await res;
    console.log(data);
    setInfo(data);
  };

  return (
    <Description>
      <DescriptTitle>
        <h2>{info[0].title}</h2>
      </DescriptTitle>
      <Descript>
        <p>{info[0].serviceDescription}</p>
      </Descript>
      <MoreInfo>
        <ul>
          <li>One advanced diverted domestic sex repeated bringing you old</li>
          <li>Possible procured her trifling laughter thoughts property </li>
          <li>
            Companions shy had solicitude favourable own. Which could saw guest
            man now
          </li>
          <li>
            Lasted my coming uneasy marked so should. Gravity letters it amongst
            herself dearest
          </li>
        </ul>
      </MoreInfo>
    </Description>
  );
};

export default Information;
