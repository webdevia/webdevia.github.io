import React from 'react';
import { OperationDetail } from '../operation-detail/OperationDetail';
import { Operation as OperationProps } from '../../../homeworks/ts1/3_write';
import s from './OperationList.module.scss';

type OperationItemProps = Omit<OperationProps, 'id'>;

const OperationItem = (data: OperationItemProps) => (
  <OperationDetail
    amount={data.amount}
    category={data.category.name}
    date={data.createdAt}
    description={data.desc}
    title={data.name}
  />
);

type OperationListProps = {
  items: OperationProps[];
};

export const OperationList = ({ items }: OperationListProps) => (
  <div className={s['operation-list']}>
    {items.map((item) => {
      const { id, ...rest } = item;
      return <OperationItem {...rest} key={id} />;
    })}
  </div>
);
