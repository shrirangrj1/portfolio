import React, { useEffect, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import "../MouseLight.css";

const MouseLight = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // Show only on medium screens and up

    useEffect(() => {
        if (!isDesktop) return; // Don't attach the event listener on small screens

        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [isDesktop]);

    if (!isDesktop) {
        return null; // Do not render on small screens
    }

    return (
        <div
            className="mouse-light"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        />
    );
};

export default MouseLight;
