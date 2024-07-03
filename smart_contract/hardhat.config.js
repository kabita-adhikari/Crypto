require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/1gVBPgALkf7Rmjj1ICjLlZppBCUPDkym',
      accounts: ['5d3960dbbdb04b9ca1a283c2e8ec2293c87db3b27d063049632c3afb55f662b3'],
    },
  },
};