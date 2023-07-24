import { create } from 'zustand';

interface TryOutContestStore {
    tryOutOfContest: boolean;
    setTryOutOfContest: (tryOutContest: boolean) => void;
}

const useTryOutContest = create<TryOutContestStore>((set) => ({
    tryOutOfContest: false,
    setTryOutOfContest: (tryOutOfContest: boolean) => set(() => ({ tryOutOfContest })),
}));

export default useTryOutContest;
