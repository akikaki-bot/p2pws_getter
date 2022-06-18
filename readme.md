# P2P地震情報_WebSocket API formatter for node

P2P地震情報 WebSocket API から送られてきた情報を `Data` か `Areapeers` 形式でフォーマットし、

エミットするやつ

## Install

```
npm i p2peq_event
```

## Example

```ts

import { P2PWSClient } from 'p2peq_event'

const client = new P2PWSClient()

//これは絶対に実行しないと動きません
client.run()

client.on('earthquake', (data) => {
    if(data.code === 555){
        /* 処理 */
    }
    if(data.code === 551){
        /* 処理 */
    }
})

```

## Types

> Data

```
_id:string
    code: 551
    time: string
    issue:{
        source: string
        time :string
        type : "ScalePrompt" | "Destination" | "ScaleAndDestination" | "DetailScale " | " Foreign " | "Other" 
        correct: "None" | "Unknown" | "ScaleOnly" | "DestinationOnly" | "ScaleAndDestination"
    }
    earthquake:{
        time: string
        hypocenter: HypocenterFormat
        maxScale: "-1" | "10" | "20" | "30" | "40" | "45" | "50" | "55" | "60" | "70"
        domesticTsunami: "None" | "Unknown" | "Checking" | "NoneEffective" | "Watch" | "Warning"
        forginTsunami: "None" | "Unknown" | "Checking" | "NonEffectiveNearby" | "WarningNearby" | "WarningPacific" | "WarningPacificWide" | "WarningIndian" | "WarningIndianWide" | "Potential"
    }
    points: Array<PointFormat>
```

Data > HypocenterFormat

```
name: string
latitude:number | -200
longitude: number | -200
depth:number | 0 | -1
magnitude:number | -1
```

Data > PointFormat

```
pref: string
addr: string
isArea: boolean
scale: "10" | "20" | "30" | "40" | "45" | "46" | "50" | "55" | "60" | "70" 
```

Areapeers

```
    _id : string
    areas: Array<UserQuakeArray>
    code: 555
    create_at: string
    expire: string
    hop: number
    time: string
    uid: string
    ver : string
```

Areapeers > UserQuakeArray

```
 id: number
 peer: number
```

## Use Modules

```
ts-node
typescript
ws
node
```

## Licence

MIT

(c) 2022 akikaki Licence MIT

(if you read more infomation about license, you can read that in license.)