import linkIndicatorIcon from "../assets/linkIndicator.svg";

export function ExternalLink({ href, children}) {
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
    <ExternalLink href={link}>
      <img
        src={linkIndicatorIcon}
        alt=""
        className="ml-1 h-6 w-3 inline-block"
        aria-hidden
      />
    </ExternalLink>
  )
}