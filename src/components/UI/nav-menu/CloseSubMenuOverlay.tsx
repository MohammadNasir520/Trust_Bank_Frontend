import { Box } from "@chakra-ui/layout";
import { useEffect, useRef } from "react";

const CloseSubMenuOverlay = ({ isActive, closeSubMenu }: any) => {
    const refMenuOverlay: any = useRef();
    function onMouseMenuOverlayEnterHanler() {
        closeSubMenu();
    }

    useEffect(() => {
        if (refMenuOverlay.current) {
            refMenuOverlay.current.addEventListener(
                "mouseenter",
                onMouseMenuOverlayEnterHanler
            );
        }

        return () => {
            if (refMenuOverlay.current) {
                refMenuOverlay.current.removeEventListener(
                    "mouseenter",
                    onMouseMenuOverlayEnterHanler
                );
            }
        };
    }, []);

    return (
        <Box
            ref={refMenuOverlay}
            position="fixed"
            pointerEvents={isActive ? "auto" : "none"}
            w="100vw"
            h="100vh"
            zIndex={999}
        ></Box>
    );
};

export default CloseSubMenuOverlay;
