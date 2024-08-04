import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface BearState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useBearStore = create(
  devtools<BearState>(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 }), false, "increment"),
      decrement: () => set((state) => ({ count: state.count - 1 }), false, "decrement"),
      reset: () => set({ count: 0 }),
    }),
    { name: "bear-store" }
  )
);

export default useBearStore;
