import { update, text, ic, None, Record, query, int } from 'azle';
import { encodePubkey, makeSignBytes } from "@cosmjs/proto-signing";
const crypto = require('crypto');
const { bech32 } = require('bech32');
import { managementCanister } from 'azle/canisters/management';
import { fromHex, toBase64, toHex } from "@cosmjs/encoding";
import { ethers } from 'ethers';
import { getAddressAkashFromEVM, getEcdsaPublicKeyBase64FromEVM } from './get_address_akash';
import { createCertificateAkash } from './certificate';
import { createCertificateKeys } from './akash_certificate_manager';

const yamlObj = ``;

const User = Record({
    id: text, // evm address
    akashAddress: text, // the akash address
    akashPubEncod: text,
    nonce: text,
    akashCert: text, // akash certificate - base64 (optional)
    akashCertPub: text, // akash certificate pubkey - base64 (optional)
    akashCertPriv: text, // akash certificate private key - base64 (optional)
});

type User = typeof User.tsType;

const Deployment = Record({
    id: text, // evm address
    status: text,
    akashHashDeployment: text,
    dseq: text,
    userId: text, // akash certificate - base64 (optional)
});

type Deployment = typeof Deployment.tsType;

type Db = {
    users: {
        [id: string]: User;
    },
    deployments: {
        [id: string]: Deployment
    }
};

export let db: Db = {
    users: {},
    deployments: {}
};

// certPem and certPubpem as base64
export const createUser = update([text], text, async (signatureHex: string) => {
    const message = 'create-akash-address';
    const messageHash = ethers.hashMessage(message); // Updated to v6
    const recoveredAddress = ethers.recoverAddress(messageHash, signatureHex); // Updated to v6
    console.log('the address recovered:');
    console.log(recoveredAddress);

    if (!db.users[recoveredAddress]) {
        const res = await getAkashAddress(recoveredAddress);
    
        const user: User = {
            id: recoveredAddress,
            akashAddress: res.akashAddress,
            akashPubEncod: String(res.pubEncod),
            nonce: "0",
            akashCert: '',
            akashCertPriv: '',
            akashCertPub: '',
        };
    
        db.users[recoveredAddress] = user;
        
        return 'user';
    } else {
        return ''
    }
});

// certPem and certPubpem as base64
export const getNewAkashCertificate = update([text, text], text, async (signatureHex: string, nonce: text) => {
    const message = 'update-akash-address' + nonce;
    const messageHash = ethers.hashMessage(message);
    const recoveredAddress = ethers.recoverAddress(messageHash, signatureHex);

    if (!db.users[recoveredAddress]) {
        throw ('User does not exist');
    }
    if (Number(db.users[recoveredAddress].nonce) + 1 !== Number(nonce)) {
        throw ('Invalid nonce');
    }

    console.log('the address recovered:');
    console.log(recoveredAddress);

    const keys = createCertificateKeys(db.users[recoveredAddress].akashAddress);
    db.users[recoveredAddress].akashCert = keys.cert;
    db.users[recoveredAddress].akashCertPub = keys.publicKey;
    db.users[recoveredAddress].akashCertPriv = keys.privateKey;
    db.users[recoveredAddress].nonce = String(Number(db.users[recoveredAddress].nonce) + 1);

    return 'done';
});

// returns akash address from evm address
export const getAkashAddressEnd = query([text], text, async (evmAddress: string) => {
    const res = await getAkashAddress(evmAddress);
    return res.akashAddress;
});

// returns akash address from evm address
export async function getAkashAddress(evmAddress: string) {
    const akashAddress = await getAddressAkashFromEVM(evmAddress);
    const pubEncod = await getEcdsaPublicKeyBase64FromEVM(evmAddress);

    return { akashAddress, pubEncod };
};
