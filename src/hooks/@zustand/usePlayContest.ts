import { create } from 'zustand';

interface PlayContestStore {
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}

const usePlayContest = create<PlayContestStore>((set) => ({
    isPlaying: false,
    setIsPlaying: (isPlaying: boolean) => set(() => ({ isPlaying })),
}));

export default usePlayContest;
