import * as React from 'react'
import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'

// Update the path to your Link Resolver
import { linkResolver } from '../linkResolver'
const PreviewPage = ({ data }) => {
  // Your Page component
}

export default withPrismicPreviewResolver(PreviewPage, [
  {
    repositoryName: 'your-repository-name',
    linkResolver,
  },
])

// import * as React from 'react'
// import { withPrismicPreviewResolver } from 'gatsby-plugin-prismic-previews'

// const PreviewPage = () => {
//   return (
//     <div>
//       <h1>Loading preview…</h1>
//     </div>
//   )
// }

// export default withPrismicPreviewResolver(PreviewPage)