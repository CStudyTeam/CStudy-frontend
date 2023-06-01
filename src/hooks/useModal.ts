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
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isOpenModal]);

    return {
        closeModalHandler,
        openModalHandler,
        isOpenModal,
    };
};

export default useModal;
