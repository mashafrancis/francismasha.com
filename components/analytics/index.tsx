'use client'
import { OpenpanelProvider } from '@openpanel/nextjs'

// declare global {
//   interface Window {
//     // biome-ignore lint/suspicious/noExplicitAny: <explanation>
//     plausible?: (...args: any[]) => void
//   }
// }

// const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return (
    <>
      <OpenpanelProvider
        clientId="15c7cdd3-3c9a-4000-b5c4-3cc5c75e7515"
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
        // If you have a user id, you can pass it here to identify the user
        // profileId={'123'}
      />
      {/*{isProduction && loadSomeConsoleStuff()}*/}
      {/*{isProduction && metadata.analytics.plausibleDataDomain && <Plausible />}*/}
      {/*<TinyBird />*/}
      {/*{isProduction && <VercelAnalytics />}*/}
    </>
  )
}

export default Analytics
