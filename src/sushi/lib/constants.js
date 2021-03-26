import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  // uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  // uniswapFactoryV2: '0x1b4d6c6B68179Ea8F493d9248acAE12019dE308B',
  // YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  // YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  // UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  // WETH: '0x9e6071CD90EE476e6D3b47e466aCE07ecd58cac7',
  // UNIRouter: '0x80203d6Adc2484d23FFBFF60360F99c6573F9d15',
  // LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  // MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  // SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  // COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  // LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  // SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x14594c8a9c4d5ab691ceeaddd0213fd05177afb8',
    3: '0x14594c8a9c4d5ab691ceeaddd0213fd05177afb8',
    43113: '0x31B3CC52e7A3AAD2DaB91dC090D67818c6f7f30F',
    43114: ''
  },
  masterChef: {
    1: '0xc2edad668740f1aa35e4d8f227fb8e17dca888cd',
    3: '0xc267dda19Ae1518c097611f393379319D6222bd1',
    43113: '0x82035bC757D8414852770A28E42b70e520816233',
    43114: ''
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    3: '0x2a7324828E189Fb01e63f2fcF43F82370eE8487a',
    43113: '0x1D308089a2D1Ced3f1Ce36B1FcaF815b07217be3',
    43114: ''
  },
  xSushi: {
    1: '0x0944525a92e9DFBD4b58748A71d39Cb406759197',
    3: '0x0944525a92e9DFBD4b58748A71d39Cb406759197',
    43113: '0x1614242b880A4f7d40ca05CCD1341841aF699C8c',
    43114: ''
    
  }
}

/*
SLP Address on mainnet for reference
==========================================
0  USDT 0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
1  USDC 0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc
2  DAI  0xa478c2975ab1ea89e8196811f51a7b7ade33eb11
3  sUSD 0xf80758ab42c3b07da84053fd88804bcb6baa4b5c
4  COMP 0xcffdded873554f362ac02f8fb1f02e5ada10516f
5  LEND 0xab3f9bf1d81ddb224a2014e98b238638824bcf20
6  SNX  0x43ae24960e5534731fc831386c07755a2dc33d47
7  UMA  0x88d97d199b9ed37c29d846d00d443de980832a22
8  LINK 0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974
9  BAND 0xf421c3f2e695c2d4c0765379ccace8ade4a480d9
10 AMPL 0xc5be99a02c6857f9eac67bbce58df5572498f40c
11 YFI  0x2fdbadf3c4d5a8666bc06645b8358ab803996e28
12 SUSHI 0xce84867c3c02b05dc570d0135103d3fb9cc19433
*/

export const supportedPools = [
  // {
  //   pid: 0,
  //   lpAddresses: {
  //     43113: '0x6Fe8979C8fe83951d3f67358bed416824e504350',
  //   },
  //   tokenAddresses: {
  //     43113: '0x6Fe8979C8fe83951d3f67358bed416824e504350',
  //   },
  //   name: 'Stake Test',
  //   symbol: 'TST PDA',
  //   tokenSymbol: 'TEST',
  //   icon: '❤️',
  // },
  // {
  //   pid: 2,
  //   lpAddresses: {
  //     43113: '0xdb4d573279042dBCE68b964112437BEe28Fba276',
  //   },
  //   tokenAddresses: {
  //     43113: '0x6Fe8979C8fe83951d3f67358bed416824e504350',
  //   },
  //   name: 'Pool Test',
  //   symbol: 'TST AVAX',
  //   tokenSymbol: 'TEST',
  //   icon: '❤️',
  // },
  {
    pid: 29,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Double Dipper',
    symbol: 'sBAMBOO',
    tokenSymbol: 'sBAMBOO',
    multiplier: '11.25x',
    icon: '📡',
    },
  {
    pid: 0,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: '1UP+ for DEFI',
    symbol: 'BAMBOO-AVAX PLP',
    tokenSymbol: 'BAMBOO',
    icon: '❤️',
    },
    {
    pid: 1,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Agent AVAX',
    symbol: 'BAMBOO-ETH PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🥽',
    },








    
  // High pairs
    {
    pid: 2,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'ETH plz...',
    symbol: 'BAMBOO-ETH PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🧙🏻',
    },
    {
    pid: 3,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Bit-HODL',
    symbol: 'BAMBOO-WBTC PLP',
    tokenSymbol: 'BAMBOO',
    icon: '💹',
    },
    {
    pid: 4,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Stinky Link',
    symbol: 'BAMBOO-LINK PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🔗',
    },
    {
    pid: 5,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Sushi Party!',
    symbol: 'BAMBOO-SUSHI PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🍣',
    },
    {
    pid: 6,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Unicorn',
    symbol: 'BAMBOO-UNI PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🏮',
    },
    {
    pid: 7,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'DeFi Bank',
    symbol: 'BAMBOO-AAVE PLP',
    tokenSymbol: 'BAMBOO',
    icon: '💳',
    },
    {
    pid: 8,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Credit Union',
    symbol: 'BAMBOO-COMP PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🏧',
    },
    {
    pid: 9,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'DeFi Dollar',
    symbol: 'BAMBOO-DAI PLP',
    tokenSymbol: 'BAMBOO',
    icon: '💰',
    },
    {
    pid: 10,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Laundry Basket',
    symbol: 'BAMBOO-USDT PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🧺',
    },
    {
    pid: 11,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'YFI Vault',
    symbol: 'BAMBOO-YFI PLP',
    tokenSymbol: 'BAMBOO',
    icon: '🔐',
    },
    {
    pid: 12,
    lpAddresses: {
      43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
      43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Snowman',
    symbol: 'BAMBOO-SNOB PLP',
    tokenSymbol: 'BAMBOO',
    icon: '☃️',
    },








    
// medium pairs
    {
    pid: 13,
    lpAddresses: {
        43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
        43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Liquidity Giant',
    symbol: 'WBTC-ETH PLP',
    tokenSymbol: 'WBTC',
    icon: '🗿',
    },
    {
    pid: 14,
    lpAddresses: {
        43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
        43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'DeFi Ape!',
    symbol: 'AVAX-ETH PLP',
    tokenSymbol: 'AVAX',
    icon: '🦍',
    },
    {
    pid: 15,
    lpAddresses: {
        43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
        43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Space Walkers',
    symbol: 'AVAX-WBTC PLP',
    tokenSymbol: 'AVAX',
    icon: '👨‍🚀',
    },
    {
    pid: 16,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Sushi Chef',
    symbol: 'AVAX-SUSHI PLP',
    tokenSymbol: 'AVAX',
    icon: '🔪',
    },
    {
    pid: 17,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Oracle Breakdown',
    symbol: 'AVAX-LINK PLP',
    tokenSymbol: 'AVAX',
    icon: '🖇',
    },
    {
    pid: 18,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'DEX Maker',
    symbol: 'AVAX-UNI PLP',
    tokenSymbol: 'AVAX',
    icon: '👷‍♂️',
    },
    








    
    //  Low Pairs
    {
    pid: 19,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'AVAX to USDT',
    symbol: 'AVAX-USDT PLP',
    tokenSymbol: 'AVAX',
    icon: '💱',
    },
    {
    pid: 20,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'WBTC to USDT',
    symbol: 'WBTC/USDT PLP',
    tokenSymbol: 'WBTC',
    icon: '💱',
    },
    {
    pid: 21,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'ETH to USDT',
    symbol: 'ETH-USDT PLP',
    tokenSymbol: 'ETH',
    icon: '💱',
    },
    {
    pid: 22,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'AVAX to DAI',
    symbol: 'AVAX-USDT PLP',
    tokenSymbol: 'AVAX',
    icon: '💱',
    },
    {
    pid: 23,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'WBTC to DAI',
    symbol: 'BTC-USDT PLP',
    tokenSymbol: 'WBTC',
    icon: '💱',
    },
    {
    pid: 24,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'ETH to DAI',
    symbol: 'ETH-DAI PLP',
    tokenSymbol: 'ETH',
    icon: '💱',
    },










// SINGLE ASSET POOLS
    {
    pid: 25,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Stablecoin Pool',
    symbol: 'DAI-USDT PLP',
    tokenSymbol: 'DAI',
    icon: '💲',
    },
    {
    pid: 26,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Single Asset Pool',
    symbol: 'AVAX',
    tokenSymbol: 'AVAX',
    icon: '❄',
    },
    {
    pid: 27,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Single Asset Pool',
    symbol: 'WBTC',
    tokenSymbol: 'WBTC',
    icon: '💸',
    },
    {
    pid: 28,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Single Asset Pool',
    symbol: 'ETH',
    tokenSymbol: 'ETH',
    icon: '💎',
    },
    {
    pid: 28,
    lpAddresses: {
    43113: '0x02eccdc5f949ba887438841044b0957ba71b7127',
    },
    tokenAddresses: {
    43113: '0xad6d458402f60fd3bd25163575031acdce07538d',
    },
    name: 'Single Asset Pool',
    symbol: 'LINK',
    tokenSymbol: 'LINK',
    icon: '📡',
    },
]
