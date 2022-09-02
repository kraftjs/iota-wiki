import React, { FC } from 'react';
import Link from '@docusaurus/Link';
import {
  Identity,
  IotaCore,
  Streams,
  Stronghold,
  Wallet,
} from '../../icons';

interface LanguagesProps {
  languages?: { [key: string]: string };
}

const Languages: FC<LanguagesProps> = (props) => {
  return (
    <>
      {Object.entries(props.languages).length > 0 && (
        <div className='languages'>
          {Object.entries(props.languages).map(([language, to], key) => (
            <Link
              className='language button button--outline button--primary'
              to={to}
              key={key}
            >
              {language}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

const LibrariesSection: FC = () => (
  <div className='libraries__cards'>
    <div className='libraries__card libraries__card--identity'>
      <img className='libraries__logo' src='/img/homepage/identity_logo.svg' />
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Identity />
          </div>
          <Languages
            languages={{
              Rust: '/identity.rs/libraries/rust/getting_started',
              WASM: '/identity.rs/libraries/wasm/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Identity</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/identity.rs/develop/decentralized_identity'>
              Decentralized Identities (SSI)
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/identity.rs/develop/concepts/decentralized_identifiers/overview'>
              Decentralized Identifiers (DID)
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/identity.rs/develop/concepts/verifiable_credentials/overview'>
              Verifiable Credentials (VC)
            </Link>
          </li>
        </ul>
        <Link
          to='/identity.rs/introduction'
          className='libraries__button button button--outline button--primary'
        >
          Create an identity
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <IotaCore />
          </div>
          <Languages
            languages={{
              Rust: '/iota.rs/getting_started/rust',
              NodeJS: '/iota.rs/getting_started/nodejs',
              Python: '/iota.rs/getting_started/python',
              Java: '/iota.rs/getting_started/java/getting_started',
              Wasm: '/iota.rs/getting_started/wasm',
              TypeScript: '/iotajs/welcome',
            }}
          />
        </div>
        <h3 className='libraries__header'>Client</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/iota.rs/examples/get_info'>
              Interact with the IOTA network
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/examples/data_message'>Send a data message</Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/iota.rs/explanations/messages_payloads_and_transactions'>
              Learn about transactions
            </Link>
          </li>
        </ul>
        <Link
          to='/iota.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Get started
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Wallet />
          </div>
          <Languages
            languages={{
              Rust: '/wallet.rs/getting_started/rust',
              NodeJS: '/wallet.rs/getting_started/nodejs',
              Python: '/wallet.rs/getting_started/python',
              Java: '/wallet.rs/getting_started/java',
            }}
          />
        </div>
        <h3 className='libraries__header'>Wallet</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/explanations/nutshell'>
              The library in a nutshell
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/examples/rust#backup-and-restore-example'>
              Store account data
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/wallet.rs/examples/rust#transfer-example'>
              Transfer tokens
            </Link>
          </li>
        </ul>
        <Link
          to='/wallet.rs/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Integrate a wallet
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Streams />
          </div>
          <Languages
            languages={{
              Rust: '/streams/libraries/rust/getting_started',
              WASM: '/streams/libraries/wasm/getting_started',
              C: '/streams/libraries/c/getting_started',
            }}
          />
        </div>
        <h3 className='libraries__header'>Streams</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/streams/overview'>Organize and share data securely</Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/streams/specs'>Read the specification</Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/streams/explanations/channels_protocol/overview'>Control the ownership of data</Link>
          </li>
        </ul>
        <Link
          to='/streams/welcome'
          className='libraries__button button button--outline button--primary'
        >
          Try out Streams
        </Link>
      </div>
    </div>
    <div className='libraries__card'>
      <div className='libraries__section'>
        <div className='libraries__head'>
          <div className='libraries__icon'>
            <Stronghold />
          </div>
          <Languages
            languages={{
              Rust: '/stronghold.rs/reference/overview',
            }}
          />
        </div>
        <h3 className='libraries__header'>Stronghold</h3>
        <ul className='libraries__features'>
          <li className='libraries__feature'>
            <Link to='/stronghold.rs/how_tos/cli/store_read_write'>
              Read and write to the vault
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/stronghold.rs/how_tos/cli/read_snapshot'>
              Manage snapshots
            </Link>
          </li>
          <li className='libraries__feature'>
            <Link to='/stronghold.rs/explanations/p2p'>
              Peer to peer communication
            </Link>
          </li>
        </ul>
        <Link
          to='/stronghold.rs/getting_started'
          className='libraries__button button button--outline button--primary'
        >
          Get to know Stronghold
        </Link>
      </div>
    </div>
  </div>
);

export default LibrariesSection;