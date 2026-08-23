import { ExternalLink } from "lucide-react";

export function PageHeading({ as: Heading = "h1", children, className = "" }) {
  const Component = Heading
  return <Component className={`page-heading ${className}`}>{children}</Component>
}

export function LinkWrapper({ href, children, ...props}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="text-[var(--color-link)] underline underline-offset-2 hover:text-[var(--color-accent)] focus-ring"
    >
      {children}
    </a>
  )
}

export function LinkIndicator({link, label = "Open external link"}){
  if(!link)
    return

  return (
      <LinkWrapper href={link} aria-label={label}>
      <ExternalLink className="inline-block w-3.5 h-3.5 -mt-0.5 text-[var(--color-text)]"/>
    </LinkWrapper>
  )
}

export function GithubAction({ href }) {
  if (!href)
    return null

  return (
    <span className="mt-2 block text-sm">
      <LinkWrapper href={href}>
        View on GitHub <ExternalLink aria-hidden="true" className="inline-block size-3.5" />
      </LinkWrapper>
    </span>
  )
}
