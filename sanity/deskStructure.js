// ./src/desk-structure/index.js (or similar)

import S from '@sanity/desk-tool/structure-builder'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default () =>
  S.list()
    .title('Content')
    .items([
      // Minimum required configuration
      orderableDocumentListDeskItem({type: 'projects'}),

      // Optional configuration
      orderableDocumentListDeskItem({
        type: 'projects',
        title: 'Projects',
        // Required if using multiple lists of the same 'type'
        id: 'orderable-en-projects',
        // See notes on adding a `filter` below
        filter: `__i18n_lang == $lang`,
        params: {
          lang: 'en_US'
        },
      }),

    ])