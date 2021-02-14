import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const MissionContainer = styled.div`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  background: rgb(250, 250, 250);
`;
const MissionTitle = styled.div`
  width: 1030.2px;
  height: 161px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;
const MissionDescription = styled.div`
  width: 1030.2px;
  height: 469px;
  display: flex;
  justify-content: flex-start;
  @media ${(props) => props.theme.mediaQueries.media576} {
    flex-direction: column;
    background: red;
  }
`;
const MissionStatement = styled.div`
  width: 708px;
  height: 344px;
  margin: 0 47px 0 0;
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 395px;
    height: 196px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const OwnerInfo = styled.div`
  width: 359px;
  height: 334px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 414px;
    height: 229px;
    background: green;
    img {
      width: 159px;
      height: 146px;
      order: 3;
    }
    h2 {
      margin-bottom: 4px;
    }
    h3 {
      margin-bottom: 9px;
    }
  }
`;

const SectionBorder = styled.div`
  width: 100%;
  height: 47px;
  background: rgb(253, 232, 1);
`;

const EmployeeInfo = styled.div`
  width: 100%;
  background: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const EmployeeTitle = styled.div`
  width: 1030.2px;
  height: 161px;
  margin-bottom: 52px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Employee = styled.div`
  width: 1030.2px;
  height: 235px;
  display: flex;
  justify-content: flex-start;

  margin-bottom: 133px;
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 414px;
    flex-direction: column;
    align-items: center;
  }
`;
const About = styled.div`
  width: 661px;
  height: 228px;
  margin-right: 20.3px;
  h2 {
    margin: 0 0 11.5px 0;
  }
  h3 {
    margin: 0 0 11.5px 0;
  }
  p {
    line-height: 1.4;
  }
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 414px;
    margin-right: 0;
    background: blue;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`;
const ProfilePicContain = styled.div`
  width: 307px;
  height: 230px;
  transform: skew(-20deg);
  background: brown;
  @media ${(props) => props.theme.mediaQueries.media576} {
    width: 159.5px;
    height: 147.1px;
    transform: none;
  }
`;
const AboutUs = (props) => {
  return (
    <Wrapper>
      <MissionContainer>
        <MissionTitle>
          <h1>Our Drive</h1>
        </MissionTitle>
        <MissionDescription>
          <MissionStatement>
            <p>
              Folly words widow one downs few age every seven. If miss part by
              fact he park just shew. Discovered had get considered projection
              who favourable. Necessary up knowledge it tolerably. Unwilling
              departure education is be dashwoods or an. Use off agreeable law
              unwilling sir deficient curiosity instantly. Easy mind life fact
              with see has bore ten. Parish any chatty can elinor direct for
              former. Up as meant widow equal an share least. Folly words widow
              one downs few age every seven. If miss part by fact he park just
              shew. Discovered had get considered projection who favourable.
              Necessary up knowledge it tolerably. Unwilling departure education
              is be dashwoods or an. Use off agreeable law unwilling sir
              deficient curiosity instantly. Easy mind life fact with see has
              bore ten. Parish any chatty can elinor direct for former. Up as
              meant widow equal an share least.{" "}
            </p>
          </MissionStatement>
          <OwnerInfo>
            <img />
            <h2>Leonard Vasquez</h2>
            <h3>CEO</h3>
          </OwnerInfo>
        </MissionDescription>
        <SectionBorder></SectionBorder>
      </MissionContainer>
      <EmployeeInfo>
        <EmployeeTitle>
          <h1>The Active Crew</h1>
        </EmployeeTitle>
        <Employee>
          <About>
            <h2>Ritchie</h2>
            <h3>Senior Technicion</h3>
            <p>8 years</p>
          </About>
          <ProfilePicContain>
            <img />
          </ProfilePicContain>
        </Employee>
        <Employee>
          <About>
            <h2>Jerry</h2>
            <h3>Mechanic</h3>
            <p>transmission rebuild and mechanic</p>
          </About>
          <ProfilePicContain>
            <img />
          </ProfilePicContain>
        </Employee>
        <Employee>
          <About>
            <h2>Miseal</h2>
            <h3>Mechanic</h3>
            <p>6 years at active...</p>
          </About>
          <ProfilePicContain>
            <img />
          </ProfilePicContain>
        </Employee>
      </EmployeeInfo>
    </Wrapper>
  );
};

export default AboutUs;
