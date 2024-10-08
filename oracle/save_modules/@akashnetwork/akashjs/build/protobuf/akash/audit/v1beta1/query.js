"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryAuditorAttributesRequest = exports.QueryProviderAuditorRequest = exports.QueryProviderAttributesRequest = exports.QueryAllProvidersAttributesRequest = exports.QueryProviderRequest = exports.QueryProvidersResponse = exports.protobufPackage = void 0;
/* eslint-disable */
const typeRegistry_1 = require("../../../typeRegistry");
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
const audit_1 = require("../../../akash/audit/v1beta1/audit");
exports.protobufPackage = "akash.audit.v1beta1";
function createBaseQueryProvidersResponse() {
    return {
        $type: "akash.audit.v1beta1.QueryProvidersResponse",
        providers: [],
        pagination: undefined
    };
}
exports.QueryProvidersResponse = {
    $type: "akash.audit.v1beta1.QueryProvidersResponse",
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.providers) {
            audit_1.Provider.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProvidersResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.providers.push(audit_1.Provider.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryProvidersResponse.$type,
            providers: Array.isArray(object?.providers) ? object.providers.map((e) => audit_1.Provider.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? pagination_1.PageResponse.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.providers) {
            obj.providers = message.providers.map(e => (e ? audit_1.Provider.toJSON(e) : undefined));
        }
        else {
            obj.providers = [];
        }
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProvidersResponse();
        message.providers = object.providers?.map(e => audit_1.Provider.fromPartial(e)) || [];
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageResponse.fromPartial(object.pagination) : undefined;
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProvidersResponse.$type, exports.QueryProvidersResponse);
function createBaseQueryProviderRequest() {
    return {
        $type: "akash.audit.v1beta1.QueryProviderRequest",
        auditor: "",
        owner: ""
    };
}
exports.QueryProviderRequest = {
    $type: "akash.audit.v1beta1.QueryProviderRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryProviderRequest.$type,
            auditor: isSet(object.auditor) ? String(object.auditor) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.auditor !== undefined && (obj.auditor = message.auditor);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProviderRequest();
        message.auditor = object.auditor ?? "";
        message.owner = object.owner ?? "";
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderRequest.$type, exports.QueryProviderRequest);
function createBaseQueryAllProvidersAttributesRequest() {
    return {
        $type: "akash.audit.v1beta1.QueryAllProvidersAttributesRequest",
        pagination: undefined
    };
}
exports.QueryAllProvidersAttributesRequest = {
    $type: "akash.audit.v1beta1.QueryAllProvidersAttributesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAllProvidersAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryAllProvidersAttributesRequest.$type,
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAllProvidersAttributesRequest();
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryAllProvidersAttributesRequest.$type, exports.QueryAllProvidersAttributesRequest);
function createBaseQueryProviderAttributesRequest() {
    return {
        $type: "akash.audit.v1beta1.QueryProviderAttributesRequest",
        owner: "",
        pagination: undefined
    };
}
exports.QueryProviderAttributesRequest = {
    $type: "akash.audit.v1beta1.QueryProviderAttributesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.owner !== "") {
            writer.uint32(10).string(message.owner);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.owner = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryProviderAttributesRequest.$type,
            owner: isSet(object.owner) ? String(object.owner) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.owner !== undefined && (obj.owner = message.owner);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProviderAttributesRequest();
        message.owner = object.owner ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderAttributesRequest.$type, exports.QueryProviderAttributesRequest);
function createBaseQueryProviderAuditorRequest() {
    return {
        $type: "akash.audit.v1beta1.QueryProviderAuditorRequest",
        auditor: "",
        owner: ""
    };
}
exports.QueryProviderAuditorRequest = {
    $type: "akash.audit.v1beta1.QueryProviderAuditorRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.owner !== "") {
            writer.uint32(18).string(message.owner);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryProviderAuditorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
                    message.owner = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryProviderAuditorRequest.$type,
            auditor: isSet(object.auditor) ? String(object.auditor) : "",
            owner: isSet(object.owner) ? String(object.owner) : ""
        };
    },
    toJSON(message) {
        const obj = {};
        message.auditor !== undefined && (obj.auditor = message.auditor);
        message.owner !== undefined && (obj.owner = message.owner);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryProviderAuditorRequest();
        message.auditor = object.auditor ?? "";
        message.owner = object.owner ?? "";
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryProviderAuditorRequest.$type, exports.QueryProviderAuditorRequest);
function createBaseQueryAuditorAttributesRequest() {
    return {
        $type: "akash.audit.v1beta1.QueryAuditorAttributesRequest",
        auditor: "",
        pagination: undefined
    };
}
exports.QueryAuditorAttributesRequest = {
    $type: "akash.audit.v1beta1.QueryAuditorAttributesRequest",
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.auditor !== "") {
            writer.uint32(10).string(message.auditor);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseQueryAuditorAttributesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.auditor = reader.string();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            $type: exports.QueryAuditorAttributesRequest.$type,
            auditor: isSet(object.auditor) ? String(object.auditor) : "",
            pagination: isSet(object.pagination) ? pagination_1.PageRequest.fromJSON(object.pagination) : undefined
        };
    },
    toJSON(message) {
        const obj = {};
        message.auditor !== undefined && (obj.auditor = message.auditor);
        message.pagination !== undefined && (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseQueryAuditorAttributesRequest();
        message.auditor = object.auditor ?? "";
        message.pagination = object.pagination !== undefined && object.pagination !== null ? pagination_1.PageRequest.fromPartial(object.pagination) : undefined;
        return message;
    }
};
typeRegistry_1.messageTypeRegistry.set(exports.QueryAuditorAttributesRequest.$type, exports.QueryAuditorAttributesRequest);
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.AllProvidersAttributes = this.AllProvidersAttributes.bind(this);
        this.ProviderAttributes = this.ProviderAttributes.bind(this);
        this.ProviderAuditorAttributes = this.ProviderAuditorAttributes.bind(this);
        this.AuditorAttributes = this.AuditorAttributes.bind(this);
    }
    AllProvidersAttributes(request) {
        const data = exports.QueryAllProvidersAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "AllProvidersAttributes", data);
        return promise.then(data => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
    ProviderAttributes(request) {
        const data = exports.QueryProviderAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "ProviderAttributes", data);
        return promise.then(data => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
    ProviderAuditorAttributes(request) {
        const data = exports.QueryProviderAuditorRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "ProviderAuditorAttributes", data);
        return promise.then(data => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
    AuditorAttributes(request) {
        const data = exports.QueryAuditorAttributesRequest.encode(request).finish();
        const promise = this.rpc.request("akash.audit.v1beta1.Query", "AuditorAttributes", data);
        return promise.then(data => exports.QueryProvidersResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
