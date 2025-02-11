import {useColorScheme} from "@/lib/hooks";
import {AppSettings, AppTheme} from "@/store/app-settings/context";
import {AppSettingsProvider} from "@/store/app-settings/provider";
import {PropsWithChildren, useState} from "react";
import { useLocalStorage } from "@uidotdev/usehooks"

const WithSettings = (props: PropsWithChildren) => {
    const {children} = props;
    const colorScheme: AppTheme = useColorScheme();
    const [theme, setTheme] = useLocalStorage<AppTheme>(AppSettings.name, colorScheme);

    const toggle = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <AppSettingsProvider value={{
            ui: {
                theme: {
                    value: theme,
                    toggle,
                }
            }
        }}>
            {children}
        </AppSettingsProvider>
    )
}

export {WithSettings};
