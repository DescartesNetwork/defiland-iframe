import EmbededView from 'shared/antd/embededView'

import configs from 'app/configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src="https://play.defiland.app"
      title="DeFi Land: Gamified Decentralized Finance"
      background={{ light: '#1b142b', dark: '#1b142b' }}
    />
  )
}

export default View
