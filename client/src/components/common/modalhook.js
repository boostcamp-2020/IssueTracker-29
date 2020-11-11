import React, { useEffect, useState } from 'react';

const useModal = (buttonName) => {
  const [onModal, setOnModal] = useState(false);

  useEffect(() => {
    if(onModal) return;
    document.body.addEventListener('click', (e) => {
      if(e.target.closest('.modal')) return;
      if(e.target.classList.contains(buttonName)) return;
      setOnModal(false);
    });
  }, []);

  return [onModal, setOnModal];
};

export default useModal;