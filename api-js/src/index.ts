import { Web3Service } from './helpers/web3-service';
import SERVERS, { ServerInfo } from './Servers';

//import { CONTRACT_NAME } from './contract-wraper/CONTRACT_NAME';
import { EncryptedFile } from './contract-wraper/EncryptedFile';
import { Keystore } from './contract-wraper/Keystore';
import { KeystoreFactory } from './contract-wraper/KeystoreFactory';
import { Record } from './contract-wraper/Record';
import { RecordFactory } from './contract-wraper/RecordFactory';
//import { IPFSservice } from './helpers/ipfs-service';
//import { EcnriptionHandler } from './helpers/encription-handler';

import Config from './helpers/config';

export default class MedX {
	private static _instance;

	public Web3Service;
	public static SERVERS = SERVERS;

	//public IPFSservice;
	//public EcnriptionHandler = EcnriptionHandler;

	//public CONTRACT_NAME = CONTRACT_NAME;
	public EncryptedFile = EncryptedFile;
	public Keystore = Keystore;
	public KeystoreFactory = new KeystoreFactory();
	public Record = Record;
	public RecordFactory = new RecordFactory();

	private constructor() { }

	public static setPasswordGetter(passwordGetter) { Config.passwordGetter = passwordGetter; }

	public static setPasswordSetter(passwordSetter) { Config.passwordSetter = passwordSetter; }

	public static async init({
		TruffleContract,
		LightWallet,
		server = SERVERS.LOCALHOST,
		passwordGetter,
		passwordSetter
	}) {
		Config.TruffleContract = TruffleContract;
		Config.LightWallet = LightWallet;
		Config.server = server;
		Config.passwordGetter = passwordGetter;
		Config.passwordSetter = passwordSetter;

		if (!MedX._instance) { MedX._instance = new MedX(); }
		MedX._instance.Web3Service = await Web3Service.getInstance();
		//MedX._instance.IPFSservice = await IPFSservice.init();

		return MedX._instance;
	}

}