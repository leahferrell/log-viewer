import {Code2, DatabaseIcon, FolderHeart, HelpCircleIcon, HistoryIcon, LucideIcon} from 'lucide-react'
import clsx from 'clsx'

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '../../components/ui/tooltip.tsx'
import {Button} from '../../components/ui/button.tsx'
import ToggleColorMode from '../../components/ToggleColorMode.tsx'
import AppSettingDialog from '../settings/AppSettingsDialog.tsx'
import {useState} from 'react'

interface SideButtonProps {
  id: string;
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
}

const SideButton = ({ id, icon: Comp, label, onClick }: SideButtonProps) => {
  // TODO: fix styling on active vs inactive buttons; temporarily using useState until RTK is setup
  const [activeSide, setActiveSide] = useState('')
  const handleClick = () => {
    setActiveSide(id)
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={clsx(
              'size-8 rounded-lg',
              activeSide == id ? 'bg-muted' : '',
            )}
            aria-label={label}
            onClick={onClick ?? handleClick}
          >
            <Comp className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="right" sideOffset={5}>
          {label}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export function VerticalSidebar() {
  return (
    <div>
      <nav className="grid gap-0.5 p-0.5 [&>*]:place-self-center">
        <SideButton id="database" label="Database" icon={DatabaseIcon} />
        <SideButton id="favorite" label="Favorite" icon={FolderHeart} />
        <SideButton id="code" label="Code" icon={Code2} />
        <SideButton id="history" label="History" icon={HistoryIcon} />
      </nav>
      <nav className="mt-auto grid gap-1 p-0 [&>*]:place-self-center">
        <SideButton
          id="help"
          label="Help"
          icon={HelpCircleIcon}
          onClick={() => {
            open('https://github.com/l1xnan/duckling');
          }}
        />
        <ToggleColorMode />
        <AppSettingDialog />
      </nav>
    </div>
  )
}