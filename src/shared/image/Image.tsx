import React from 'react';
import s from './Image.module.scss';

type ImageProps = {
  url: string;
  title: string;
};

export const Image = ({ url, title }: ImageProps) => <img src={url} alt={title} className={s.image} />;
