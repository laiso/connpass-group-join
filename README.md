# connpass-group-join
lets join a group on connpass.jp with headless Chrome

## Usage

> node index.js --username $CONNPASS_USER --password $CONNPASS_PASSWORD --eventUrl https://pydatatokyo.connpass.com/event/77008/ 

Also, that's available a group page URL.
> node index.js --username $CONNPASS_USER --password $CONNPASS_PASSWORD --eventUrl https://pydatatokyo.connpass.com

## Debugging

> DEBUG=1 node index.js --username $CONNPASS_USER --password $CONNPASS_PASSWORD --eventUrl https://pydatatokyo.connpass.com/event/77008/ 
