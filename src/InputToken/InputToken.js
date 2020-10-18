import React, { createRef, useState } from 'react';
import {
  InputCustom,
  ContainerAccessCode,
  ContainerDisplay,
  DisplayFocus,
  Display,
} from './style';

const InputToken = ({
  onComplete,
  onChange,
  onValidate,
  size = 8,
  fontColor,
  shadowColor,
  borderColor,
}) => {
  const CODE_LENGTH = new Array(size).fill(0);
  const input = createRef();
  const [codeAccess, setCodeAccess] = useState('');
  const [focusInput, setFocusInput] = useState(false);

  const handleChange = (event) => {
    let code = event.target.value;
    code = onValidate ? onValidate(code) : code;
    const newValue = codeAccess.concat(code.trim());
    if (newValue.length > CODE_LENGTH.length) return null;
    if (newValue.length === CODE_LENGTH.length) onComplete(newValue);
    if (onChange) onChange(newValue);
    setCodeAccess(newValue);
    return newValue;
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      setCodeAccess(() => codeAccess.slice(0, codeAccess.length - 1));
    }
  };

  const handleClick = () => input.current.focus();

  const handleFocus = () => setFocusInput(true);

  const handleBlur = () => setFocusInput(false);

  return (
    <ContainerAccessCode>
      <ContainerDisplay onClick={handleClick}>
        <InputCustom
          type="text"
          value=""
          autoFocus
          ref={input}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ opacity: 0, width: 0 }}
        />
        {CODE_LENGTH.map((code, index) => {
          const indices = index + 1;
          const codes = codeAccess.split('');
          const selected = index === codes.length;
          return (
            <Display
              key={indices}
              fontColor={fontColor}
              borderColor={borderColor}
            >
              {codes[index]}
              {selected && focusInput && (
                <DisplayFocus shadowColor={shadowColor} />
              )}
            </Display>
          );
        })}
      </ContainerDisplay>
    </ContainerAccessCode>
  );
};

export default InputToken;
