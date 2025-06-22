import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(
    343.07deg,
    rgba(132, 59, 206, 0.06) 5.71%,
    rgba(132, 59, 206, 0) 64.83%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  margin-bottom: 24px;
  text-align: center;
  background: ${({ theme }) => theme.gradient_primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const Desc = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.8;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 1.1rem;
  }
`;

export const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  width:60vw;
  max-width:80vw;
  overflow:auto;
  font-size: 16px;
  border-radius: 30px 10px;
  font-weight: 500;
  margin: 22px 0px;
  &::-webkit-scrollbar {
    display: none;
}:hover::-webkit-scrollbar {
    display: block;
    height:2px;
    left:9;
}::-webkit-scrollbar-track {
  background: transparent;
  margin:0px 25px 0px 25px;
}::-webkit-scrollbar-thumb{
  background: ${({ theme }) => theme.text_secondary};
}
  @media (max-width: 768px) {
  width:80vw;
  max-width:85vw;
  font-size: 12px;
  }
`;

export const ToggleButton = styled.div`
  padding: 8px 18px;
  text-align:center;
  width:60vw;
  white-space: nowrap; //Set For Avoidiing Word-Break
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${({ active, theme }) =>
    active &&
    `    color:${theme.text_secondary};
    `}
  &:hover {
    background: ${({ theme }) => theme.primary + 8};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;
export const Span = styled.div`
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  max-width: 35vw;
  border-radius: 20px;
  font-weight: 500;
  padding: 10px;
  @media (max-width: 768px) {
    max-width: 85vw;
    font-size: 12px;
  }
`;

export const Divider = styled.div`
  width: 1.5px;
  padding: 0.5px ;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
  // display: grid;
  // grid-template-columns: repeat(3, 1fr);
  // grid-gap: 32px;
  // grid-auto-rows: minmax(100px, auto);
  // @media (max-width: 960px) {
  //     grid-template-columns: repeat(2, 1fr);
  // }
  // @media (max-width: 640px) {
  //     grid-template-columns: repeat(1, 1fr);
  // }
`;
