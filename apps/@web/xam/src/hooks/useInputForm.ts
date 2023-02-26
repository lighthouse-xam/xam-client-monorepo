import { useState } from 'react';

export function useInputForm() {
  const [input, setInput] = useState('');

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return [input, onInput] as const;
}
