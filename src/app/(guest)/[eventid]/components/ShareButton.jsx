"use client"

export const ShareButton = ({ title, text, url }) => {


  return (
    <button className="flex flex-row items-center gap-2 text-[#b5b5b5] hover:text-[#888] hover:cursor-pointer"
      onClick={
        async () => {
          const shareData = { title, text, url: `${window.location.href}` }
          await navigator.share(shareData);
        }
      }
    >
      <PhShareNetworkBold className="text-xl" />
      Share this event
    </button >
  )
}


export function PhShareNetworkBold(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M176 156a43.78 43.78 0 0 0-29.09 11l-40.81-26.2a44.07 44.07 0 0 0 0-25.6L146.91 89a43.83 43.83 0 1 0-13-20.17L93.09 95a44 44 0 1 0 0 65.94l40.81 26.26A44 44 0 1 0 176 156m0-120a20 20 0 1 1-20 20a20 20 0 0 1 20-20M64 148a20 20 0 1 1 20-20a20 20 0 0 1-20 20m112 72a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></path></svg>
  )
}