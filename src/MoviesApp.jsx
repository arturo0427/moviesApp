import { AppRouter } from "./router/AppRouter";
import { AppTheme } from "./theme/AppTheme";

export const MoviesApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    )
}
