import React, { useState, FormEvent } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../button/Button';
import { TextInput } from '../text-input/TextInput';
import { ModalForm } from '../modal-form/ModalForm';
import s from './PortalModalForm.module.scss';

export const PortalModalForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [isModalFormVisible, setIsModalFormVisible] = useState(false);

  const openModalForm = () => setIsModalFormVisible(true);
  const closeModalForm = () => setIsModalFormVisible(false);
  const saveInputValue = (event: FormEvent<HTMLInputElement>) => setInputValue(event.currentTarget.value);

  return (
    <div className={s['portal-modal']}>
      <TextInput value={inputValue} onInput={saveInputValue} />
      <Button onClick={openModalForm}>Открыть модальное окно</Button>
      {createPortal(
        <ModalForm visible={isModalFormVisible} onClose={closeModalForm}>
          <p>{inputValue}</p>
        </ModalForm>,
        document.body
      )}
    </div>
  );
};
