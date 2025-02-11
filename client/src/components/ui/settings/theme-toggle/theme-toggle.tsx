import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";
import {useAppSettings} from "@/store/app-settings";
import {ForwardedRef, forwardRef} from "react";

const ThemeToggle = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
    const { ui: {theme: {value: theme, toggle}} } = useAppSettings()

    const isChecked = theme === "dark"

        return (
            <div className="flex items-center space-x-2 p-2" ref={ref}>
                <Switch id="airplane-mode" checked={isChecked} onCheckedChange={toggle}/>
                <Label htmlFor="airplane-mode">{theme}</Label>
            </div>
        );
    }
)

ThemeToggle.displayName = "ThemeToggle";

export {ThemeToggle};
