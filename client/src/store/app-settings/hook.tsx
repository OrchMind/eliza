import {AppSettings, IAppSettings} from "@/store/app-settings/context";
import {use} from "react";

const useAppSettings = (): IAppSettings => {
    return use<IAppSettings>(AppSettings);
}

export { useAppSettings };
