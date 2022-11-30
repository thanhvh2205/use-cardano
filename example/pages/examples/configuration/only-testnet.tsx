import { baseConfig } from "config/use-cardano-config"
import styles from "styles/index.module.css"
import { useCardano, useCardanoContext, utility, WalletProviderSelector } from "use-cardano"

const OnlyTestnetExamplePage = () => {
  useCardano({
    ...baseConfig,
    allowedNetworks: ["testnet"],
  })

  const { networkId, isValid } = useCardanoContext()

  return (
    <>
      <div>
        <WalletProviderSelector />
      </div>

      <br />

      <div>Try switching provider and network</div>

      <br />

      <div>Connected to {utility.toNetworkName(networkId)}</div>

      <br />

      <div>
        <pre style={{ display: "inline" }}>use-cardano</pre> is valid and can be used:{" "}
        <b>{isValid ? "yes" : "no"}</b>
      </div>
    </>
  )
}

export default OnlyTestnetExamplePage
