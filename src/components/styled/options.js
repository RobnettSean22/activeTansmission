import styled from "styled-components";

export const OptionWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;

  justify-content: space-evenly;
  align-items: center;

  div:hover,
  h5 :hover {
    cursor: pointer;
  }

  h5 {
    font-size: 20px;
    margin: 0;
    color: white;
    text-align: center;
  }

  .targeted {
    width: 130px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h5 {
      border-bottom: 2px solid rgb(253, 232, 1);
    }
  }
  .untargeted {
    width: 130px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media ${(props) => props.theme.mediaQueries.media1170} {
    h5 {
      font-size: 18px;
    }
  }
`;
