import {getColorScheme} from "@/lib/utils";
import {AppTheme} from "@/store/app-settings";
import { useEffect, useState } from "react";

const useColorScheme = (): AppTheme => {
    const [colorScheme, setColorScheme] = useState<AppTheme>(getColorScheme());

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleChange = () => {
            setColorScheme(mediaQuery.matches ? "dark" : "light");
        };

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    return colorScheme;
};

export { useColorScheme }
