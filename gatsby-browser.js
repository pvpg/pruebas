import * as React from 'react'
import { PrismicPreviewProvider } from 'gatsby-plugin-prismic-previews'

export const wrapRootElement = ({ element }) => (
  <PrismicPreviewProvider>{element}</PrismicPreviewProvider>
)

// import * as React from 'react'
// import {
//   PrismicPreviewProvider,
//   componentResolverFromMap,
// } from 'gatsby-plugin-prismic-previews'

// import { linkResolver } from './src/linkResolver'
// import PageTemplate from './src/components/layout'

// export const wrapRootElement = ({ element }) => (
//   <PrismicPreviewProvider
//     repositoryConfigs={[
//       {
//         repositoryName: "skypoint-dev",
//         linkResolver,
//         componentResolver: componentResolverFromMap({
//           page: PageTemplate,
//         }),
//       },
//     ]}
//   >
//     {element}
//   </PrismicPreviewProvider>
// )