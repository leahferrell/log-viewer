import {SettingsIcon} from 'lucide-react'

import Dialog from '../../components/custom/Dialog.tsx'
import {Button} from '../../components/ui/button.tsx'

export default function AppSettingDialog() {
  return (
    <Dialog
      title="Setting"
      className="min-w-[800px] min-h-[600px]"
      trigger={
        <Button variant="ghost" size="icon" className="size-8 rounded-lg">
          <SettingsIcon className="size-4" />
        </Button>
      }
    >
      <div>
        I am a dialog! Yay!
      </div>
    </Dialog>
  );
}