<img src="https://scontent-cai1-1.xx.fbcdn.net/v/t1.15752-0/p480x480/34411275_10216645685038246_2935287233994817536_n.png?_nc_cat=0&oh=9531d3abfd6e9e8221e9166d42da9ae7&oe=5B7AA002" height="45px"/> MedX Javascript API
=========================================================================================

Javascript api to interface with Medx APIs.

## Usage
### Node Usage

#### Install
will be published soon to npm for now you can use our git repo

```
$ npm install git+https://github.com/MarcWafik/MedX.js.git
```

```typescript
import TruffleContract = require("truffle-contract");
import LightWallet     = require("eth-lightwallet");
import MedX            = require("MedX.js");
```

### Browser Usage ( builds coming soon )

minified version and non minified version will be avalble at [Releases](https://github.com/MarcWafik/LoyalX-JSAPI/releases)   
In your `head` element, include Web3, truffle-contract then loyalx-jsapi:

```html
<script type="text/javascript" src="web3.min.js"             ></script>
<script type="text/javascript" src="truffle-contract.min.js" ></script>
<script type="text/javascript" src="lightwallet.min.js"      ></script>
<script type="text/javascript" src="medx.min.js"             ></script>
```

Alternatively, you can use the non-minified versions for easier debugging.

With this usage, it will be available via the `MedX` object:

```javascript
var medX = new MedX({
	TruffleContract : TruffleContract,
	LightWallet     : LightWallet,
	server          : MedX.SERVERS.LOCALHOST, // you can change to an other server
	passwordGetter  : ()=>{ /* ur code for getting pw */ },
	passwordSetter  : ()=>{ /* ur code for setting pw */ }
});
```




