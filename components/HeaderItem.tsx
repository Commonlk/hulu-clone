import React, { ComponentProps, ElementType } from 'react';

interface Props {
  title: string;
  Icon: ElementType<ComponentProps<'svg'>>;
}

const HeaderItem = ({ Icon, title }: Props) => {
  return (
    <div className="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="hidden opacity-0 group-hover:opacity-100 group-hover:inline h-0 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
