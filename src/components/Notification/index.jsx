import React, { useEffect, useState } from 'react'
import Prism from 'prismjs'

export default function Notification() {
  const textError = {
    timestamp: 1608797313015,
    status: 500,
    error: 'Internal Server Error',
    message:
      'status 404 reading PCClient#getCatalogItemCountByCatalogItemType(String,CatalogItemClientRequest)',
    path: '/rest/pcms3/v1/catalogItems/search'
  }
  const stockError = {
    errors: [
      {
        message: 'The misc api 500 error.',
        errorCode: 'E11015',
        errorMessage:
          '{"timestamp":"2020-12-24T17:14:40.692","status":500,"error":"Internal Server Error","exception":"feign.RetryableException","message":"呼叫API時發生錯誤ocuat-pks.chowsangsang.com:443 failed to respond executing POST https://ocuat-pks.chowsangsang.com/oc/storefront/v1/oauth/token?grant_type\\u003dclient_credentials\\u0026scope\\u003dread","originalMessage":"ocuat-pks.chowsangsang.com:443 failed to respond executing POST https://ocuat-pks.chowsangsang.com/oc/storefront/v1/oauth/token?grant_type\\u003dclient_credentials\\u0026scope\\u003dread","code":"FEIGN_ERROR"}'
      }
    ]
  }
  useEffect(() => {
    Prism.highlightAll()
  }, [])

  function checkSubmit() {
    if (window.innerWidth > 1023) {
      if ($('.newSearchBarSecDiv form #search-input').eq(0).val().trim() !== '') {
        const oneSearchText = $('.newSearchBarSecDiv form #search-input').eq(0).val().trim()
        $('.newSearchBarSecDiv form #search-input').eq(0).val(oneSearchText)
        return true
      } else {
        return false
      }
    }

    if (window.innerWidth < 1024) {
      if ($('.newSearchBarSecDiv form #search-input').eq(2).val().trim() !== '') {
        const twoSearchText = $('.newSearchBarSecDiv form #search-input').eq(2).val().trim()
        $('.newSearchBarSecDiv form #search-input').eq(2).val(twoSearchText)
        return true
      } else {
        return false
      }
    }
  }

  return (
    <div className="notification-notice">
      <div className="flex-content">
        <div className="icon-content">x</div>
        <div className="text-content">
          <h3 className="title">
            <span className="status">500</span>
            系統異常
          </h3>
          <pre className="language-jsx">
            <code>{JSON.stringify(textError, undefined, 2)}</code>
          </pre>
        </div>
      </div>
      <div className="buttons">
        <button className="back-btn">返回首頁</button>
        <button className="refresh-btn">重新整理</button>
      </div>
    </div>
  )
}
