
export interface PostWalletBalancesModelData {
  userId: number;
  balance: number;
}
class PostWalletBalancesModel {
  userId: number;
  balance: number;
  constructor(postWalletBalancesModelData: PostWalletBalancesModelData) {
    this.userId = postWalletBalancesModelData.userId;
    this.balance = postWalletBalancesModelData.balance;
  }
}

export default PostWalletBalancesModelData;