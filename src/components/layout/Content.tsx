import React from 'react'
import clsx from 'clsx'

export interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

const Content = React.forwardRef<HTMLDivElement, WrapperProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={clsx(
          'flex flex-col flex-grow overflow-hidden h-full',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

Content.displayName = 'Content'

export default Content