import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Description = styled.div`
  width: 100%;
  height: 752px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 606px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 192px;
    height: 35px;
    margin-top: 40px;
    margin-left: 0;
    margin-bottom: 15px;
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
  @media${(props) => props.theme.mediaQueries.media576} {
    width: 322px;
    margin-left: 40px;
    background: blue;
    margin-bottom: 1px;
    p {
      font-size: 14px;
    }
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
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 308px;
    margin-left: 47px;
    margin-bottom: 0;
    ul {
      li {
        font-size: 16px;
        line-height: 2.4;
      }
    }
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
