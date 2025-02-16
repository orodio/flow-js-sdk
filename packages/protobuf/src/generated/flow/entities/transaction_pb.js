// source: flow/entities/transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.entities.Transaction', null, global);
goog.exportSymbol('proto.entities.Transaction.ProposalKey', null, global);
goog.exportSymbol('proto.entities.Transaction.Signature', null, global);
goog.exportSymbol('proto.entities.TransactionStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.entities.Transaction.repeatedFields_, null);
};
goog.inherits(proto.entities.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.Transaction.displayName = 'proto.entities.Transaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.Transaction.ProposalKey = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.Transaction.ProposalKey, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.Transaction.ProposalKey.displayName = 'proto.entities.Transaction.ProposalKey';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.entities.Transaction.Signature = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.entities.Transaction.Signature, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.entities.Transaction.Signature.displayName = 'proto.entities.Transaction.Signature';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.entities.Transaction.repeatedFields_ = [6,7,8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    script: msg.getScript_asB64(),
    referenceBlockId: msg.getReferenceBlockId_asB64(),
    gasLimit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    proposalKey: (f = msg.getProposalKey()) && proto.entities.Transaction.ProposalKey.toObject(includeInstance, f),
    payer: msg.getPayer_asB64(),
    authorizersList: msg.getAuthorizersList_asB64(),
    payloadSignaturesList: jspb.Message.toObjectList(msg.getPayloadSignaturesList(),
    proto.entities.Transaction.Signature.toObject, includeInstance),
    envelopeSignaturesList: jspb.Message.toObjectList(msg.getEnvelopeSignaturesList(),
    proto.entities.Transaction.Signature.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.Transaction}
 */
proto.entities.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.Transaction;
  return proto.entities.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.Transaction}
 */
proto.entities.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setScript(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setReferenceBlockId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGasLimit(value);
      break;
    case 4:
      var value = new proto.entities.Transaction.ProposalKey;
      reader.readMessage(value,proto.entities.Transaction.ProposalKey.deserializeBinaryFromReader);
      msg.setProposalKey(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPayer(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addAuthorizers(value);
      break;
    case 7:
      var value = new proto.entities.Transaction.Signature;
      reader.readMessage(value,proto.entities.Transaction.Signature.deserializeBinaryFromReader);
      msg.addPayloadSignatures(value);
      break;
    case 8:
      var value = new proto.entities.Transaction.Signature;
      reader.readMessage(value,proto.entities.Transaction.Signature.deserializeBinaryFromReader);
      msg.addEnvelopeSignatures(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScript_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getReferenceBlockId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getGasLimit();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getProposalKey();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.entities.Transaction.ProposalKey.serializeBinaryToWriter
    );
  }
  f = message.getPayer_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getAuthorizersList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      6,
      f
    );
  }
  f = message.getPayloadSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.entities.Transaction.Signature.serializeBinaryToWriter
    );
  }
  f = message.getEnvelopeSignaturesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.entities.Transaction.Signature.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.Transaction.ProposalKey.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.Transaction.ProposalKey.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.Transaction.ProposalKey} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Transaction.ProposalKey.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    keyId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.Transaction.ProposalKey}
 */
proto.entities.Transaction.ProposalKey.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.Transaction.ProposalKey;
  return proto.entities.Transaction.ProposalKey.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.Transaction.ProposalKey} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.Transaction.ProposalKey}
 */
proto.entities.Transaction.ProposalKey.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKeyId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSequenceNumber(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.Transaction.ProposalKey.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.Transaction.ProposalKey.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.Transaction.ProposalKey} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Transaction.ProposalKey.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.entities.Transaction.ProposalKey.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.entities.Transaction.ProposalKey.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.entities.Transaction.ProposalKey.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.entities.Transaction.ProposalKey} returns this
 */
proto.entities.Transaction.ProposalKey.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 key_id = 2;
 * @return {number}
 */
proto.entities.Transaction.ProposalKey.prototype.getKeyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.Transaction.ProposalKey} returns this
 */
proto.entities.Transaction.ProposalKey.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 sequence_number = 3;
 * @return {number}
 */
proto.entities.Transaction.ProposalKey.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.Transaction.ProposalKey} returns this
 */
proto.entities.Transaction.ProposalKey.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.entities.Transaction.Signature.prototype.toObject = function(opt_includeInstance) {
  return proto.entities.Transaction.Signature.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.entities.Transaction.Signature} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Transaction.Signature.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: msg.getAddress_asB64(),
    keyId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    signature: msg.getSignature_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.entities.Transaction.Signature}
 */
proto.entities.Transaction.Signature.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.entities.Transaction.Signature;
  return proto.entities.Transaction.Signature.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.entities.Transaction.Signature} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.entities.Transaction.Signature}
 */
proto.entities.Transaction.Signature.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setKeyId(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSignature(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.entities.Transaction.Signature.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.entities.Transaction.Signature.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.entities.Transaction.Signature} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.entities.Transaction.Signature.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getKeyId();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getSignature_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes address = 1;
 * @return {!(string|Uint8Array)}
 */
proto.entities.Transaction.Signature.prototype.getAddress = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes address = 1;
 * This is a type-conversion wrapper around `getAddress()`
 * @return {string}
 */
proto.entities.Transaction.Signature.prototype.getAddress_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAddress()));
};


/**
 * optional bytes address = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAddress()`
 * @return {!Uint8Array}
 */
proto.entities.Transaction.Signature.prototype.getAddress_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAddress()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.entities.Transaction.Signature} returns this
 */
proto.entities.Transaction.Signature.prototype.setAddress = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint32 key_id = 2;
 * @return {number}
 */
proto.entities.Transaction.Signature.prototype.getKeyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.Transaction.Signature} returns this
 */
proto.entities.Transaction.Signature.prototype.setKeyId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes signature = 3;
 * @return {!(string|Uint8Array)}
 */
proto.entities.Transaction.Signature.prototype.getSignature = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes signature = 3;
 * This is a type-conversion wrapper around `getSignature()`
 * @return {string}
 */
proto.entities.Transaction.Signature.prototype.getSignature_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSignature()));
};


/**
 * optional bytes signature = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSignature()`
 * @return {!Uint8Array}
 */
proto.entities.Transaction.Signature.prototype.getSignature_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSignature()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.entities.Transaction.Signature} returns this
 */
proto.entities.Transaction.Signature.prototype.setSignature = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};


/**
 * optional bytes script = 1;
 * @return {!(string|Uint8Array)}
 */
proto.entities.Transaction.prototype.getScript = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes script = 1;
 * This is a type-conversion wrapper around `getScript()`
 * @return {string}
 */
proto.entities.Transaction.prototype.getScript_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getScript()));
};


/**
 * optional bytes script = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getScript()`
 * @return {!Uint8Array}
 */
proto.entities.Transaction.prototype.getScript_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getScript()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.setScript = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes reference_block_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.entities.Transaction.prototype.getReferenceBlockId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes reference_block_id = 2;
 * This is a type-conversion wrapper around `getReferenceBlockId()`
 * @return {string}
 */
proto.entities.Transaction.prototype.getReferenceBlockId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getReferenceBlockId()));
};


/**
 * optional bytes reference_block_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getReferenceBlockId()`
 * @return {!Uint8Array}
 */
proto.entities.Transaction.prototype.getReferenceBlockId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getReferenceBlockId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.setReferenceBlockId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional uint64 gas_limit = 3;
 * @return {number}
 */
proto.entities.Transaction.prototype.getGasLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.setGasLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ProposalKey proposal_key = 4;
 * @return {?proto.entities.Transaction.ProposalKey}
 */
proto.entities.Transaction.prototype.getProposalKey = function() {
  return /** @type{?proto.entities.Transaction.ProposalKey} */ (
    jspb.Message.getWrapperField(this, proto.entities.Transaction.ProposalKey, 4));
};


/**
 * @param {?proto.entities.Transaction.ProposalKey|undefined} value
 * @return {!proto.entities.Transaction} returns this
*/
proto.entities.Transaction.prototype.setProposalKey = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.clearProposalKey = function() {
  return this.setProposalKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.entities.Transaction.prototype.hasProposalKey = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes payer = 5;
 * @return {!(string|Uint8Array)}
 */
proto.entities.Transaction.prototype.getPayer = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes payer = 5;
 * This is a type-conversion wrapper around `getPayer()`
 * @return {string}
 */
proto.entities.Transaction.prototype.getPayer_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPayer()));
};


/**
 * optional bytes payer = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPayer()`
 * @return {!Uint8Array}
 */
proto.entities.Transaction.prototype.getPayer_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPayer()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.setPayer = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * repeated bytes authorizers = 6;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.entities.Transaction.prototype.getAuthorizersList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * repeated bytes authorizers = 6;
 * This is a type-conversion wrapper around `getAuthorizersList()`
 * @return {!Array<string>}
 */
proto.entities.Transaction.prototype.getAuthorizersList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getAuthorizersList()));
};


/**
 * repeated bytes authorizers = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthorizersList()`
 * @return {!Array<!Uint8Array>}
 */
proto.entities.Transaction.prototype.getAuthorizersList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getAuthorizersList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.setAuthorizersList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.addAuthorizers = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.clearAuthorizersList = function() {
  return this.setAuthorizersList([]);
};


/**
 * repeated Signature payload_signatures = 7;
 * @return {!Array<!proto.entities.Transaction.Signature>}
 */
proto.entities.Transaction.prototype.getPayloadSignaturesList = function() {
  return /** @type{!Array<!proto.entities.Transaction.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.Transaction.Signature, 7));
};


/**
 * @param {!Array<!proto.entities.Transaction.Signature>} value
 * @return {!proto.entities.Transaction} returns this
*/
proto.entities.Transaction.prototype.setPayloadSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.entities.Transaction.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.Transaction.Signature}
 */
proto.entities.Transaction.prototype.addPayloadSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.entities.Transaction.Signature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.clearPayloadSignaturesList = function() {
  return this.setPayloadSignaturesList([]);
};


/**
 * repeated Signature envelope_signatures = 8;
 * @return {!Array<!proto.entities.Transaction.Signature>}
 */
proto.entities.Transaction.prototype.getEnvelopeSignaturesList = function() {
  return /** @type{!Array<!proto.entities.Transaction.Signature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.entities.Transaction.Signature, 8));
};


/**
 * @param {!Array<!proto.entities.Transaction.Signature>} value
 * @return {!proto.entities.Transaction} returns this
*/
proto.entities.Transaction.prototype.setEnvelopeSignaturesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.entities.Transaction.Signature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.entities.Transaction.Signature}
 */
proto.entities.Transaction.prototype.addEnvelopeSignatures = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.entities.Transaction.Signature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.entities.Transaction} returns this
 */
proto.entities.Transaction.prototype.clearEnvelopeSignaturesList = function() {
  return this.setEnvelopeSignaturesList([]);
};


/**
 * @enum {number}
 */
proto.entities.TransactionStatus = {
  UNKNOWN: 0,
  PENDING: 1,
  FINALIZED: 2,
  EXECUTED: 3,
  SEALED: 4
};

goog.object.extend(exports, proto.entities);
