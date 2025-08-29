import { LayoutProvider, ThemeProvider, DataThemeProvider, ToastProvider, IconProvider } from "@once-ui-system/core";

export default function Providers({ children }) {
    return (
        <LayoutProvider>
            <ThemeProvider>
                <DataThemeProvider>
                    <ToastProvider>
                        <IconProvider>
                            {children}
                        </IconProvider>
                    </ToastProvider>
                </DataThemeProvider>
            </ThemeProvider>
        </LayoutProvider>
    )
}