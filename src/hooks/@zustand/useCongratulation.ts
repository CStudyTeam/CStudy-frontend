import { create } from 'zustand';

interface CongratulationStore {
    isCongratulation: boolean;
    setCongratulation: (isCongratulation: boolean) => void;
}

const useCongratulation = create<CongratulationStore>((set) => ({
    isCongratulation: false,
    setCongratulation: (isCongratulation: boolean) => set(() => ({ isCongratulation })),
}));

export default useCongratulation;
