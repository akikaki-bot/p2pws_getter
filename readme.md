# P2P地震情報_WebSocket API formatter for node.js

P2P地震情報 WebSocket API から送られてきた情報を `Data` か `Areapeers` などなどの形式でフォーマットし、処理をします。

## Install

```cmd
npm i p2peq_event
```

## Events

イベントがいくつかありますので、ここに書きます。

- ready

WebSocket接続完了時に発火するイベントです。

返り値はVOIDです。

- earthquake

地震情報です。震度情報、震源情報等が返ってきます。

- areapeers

P2P地震情報に接続している各ユーザーの地域分布データが返ってきます。

- eewdetection

EEWが発表されたときに発火するイベントです。

- eew

EEWが発表されたときに発火するイベントです。

このイベントでは詳細な情報が返ってきます。こちらの方がおすすめです。

- tsunamiwarning

津波情報についての情報が返ってきます。

## Example

- Websocketを使う場合

```ts

import { Client } from 'p2peq_event'

// CJS の場合であるなら
// const { P2PWSClient } = require('p2peq_event')

const client = new Client()

client.on('earthquake', (data) => {
  /*
  処理 (Return Data)
  */
})

```

- DataManagerを使う場合

```ts

client.cache.resolve('id')
// いずれかの情報を返します。
```

## Use Modules

MainModule

```npm
ws
```

devModules

```npm
typescript
ts-node
```

## Licence

MIT

(c) 2022 - 2023 akikaki Licence MIT

(if you wanna read more infomation about license, you can read that in license.)
