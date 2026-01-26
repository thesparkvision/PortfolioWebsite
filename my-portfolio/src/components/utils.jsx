import { ExternalLink } from "lucide-react";

export function LinkWrapper({ href, children}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline underline-offset-2 hover:text-blue-800"
    >
      {children}
    </a>
  )
}

export function LinkIndicator({link}){
  if(!link)
    return

  return (
    <LinkWrapper href={link}>
      <ExternalLink className="inline-block w-3.5 h-3.5 -mt-0.5 text-zinc-900"/>
    </LinkWrapper>
  )
}