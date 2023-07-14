import React from 'react';

const Notif = ({ className, message }) => {
  return (
    <div className={`lg:w-1/3 w-full text-white font-semibold rounded-xl ${className}`}>
      <p className="p-3">{message}</p>
    </div>
  );
};

export default Notif;
