import { useEffect, useState } from 'react';

const useModal = () => {
    const [isOpenModal, setisOpenModal] = useState(false);

    const openModalHandler = () => {
        setisOpenModal(true);
    };

    const closeModalHandler = () => {
        setisOpenModal(false);
    };

    useEffect(() => {
        if (isOpenModal) {
            document.body.style.overflowY = 'hidden';
            document.body.style.paddingRight = '17px';
        } else {
            document.body.style.overflowY = 'auto';
            document.body.style.paddingRight = '0px';
        }
    }, [isOpenModal]);

    return {
        closeModalHandler,
        openModalHandler,
        isOpenModal,
    };
};

export default useModal;
