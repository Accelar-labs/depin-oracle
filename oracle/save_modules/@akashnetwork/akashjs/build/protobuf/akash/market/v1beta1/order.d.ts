import Long from "long";
import _m0 from "protobufjs/minimal";
import { GroupSpec } from "../../../akash/deployment/v1beta1/group";
export declare const protobufPackage = "akash.market.v1beta1";
/** OrderID stores owner and all other seq numbers */
export interface OrderID {
    $type: "akash.market.v1beta1.OrderID";
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
}
/** Order stores orderID, state of order and other details */
export interface Order {
    $type: "akash.market.v1beta1.Order";
    orderId?: OrderID;
    state: Order_State;
    spec?: GroupSpec;
    createdAt: Long;
}
/** State is an enum which refers to state of order */
export declare enum Order_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - OrderOpen denotes state for order open */
    open = 1,
    /** active - OrderMatched denotes state for order matched */
    active = 2,
    /** closed - OrderClosed denotes state for order lost */
    closed = 3,
    UNRECOGNIZED = -1
}
export declare function order_StateFromJSON(object: any): Order_State;
export declare function order_StateToJSON(object: Order_State): string;
/** OrderFilters defines flags for order list filter */
export interface OrderFilters {
    $type: "akash.market.v1beta1.OrderFilters";
    owner: string;
    dseq: Long;
    gseq: number;
    oseq: number;
    state: string;
}
export declare const OrderID: {
    $type: "akash.market.v1beta1.OrderID";
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderID;
    fromJSON(object: any): OrderID;
    toJSON(message: OrderID): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        dseq?: string | number | Long.Long | undefined;
        gseq?: number | undefined;
        oseq?: number | undefined;
    } & {
        owner?: string | undefined;
        dseq?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["dseq"], "$type" | keyof Long.Long>, never>) | undefined;
        gseq?: number | undefined;
        oseq?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "owner" | "dseq" | "gseq" | "oseq">, never>>(object: I): OrderID;
};
export declare const Order: {
    $type: "akash.market.v1beta1.Order";
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    fromPartial<I extends {
        state?: Order_State | undefined;
        createdAt?: string | number | Long.Long | undefined;
        orderId?: {
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
        } | undefined;
        spec?: {
            name?: string | undefined;
            requirements?: {
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                signedBy?: {
                    allOf?: string[] | undefined;
                    anyOf?: string[] | undefined;
                } | undefined;
            } | undefined;
            resources?: {
                resources?: {
                    storage?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    cpu?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        units?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    memory?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[] | undefined;
                } | undefined;
                count?: number | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        state?: Order_State | undefined;
        createdAt?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["createdAt"], "$type" | keyof Long.Long>, never>) | undefined;
        orderId?: ({
            owner?: string | undefined;
            dseq?: string | number | Long.Long | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
        } & {
            owner?: string | undefined;
            dseq?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["orderId"]["dseq"], "$type" | keyof Long.Long>, never>) | undefined;
            gseq?: number | undefined;
            oseq?: number | undefined;
        } & Record<Exclude<keyof I["orderId"], "$type" | "owner" | "dseq" | "gseq" | "oseq">, never>) | undefined;
        spec?: ({
            name?: string | undefined;
            requirements?: {
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                signedBy?: {
                    allOf?: string[] | undefined;
                    anyOf?: string[] | undefined;
                } | undefined;
            } | undefined;
            resources?: {
                resources?: {
                    storage?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    cpu?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        units?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    memory?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[] | undefined;
                } | undefined;
                count?: number | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            name?: string | undefined;
            requirements?: ({
                attributes?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                signedBy?: {
                    allOf?: string[] | undefined;
                    anyOf?: string[] | undefined;
                } | undefined;
            } & {
                attributes?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I["spec"]["requirements"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["requirements"]["attributes"], "$type" | keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>, never>) | undefined;
                signedBy?: ({
                    allOf?: string[] | undefined;
                    anyOf?: string[] | undefined;
                } & {
                    allOf?: (string[] & string[] & Record<Exclude<keyof I["spec"]["requirements"]["signedBy"]["allOf"], "$type" | keyof string[]>, never>) | undefined;
                    anyOf?: (string[] & string[] & Record<Exclude<keyof I["spec"]["requirements"]["signedBy"]["anyOf"], "$type" | keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["spec"]["requirements"]["signedBy"], "$type" | "allOf" | "anyOf">, never>) | undefined;
            } & Record<Exclude<keyof I["spec"]["requirements"], "$type" | "attributes" | "signedBy">, never>) | undefined;
            resources?: ({
                resources?: {
                    storage?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    cpu?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        units?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    memory?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[] | undefined;
                } | undefined;
                count?: number | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] & ({
                resources?: {
                    storage?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    cpu?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        units?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    memory?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[] | undefined;
                } | undefined;
                count?: number | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                resources?: ({
                    storage?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    cpu?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        units?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    memory?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[] | undefined;
                } & {
                    storage?: ({
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"]["attributes"], "$type" | keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                        quantity?: ({
                            val?: Uint8Array | undefined;
                        } & {
                            val?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"]["quantity"], "$type" | "val">, never>) | undefined;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["storage"], "$type" | "attributes" | "quantity">, never>) | undefined;
                    cpu?: ({
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        units?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"]["attributes"], "$type" | keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                        units?: ({
                            val?: Uint8Array | undefined;
                        } & {
                            val?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"]["units"], "$type" | "val">, never>) | undefined;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["cpu"], "$type" | "attributes" | "units">, never>) | undefined;
                    memory?: ({
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } & {
                        attributes?: ({
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] & ({
                            key?: string | undefined;
                            value?: string | undefined;
                        } & {
                            key?: string | undefined;
                            value?: string | undefined;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"]["attributes"][number], "$type" | "key" | "value">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"]["attributes"], "$type" | keyof {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[]>, never>) | undefined;
                        quantity?: ({
                            val?: Uint8Array | undefined;
                        } & {
                            val?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"]["quantity"], "$type" | "val">, never>) | undefined;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["memory"], "$type" | "attributes" | "quantity">, never>) | undefined;
                    endpoints?: ({
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[] & ({
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    } & {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["endpoints"][number], "$type" | "kind">, never>)[] & Record<Exclude<keyof I["spec"]["resources"][number]["resources"]["endpoints"], "$type" | keyof {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I["spec"]["resources"][number]["resources"], "$type" | "storage" | "cpu" | "memory" | "endpoints">, never>) | undefined;
                count?: number | undefined;
                price?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["spec"]["resources"][number]["price"], "$type" | "denom" | "amount">, never>) | undefined;
            } & Record<Exclude<keyof I["spec"]["resources"][number], "$type" | "resources" | "count" | "price">, never>)[] & Record<Exclude<keyof I["spec"]["resources"], "$type" | keyof {
                resources?: {
                    storage?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    cpu?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        units?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    memory?: {
                        attributes?: {
                            key?: string | undefined;
                            value?: string | undefined;
                        }[] | undefined;
                        quantity?: {
                            val?: Uint8Array | undefined;
                        } | undefined;
                    } | undefined;
                    endpoints?: {
                        kind?: import("../../base/v1beta1/endpoint").Endpoint_Kind | undefined;
                    }[] | undefined;
                } | undefined;
                count?: number | undefined;
                price?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["spec"], "$type" | "name" | "requirements" | "resources">, never>) | undefined;
    } & Record<Exclude<keyof I, "$type" | "state" | "createdAt" | "orderId" | "spec">, never>>(object: I): Order;
};
export declare const OrderFilters: {
    $type: "akash.market.v1beta1.OrderFilters";
    encode(message: OrderFilters, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderFilters;
    fromJSON(object: any): OrderFilters;
    toJSON(message: OrderFilters): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        state?: string | undefined;
        dseq?: string | number | Long.Long | undefined;
        gseq?: number | undefined;
        oseq?: number | undefined;
    } & {
        owner?: string | undefined;
        state?: string | undefined;
        dseq?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["dseq"], "$type" | keyof Long.Long>, never>) | undefined;
        gseq?: number | undefined;
        oseq?: number | undefined;
    } & Record<Exclude<keyof I, "$type" | "owner" | "state" | "dseq" | "gseq" | "oseq">, never>>(object: I): OrderFilters;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P> | "$type">, never>;
export {};
