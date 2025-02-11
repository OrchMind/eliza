import {AppSettings, IAppSettings} from "@/store/app-settings/context";
import {Provider} from "react";

const AppSettingsProvider: Provider<IAppSettings> = AppSettings.Provider;

export { AppSettingsProvider };
