import Modal from 'components/@shared/modal';
import * as Styled from './style';
import Button from 'components/@shared/Button';
import { COLOR } from 'constants/Color';

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
                    <Button
                        width="45%"
                        backgroundColor={COLOR.NAVY_200}
                        color={COLOR.WHITE}
                        shadow
                        borderRadius="1.2rem"
                        onClick={handleConfirm}
                        disabled={isLoading}
                    >
                        참가하기
                    </Button>
                    <Button
                        type="button"
                        width="45%"
                        backgroundColor={COLOR.GRAY_200}
                        color={COLOR.WHITE}
                        shadow
                        borderRadius="1.2rem"
                        onClick={handleCancel}
                        disabled={isLoading}
                    >
                        돌아가기
                    </Button>
                </Styled.ButtonRow>
            </Styled.ModalContainer>
        </Modal>
    );
};

export default ConfirmModal;
