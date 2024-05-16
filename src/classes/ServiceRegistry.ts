import {Model, Web3Connection, Web3ConnectionOptions, Deployable, XPromiseEvent} from '@taikai/dappkit';

import ServiceRegistryJson from '../../artifacts/contracts/core/ServiceRegistry.sol/ServiceRegistry.json';
import { ServiceRegistryMethods } from '@interfaces/ServiceRegistry';
import * as Events from '@events/ServiceRegistry'
import {PastEventOptions} from 'web3-eth-contract';
import {AbiItem} from 'web3-utils';

export class ServiceRegistry extends Model<ServiceRegistryMethods> implements Deployable {
  constructor(web3Connection: Web3Connection|Web3ConnectionOptions, contractAddress?: string) {
    super(web3Connection, ServiceRegistryJson.abi as AbiItem[], contractAddress);
  }

  async deployJsonAbi(ownerToSet: string) {
    const deployOptions = {
      data: ServiceRegistryJson.bytecode,
      arguments: [
        ownerToSet
      ]
    }
    return this.deploy(deployOptions, this.connection.Account);
  }

    async getService(serviceName: string) { 
    return this.callTx(this.contract.methods.getService(serviceName));
  }

  async getServiceFromHash(serviceHash: string) { 
    return this.callTx(this.contract.methods.getServiceFromHash(serviceHash));
  }

  async getServiceNameHash(name: string) { 
    return this.callTx(this.contract.methods.getServiceNameHash(name));
  }

  async owner() { 
    return this.callTx(this.contract.methods.owner());
  }

  async registerService(serviceNameHash: string, serviceAddress: string) { 
    return this.sendTx(this.contract.methods.registerService(serviceNameHash, serviceAddress));
  }

  async renounceOwnership() { 
    return this.sendTx(this.contract.methods.renounceOwnership());
  }

  async transferOwnership(newOwner: string) { 
    return this.sendTx(this.contract.methods.transferOwnership(newOwner));
  }

  async unregisterService(serviceNameHash: string) { 
    return this.sendTx(this.contract.methods.unregisterService(serviceNameHash));
  }

  async getOwnershipTransferredEvents(filter: PastEventOptions): XPromiseEvent<Events.OwnershipTransferredEvent> {
    return this.contract.self.getPastEvents('OwnershipTransferred', filter);
  }

  async getServiceRegisteredEvents(filter: PastEventOptions): XPromiseEvent<Events.ServiceRegisteredEvent> {
    return this.contract.self.getPastEvents('ServiceRegistered', filter);
  }

  async getServiceUnregisteredEvents(filter: PastEventOptions): XPromiseEvent<Events.ServiceUnregisteredEvent> {
    return this.contract.self.getPastEvents('ServiceUnregistered', filter);
  }

}