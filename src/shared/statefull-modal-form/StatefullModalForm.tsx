import React, { useState, FormEvent } from 'react';
import { Button } from '../button/Button';
import { TextInput } from '../text-input/TextInput';
import { ModalForm } from '../modal-form/ModalForm';
import s from './StatefullModalForm.module.scss';

export const StatefullModalForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalFormVisible, setIsModalFormVisible] = useState(false);

  const openModalForm = () => setIsModalFormVisible(true);
  const closeModalForm = () => setIsModalFormVisible(false);
  const saveInputValue = (event: FormEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);

  return (
    <div className={s['statefull-modal']}>
      <TextInput value={inputValue} onInput={saveInputValue} />
      <Button onClick={openModalForm}>Открыть модальное окно</Button>
      <ModalForm visible={isModalFormVisible} onClose={closeModalForm}>
        <p>{inputValue}</p>
      </ModalForm>
    </div>
  );
};
