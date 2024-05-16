import {Model, Web3Connection, Web3ConnectionOptions, Deployable, XPromiseEvent} from '@taikai/dappkit';

import SettingsJson from '../../artifacts/contracts/core/Settings.sol/Settings.json';
import { SettingsMethods } from '@interfaces/Settings';
import * as Events from '@events/Settings'
import {PastEventOptions} from 'web3-eth-contract';
import {AbiItem} from 'web3-utils';

export class Settings extends Model<SettingsMethods> implements Deployable {
  constructor(web3Connection: Web3Connection|Web3ConnectionOptions, contractAddress?: string) {
    super(web3Connection, SettingsJson.abi as AbiItem[], contractAddress);
  }

  async deployJsonAbi(initialOwner: string) {
    const deployOptions = {
      data: SettingsJson.bytecode,
      arguments: [
        initialOwner
      ]
    }
    return this.deploy(deployOptions, this.connection.Account);
  }

    async getFeeReceiver() { 
    return this.callTx(this.contract.methods.getFeeReceiver());
  }



  async getPerformanceFee() { 
    return this.callTx(this.contract.methods.getPerformanceFee());
  }

  async getWithdrawalFee() { 
    return this.callTx(this.contract.methods.getWithdrawalFee());
  }

  async owner() { 
    return this.callTx(this.contract.methods.owner());
  }

  async renounceOwnership() { 
    return this.sendTx(this.contract.methods.renounceOwnership());
  }

  async setFeeReceiver(receiver: string) { 
    return this.sendTx(this.contract.methods.setFeeReceiver(receiver));
  }

  async setPerformanceFee(fee: number) { 
    return this.sendTx(this.contract.methods.setPerformanceFee(fee));
  }

  async setWithdrawalFee(fee: number) { 
    return this.sendTx(this.contract.methods.setWithdrawalFee(fee));
  }

  async transferOwnership(newOwner: string) { 
    return this.sendTx(this.contract.methods.transferOwnership(newOwner));
  }

  async enableAccount(account: string, enabled: boolean) {
    return this.sendTx(this.contract.methods.enableAccount(account, enabled));
  }

  async isAccountEnabled(account: string) {
    return this.callTx(this.contract.methods.isAccountEnabled(account));
  }

  async getMaxDepositInETH()  {
    return this.callTx(this.contract.methods.getMaxDepositInETH());
  }

  async setMaxDepositInETH(amount: number) {
    return this.sendTx(this.contract.methods.setMaxDepositInETH(amount));
  }

  async setRebalancePriceMaxAge(maxAge: number) {
    return this.sendTx(this.contract.methods.setRebalancePriceMaxAge(maxAge));
  }

  async getRebalancePriceMaxAge() {
    return this.callTx(this.contract.methods.getRebalancePriceMaxAge());
  }

  async setPriceMaxAge(maxAge: number) {
    return this.sendTx(this.contract.methods.setPriceMaxAge(maxAge));
  }

  async getPriceMaxAge() {
    return this.callTx(this.contract.methods.getPriceMaxAge());
  }

  async getFeeReceiverChangedEvents(filter: PastEventOptions): XPromiseEvent<Events.FeeReceiverChangedEvent> {
    return this.contract.self.getPastEvents('FeeReceiverChanged', filter);
  }

  async getOwnershipTransferredEvents(filter: PastEventOptions): XPromiseEvent<Events.OwnershipTransferredEvent> {
    return this.contract.self.getPastEvents('OwnershipTransferred', filter);
  }

  async getPerformanceFeeChangedEvents(filter: PastEventOptions): XPromiseEvent<Events.PerformanceFeeChangedEvent> {
    return this.contract.self.getPastEvents('PerformanceFeeChanged', filter);
  }

  async getWithdrawalFeeChangedEvents(filter: PastEventOptions): XPromiseEvent<Events.WithdrawalFeeChangedEvent> {
    return this.contract.self.getPastEvents('WithdrawalFeeChanged', filter);
  }

  async getRebalancePriceMaxAgeChangeEvents(filter: PastEventOptions): XPromiseEvent<Events.RebalancePriceMaxAgeChangeEvent> {
    return this.contract.self.getPastEvents('RebalancePriceMaxAgeChange', filter);
  }

  async getPriceMaxAgeChangeEvents(filter: PastEventOptions): XPromiseEvent<Events.PriceMaxAgeChangeEvent> {
    return this.contract.self.getPastEvents('PriceMaxAgeChange', filter);
  }

}