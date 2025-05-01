import { withSentryConfig } from '@sentry/nextjs'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
}

export default withSentryConfig(nextConfig, {
    org: 'riccardo-tornesello',
    project: 'riccardotornesello-it',
    silent: !process.env.CI,
    widenClientFileUpload: true,
    disableLogger: true,
    automaticVercelMonitors: true,
})
