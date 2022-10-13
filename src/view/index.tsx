import { net } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'
import MainnetOnly from './mainnetOnly'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      wallet={window.sentre.solana}
      appId={appId}
      src="https://play.defiland.app"
      title="DeFi Land: Gamified Decentralized Finance"
    />
  )
}

export default View
