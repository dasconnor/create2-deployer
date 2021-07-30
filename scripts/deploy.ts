import {
  Contract,
  ContractFactory
} from "ethers"
import { ethers } from "hardhat"
import { bytecode as ERC20_BYTECODE } from "../artifacts/contracts/ERC20.sol/ExampleERC20.json"

const main = async (): Promise<any> => {
  const Deployer: ContractFactory = await ethers.getContractFactory("Deployer")
  const deployer: Contract = await Deployer.deploy()

  const salt = '0x0d4ba12aa765a8498754f2c6efd7d7d24cbd87a9957482705262a367ef724444'

  const filter = {
    address: deployer.address,
    topics: [
      ethers.utils.id("ContractDeployed(address)")
    ]
  }

  deployer.on(ethers.utils.id("ContractDeployed(address)"), (addr) => {
    console.log(`Contract deployed to ${addr}`)
  })

  await deployer.deploy(salt, ERC20_BYTECODE)
  console.log(deployer.filters.ContractDeployed())
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
