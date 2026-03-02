import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

const options = {
  "info": {
    "applicationID": 1120501315,
    "beacon": "bam.nr-data.net",
    "errorBeacon": "bam.nr-data.net",
    "licenseKey": "NRJS-d0d838f35eb36823aa5",
    "sa": 1
  },
  "init": {
    "ajax": {
      "deny_list": [
        "bam.nr-data.net"
      ]
    },
    "browser_consent_mode": {
      "enabled": true
    },
    "distributed_tracing": {
      "enabled": true
    },
    "performance": {
      "capture_detail": true,
      "capture_marks": true,
      "capture_measures": true
    },
    "privacy": {
      "cookies_enabled": true
    }
  },
  "loader_config": {
    "accountID": 2638884,
    "agentID": 1120501315,
    "applicationID": 1120501315,
    "licenseKey": "NRJS-d0d838f35eb36823aa5",
    "trustKey": 2638884
  }
}

export const nrba = new BrowserAgent(options)

