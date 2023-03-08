const Kai2Token = artifacts.require("Kai2Token");
const MintNFT = artifacts.require("MintNFT");
const Sale = artifacts.require("Sale");

module.exports = async function (deployer){
    // Kai2Token 배포 진행
    await deployer.deploy(Kai2Token);
    const kai = await Kai2Token.deployed();
    // MintNFT 배포 진행
    await deployer.deploy(MintNFT, kai.address);
    // 배포된 MintNFT인스턴스 가져오기
    const mintToken = await MintNFT.deployed();
    // Sale 배포 진행
    // mintToken.address // 배포된 컨트랙트의 CA 값이 가져와짐
    await deployer.deploy(Sale, mintToken.address);
}