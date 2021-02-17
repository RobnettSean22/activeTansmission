import styled from "styled-components";
import Tranny from "../../assets/active_new_trany.jpg";

export const Wrapper = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.media576} {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const PageTitle = styled.div`
  width: 100%;
  height: 62px;
  background-repeat: no-repeat;
  background-size: 2000px 465px;
  background-position: 80% 42%;
  background-image: url(${Tranny});
`;

export const WarrentyDisplay = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  align-items: flex-end;

  h3 {
    font-size: 10px;
    margin-bottom: 12px;
  }
`;
export const StatusIndicator = styled.div`
  width: 8px;
  height: 7.6px;
  border-radius: 50%;
  background: #51f74a;
  margin-left: 8px;
  margin-bottom: 15px;
`;

export const Shadder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(50, 65, 108, 0.32);
`;
export const RightLine = styled.hr`
  width: 97px;
  position: relative;
  right: 0;
  border: 1px solid rgb(253, 232, 1);
`;
export const LeftLine = styled.hr`
  width: 97px;
  position: relative;
  left: 0;
  border: 1px solid rgb(253, 232, 1);
`;

export const RepairTitle = styled.div`
  width: 382px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px rgb(253, 232, 1);
  background: rgb(50, 65, 108, 0.62);
  h1 {
    font-size: 2.4rem;
    font-family: "Lora", serif;
    font-weight: 700;
    color: rgb(247, 247, 247);
    margin: 0;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
