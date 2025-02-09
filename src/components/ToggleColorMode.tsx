import {MoonIcon, SunIcon} from 'lucide-react'

import {useTheme} from '../hooks/theme-provider.tsx'
import {isDarkTheme} from '../utils/css.ts'
import {Button} from './ui/button.tsx'

export default function ToggleColorMode() {
  const theme = useTheme();

  return (
    <Button
      onClick={() => {
        const mode = theme.theme == 'dark' ? 'light' : 'dark';
        theme.setTheme(mode);
      }}
      variant="ghost"
      size="icon"
      className="size-8 rounded-lg"
    >
      {isDarkTheme(theme) ? (
        <MoonIcon className="size-4" />
      ) : (
        <SunIcon className="size-4" />
      )}
    </Button>
  );
}