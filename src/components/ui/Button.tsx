import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md'
  href?: string
  target?: string
  rel?: string
  download?: boolean | string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
  className?: string
  ariaLabel?: string
}

function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  download,
  type = 'button',
  disabled,
  onClick,
  className,
  ariaLabel,
}: ButtonProps) {
  const classes = cn('button', `button--${variant}`, `button--${size}`, className)

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default Button
