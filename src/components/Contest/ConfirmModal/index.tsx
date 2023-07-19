import Modal from 'components/@shared/modal';
import Button from 'components/@shared/Button';
import * as Styled from './style';

interface ConfirmModalProps {
    title: string;
    isOpen: boolean;
    isLoading: boolean;
    handleConfirm: () => void;
    handleCancel: () => void;
}

const ConfirmModal = ({ isLoading, title, isOpen, handleConfirm, handleCancel }: ConfirmModalProps) => {
    return (
        <Modal isOpenModal={isOpen} closeModalHandler={handleCancel}>
            <Styled.ModalContainer>
                <Styled.ModalTitle>{title}</Styled.ModalTitle>
                <Styled.ButtonRow>
                    <Button className="xl navy style w-half" onClick={handleConfirm} disabled={isLoading}>
                        참가하기
                    </Button>
                    <Button type="button" className="xl gray style w-half" onClick={handleCancel} disabled={isLoading}>
                        돌아가기
                    </Button>
                </Styled.ButtonRow>
            </Styled.ModalContainer>
        </Modal>
    );
};

export default ConfirmModal;
