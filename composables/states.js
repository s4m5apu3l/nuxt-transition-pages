export const useGeneralState = () =>
    useState("general-state", () => ({
        pageBg: "page_black",
        scrollLenis: null,
        isPreloaderVisible: true,
        isTransitionFinish: true,
        isTransitionStart: true,
    }));
