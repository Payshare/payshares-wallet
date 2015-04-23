var Stex       = require("stex");
var _          = Stex._;
var KeyPair    = require("payshares-lib/src/js/ripple/keypair").KeyPair; //HACK: until we update payshares-lib to expose it


module.exports.addressFromPublicKey = function(publicKeyString) {
  var buffer = new Buffer(publicKeyString, 'base64');
  var keyPair = new KeyPair();
  keyPair._pubkey = buffer;
  return keyPair.get_address().to_json();
};
