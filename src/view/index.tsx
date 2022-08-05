import { useEffect } from 'react'
import { net, useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'
import MainnetOnly from './mainnetOnly'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: '#4abffe', dark: '#4abffe' })
  }, [setBackground])

  if (net !== 'mainnet') return <MainnetOnly />
  return (
    <EmbededView
      wallet={window.sentre.wallet}
      appId={appId}
      src="https://play.defiland.app"
      title="DeFi Land: Gamified Decentralized Finance"
    />
  )
}

export default View
