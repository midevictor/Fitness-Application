import React from 'react'

type Props = {
  children: React.ReactNode
}

const HTEXT = ({children}: Props) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default HTEXT;