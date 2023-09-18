'use client'
import React, { useState } from 'react';
import InputBox from '../single/InputBox';

interface InputFormProps{
	onClick : Function,
	disabled : boolean,
}

const InputForm: React.FC<InputFormProps> = ({ onClick, disabled }) => {
  const [inputValue, setInputValue] = useState<string>('');
  const [submittedValue, setSubmittedValue] = useState<string | null>(null);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <h2>Input Form</h2>
      <InputBox value={inputValue} onChange={handleInputChange} />
      <button onClick={handleSubmit} />
      {submittedValue !== null && (
        <div>
          <h3>Submitted Value:</h3>
          <p>{submittedValue}</p>
        </div>
      )}
    </div>
  );
};

export default InputForm;
