import {AppSidebar} from "@/components/app-sidebar";
import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar";
import {Toaster} from "@/components/ui/toaster";
import {TooltipProvider} from "@/components/ui/tooltip";
import {cn} from "@/lib/utils";
import Chat from "@/routes/chat";
import Home from "@/routes/home";
import Overview from "@/routes/overview";
import {useAppSettings} from "@/store/app-settings";
import {BrowserRouter, Route, Routes} from "react-router";

const Document = () => {
    const { ui: {theme: { value: theme }} } = useAppSettings();

    return (
        <div
            className={cn(theme, "antialiased")}
            style={{
                colorScheme: theme,
            }}
        >
            <BrowserRouter>
                <TooltipProvider delayDuration={0}>
                    <SidebarProvider>
                        <AppSidebar/>
                        <SidebarInset>
                            <div className="flex flex-1 flex-col gap-4 size-full container">
                                <Routes>
                                    <Route path="/" element={<Home/>}/>
                                    <Route
                                        path="chat/:agentId"
                                        element={<Chat/>}
                                    />
                                    <Route
                                        path="settings/:agentId"
                                        element={<Overview/>}
                                    />
                                </Routes>
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
                    <Toaster/>
                </TooltipProvider>
            </BrowserRouter>
        </div>
    )
}

export {Document}
