import { useEffect, useState } from "react";

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        if (typeof window !== "undefined") {
            // @ts-ignore
            function handleResize() {
                // @ts-ignore
                setWindowSize({
                    // @ts-ignore
                    width: window.innerWidth,
                    // @ts-ignore
                    height: window.innerHeight
                });
            }

            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}
