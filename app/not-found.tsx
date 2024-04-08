"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function getCurrentURL () {
    return window.location.href
  }
  
  const url = getCurrentURL()
  
  console.log(url)
  
  return (
    <div>
      {pathname}?{searchParams}<br />
      <br />
      www.amazon.com/Logitech-MX-Master-3S-Graphite/dp/B09HM94VDS?crid=Z3W4SXQY8301&keywords=mx%2Bmaster%2B3&qid=1702480110&sprefix=mx%2Bmaster%2B3%2Caps%2C96&sr=8-1-spons&ufe=app_do%3Aamzn1.fos.17d9e15d-4e43-4581-b373-0e5c1a776d5d&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&linkCode=sl1&tag=jacobsucksatc-20&linkId=fef0f274256261b5daa5178cd4a9354c&language=en_US&ref_=as_li_ss_tl
    </div>
  );
}
