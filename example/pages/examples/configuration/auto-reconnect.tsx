import { baseConfig } from "config/use-cardano-config"
import styles from "styles/example.module.css"
import { useCardano, WalletProviderSelector } from "use-cardano"

const AutoConnectExamplePage = () => {
  useCardano({ ...baseConfig, autoReconnect: true })

  return (
    <>
      <div>
        In this example, as you refresh you page, it should attempt to reconnect to the last
        selected wallet. It should not automatically attempt to connect to Nami or Eternl on your
        first visit.
      </div>

      <br />

      <div>
        <WalletProviderSelector />
      </div>

      <br />

      <div className={styles.info}>
        Other examples can affect the behavior of this example. Clear local storage, key{" "}
        <b>use-cardano/reconnect-to</b>, to reset the example.
      </div>
    </>
  )
}

export default AutoConnectExamplePage
