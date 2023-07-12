import { Dispatch, SetStateAction } from 'react';
import StyleLink from 'components/@shared/StyleLink';
import Button from 'components/@shared/Button';
import { ButtonWrapper, ContestInfoHeaderWrapper, Label } from 'pages/ContestDetail/style';
import ConfirmModal from 'components/Contest/ConfirmModal';
import { isLogin } from 'utils/auth';
import useJoinContestModal from 'hooks/Contest/useJoinContestModal';

interface ContestDetailInfoHeaderProps {
    myRanking: boolean;
    isLoading: boolean;
    finishContest: boolean;
    contestId: string;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const ContestDetailInfoHeader = ({
    myRanking,
    isLoading,
    finishContest,
    contestId,
    setIsLoading,
}: ContestDetailInfoHeaderProps) => {
    const { isModalOpen, handleConfirm, handleCancel, handleJoinContestModal } = useJoinContestModal({
        contestId,
        setIsLoading,
    });
    return (
        <>
            <ContestInfoHeaderWrapper>
                <Label>대회정보</Label>
                <ButtonWrapper>
                    {isLogin() && (
                        <StyleLink to="contestresult" state={myRanking} className="xl green style">
                            나의 대회 결과보기
                        </StyleLink>
                    )}
                    {!finishContest && (
                        <Button type="button" className="xl navy style" onClick={handleJoinContestModal}>
                            대회 참여하기
                        </Button>
                    )}
                </ButtonWrapper>
            </ContestInfoHeaderWrapper>
            <ConfirmModal
                title="대회에 참가하시겠습니까?"
                isOpen={isModalOpen}
                handleConfirm={handleConfirm}
                handleCancel={handleCancel}
                isLoading={isLoading}
            />
        </>
    );
};

export default ContestDetailInfoHeader;
