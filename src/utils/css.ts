import {ThemeProviderState} from '../hooks/theme-provider.tsx'

export const isDarkTheme = (s: ThemeProviderState) => s.theme === 'dark'