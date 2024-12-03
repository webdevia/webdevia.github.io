import React, { FormEvent } from 'react';
import s from './TextInput.module.scss';

type TextInputProps = {
  value: string;
  onInput?: (event: FormEvent<HTMLInputElement>) => void;
};

export const TextInput = ({ value, onInput }: TextInputProps) => (
  <input className={s['text-input']} type="text" value={value} onInput={onInput} />
);
