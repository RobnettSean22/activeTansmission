import styled from "styled-components";
import Tranny from "../../assets/active_new_trany.jpg";

export const Wrapper = styled.div``;

export const Nav = styled.div`
  width: 100%;
  height: 654px;
  margin: 0px 0 0 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${(props) => props.theme.mediaQueries.media576} {
    display: none;
  }
`;
export const RepairTitleContainer = styled.div`
  width: 100%;
  height: 174px;
  background-repeat: no-repeat;
  background-size: 2000px 465px;
  background-position: 50% 43%;
  background-image: url(${Tranny});
`;
export const Shadder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(50, 65, 108, 0.32);
`;
export const LeftLine = styled.hr`
  width: 475px;
  position: relative;
  left: 0;
  border: 1px solid rgb(253, 232, 1);
`;
export const RightLine = styled.hr`
  width: 475px;
  position: relative;
  right: 0;
  border: 1px solid rgb(253, 232, 1);
`;
export const RepairTitle = styled.div`
  width: 486px;
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px rgb(253, 232, 1);
  background: rgb(50, 65, 108, 0.62);
  h1 {
    font-size: 60px;
    font-family: "Lora", serif;
    font-weight: 700;
    color: rgb(247, 247, 247);
    margin: 0;
  }
`;
export const NavCase = styled.div`
  width: 100%;
  height: 355px;
  background: rgba(50, 65, 108, 0.25);
`;
export const WarrantyInfo = styled.div`
  width: 223px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 9px 0 0 9px;
  h5 {
    font-size: 18px;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    margin: 0;
  }
`;
export const Indicator = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #51f74a;
  border: solid 1px #363995;
  margin-left: 23px;
`;
export const SecondNav = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(36, 39, 140, 0.91);
`;
