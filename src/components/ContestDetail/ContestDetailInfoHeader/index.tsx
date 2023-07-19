import useJoinContestModal from 'hooks/Contest/useJoinContestModal';
import { isLogin } from 'utils/auth';
import StyleLink from 'components/@shared/StyleLink';
import Button from 'components/@shared/Button';
import ConfirmModal from 'components/Contest/ConfirmModal';
import * as Styled from './style';

interface ContestDetailInfoHeaderProps {
    myRanking: boolean;
    isLoading: boolean;
    finishContest: boolean;
    contestId: string;
    handleIsLoading: (isLoading: boolean) => void;
}

const ContestDetailInfoHeader = ({
    myRanking,
    isLoading,
    finishContest,
    contestId,
    handleIsLoading,
}: ContestDetailInfoHeaderProps) => {
    const { isModalOpen, handleConfirm, handleCancel, handleJoinContestModal } = useJoinContestModal({
        contestId,
        handleIsLoading,
    });
    return (
        <>
            <Styled.ContestInfoHeaderWrapper>
                <Styled.Label>대회정보</Styled.Label>
                <Styled.ButtonWrapper>
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
                </Styled.ButtonWrapper>
            </Styled.ContestInfoHeaderWrapper>
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
