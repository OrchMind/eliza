import {createContext} from "react";

type AppTheme = "light" | "dark";

interface IAppSettings {
    ui: {
        theme: {
            value: string;
            toggle: () => void;
        }
    }
}


const AppSettings = createContext<IAppSettings>({} as IAppSettings)


export { AppSettings }
export type { IAppSettings, AppTheme }
