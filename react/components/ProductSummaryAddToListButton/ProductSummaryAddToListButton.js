import React, { useMemo } from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
// eslint-disable-next-line no-restricted-imports
import { path } from 'ramda'
import { useProductSummary } from 'vtex.product-summary-context/ProductSummaryContext'
import { useCssHandles } from 'vtex.css-handles'

// TODO: change ProductSummaryContext to have `selectedSku` field instead of `sku`
const getSkuId = path(['sku', 'itemId'])
const getProductId = path(['productId'])
const CSS_HANDLES = ['addToListBtn']

// This avoids triggering the link to the product page
const captureClick = (e) => {
  e.preventDefault()
  e.stopPropagation()
}

function ProductSummaryAddToListButton() {
  const handles = useCssHandles(CSS_HANDLES)
  const productContext = useProductSummary()

  const skuId = getSkuId(productContext.product)
  const productId = getProductId(productContext.product)

  const productProp = useMemo(
    () => ({
      skuId,
      productId,
      quantity: 1,
    }),
    [skuId, productId]
  )

  return (
    <div
      role="button"
      tabIndex="-1"
      onKeyDown={() => {}}
      className={`${handles.addToListBtn} absolute z-1`}
      onClick={captureClick}
    >
      <ExtensionPoint id="addon-summary-btn" product={productProp} />
    </div>
  )
}

export default ProductSummaryAddToListButton
