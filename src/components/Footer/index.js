import React from "react"

import styles from "./index.css"

const Footer = () => (
  <footer className={ styles.footer }>
    { /* If you like Phenomic, this is a way to share the love ;) */ }
    <p>
      <a
        href={ process.env.PHENOMIC_HOMEPAGE }
        className={ styles.phenomicReference }
      >
        { "© Muhamamd Muhajir 2015 " }
        <span className={ styles.phenomicReferenceName }>
          {  `<Hellomuhajir />` }
        </span>
      </a>
    </p>
  </footer>
)

export default Footer
