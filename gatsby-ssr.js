import * as React from 'react'
import {
  PrismicPreviewProvider,
  componentResolverFromMap,
} from 'gatsby-plugin-prismic-previews'

import { linkResolver } from './src/linkResolver'
import PageTemplate from './src/pages/{prismicSubpage.uid}'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider
    repositoryConfigs={[
      {
        repositoryName: "skypoint-devp",
        linkResolver,
        componentResolver: componentResolverFromMap({
          subpage: PageTemplate,
        }),
      },
    ]}
  >
    {element}
  </PrismicPreviewProvider>
)