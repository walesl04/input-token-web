import styled from 'styled-components';
import colors from '../resources/colors';

export const ContainerAccessCode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 30px;
`;

export const InputCustom = styled.input`
  position: absolute;
  border: none;
  font-size: 36px;
  text-align: center;
  background-color: transparent;
  outline: none;
  font-family: Roboto;

  outline-style: none;
  box-shadow: none;
  border-color: transparent;
`;

export const ContainerDisplay = styled.div`
  display: flex;
  position: relative;
  width: 450px;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  @media (max-width: 600px) {
    width: 225px;
  }
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: ${(props) => (props.fontColor ? props.fontColor : colors.dark)};
  width: 36px;
  height: 58px;
  border-bottom: 2px solid
    ${(props) => (props.borderColor ? props.borderColor : colors.primary)};
  position: relative;

  @media (max-width: 600px) {
    width: 20px;
    font-size: 26px;
  }
`;

export const DisplayFocus = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 4.5px 2px -2px ${(props) => (props.shadowColor ? props.shadowColor : colors.dark)};
`;
