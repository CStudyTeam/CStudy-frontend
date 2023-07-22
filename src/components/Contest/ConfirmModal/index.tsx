import { useCallback } from 'react';
import Modal from 'components/@shared/modal';
import Button from 'components/@shared/Button';
import * as Styled from './style';

interface ConfirmModalProps {
    title: string;
    isOpen: boolean;
    isLoading?: boolean;
    confirmText: string;
    cancelText: string;
    handleConfirm: () => void;
    handleCancel: () => void;
}

const ConfirmModal = ({
    isLoading,
    title,
    isOpen,
    confirmText,
    cancelText,
    handleConfirm,
    handleCancel,
}: ConfirmModalProps) => {
    const onConfirm = useCallback(() => {
        handleConfirm();
    }, [handleConfirm]);

    const onCancel = useCallback(() => {
        handleCancel();
    }, [handleCancel]);
    return (
        <Modal isOpenModal={isOpen} closeModalHandler={handleCancel}>
            <Styled.ModalContainer>
                <Styled.ModalTitle>{title}</Styled.ModalTitle>
                <Styled.ButtonRow>
                    <Button className="xl navy style w-half" onClick={onConfirm} disabled={isLoading}>
                        {confirmText}
                    </Button>
                    <Button type="button" className="xl gray style w-half" onClick={onCancel} disabled={isLoading}>
                        {cancelText}
                    </Button>
                </Styled.ButtonRow>
            </Styled.ModalContainer>
        </Modal>
    );
};

export default ConfirmModal;
