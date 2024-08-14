import React from 'react'
import Script from 'next/script'
function Footer() {
  return (
    <>
    <div>This is Footer</div>
    {/* <Script src="/js/tg-page-head.js"></Script> */}
    <Script src="/js/vendor/jquery-3.6.0.min.js"></Script>
    <Script src="/js/plugins.js"></Script>
    <Script src="/js/ajax-form.js"></Script>
    <Script src="/js/main.js"></Script>
    </>
  )
}

export default Footer