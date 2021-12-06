"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKEN_BALANCES = exports.INVESTOR_REWARDS = exports.INVESTOR_ALLOCATIONS = exports.CONTRACT_ADDRESSES = exports.govHistStringFromCode = exports.GovernanceHistoryCodes = exports.StakeChoices = exports.COLLATERAL_TYPES = exports.CollateralDetailsPack = exports.GraphTimeModulusPointsPack = exports.GraphTimeNumPointsPack = exports.LockedStakeBucketPack = exports.GraphTimeFramePackLowercased = exports.GraphTimeFramePack = exports.omit = exports.LAST_GOOD_LOCKED_VEFXS_SYNC_BLOCK = exports.LAST_GOOD_LOCKED_STAKES_SYNC_BLOCK = exports.LAST_GOOD_FXS_BURNED_SYNC_BLOCK = exports.PAST_LOGS_BATCH_SIZE_POLYGON = exports.PAST_LOGS_BATCH_SIZE_MOONRIVER = exports.PAST_LOGS_BATCH_SIZE_HARMONY = exports.PAST_LOGS_BATCH_SIZE_FANTOM = exports.PAST_LOGS_BATCH_SIZE = exports.PAST_LOGS_BATCH_SIZE_BSC = exports.PAST_LOGS_BATCH_SIZE_BOBA = exports.PAST_LOGS_BATCH_SIZE_AVALANCHE = exports.PAST_LOGS_BATCH_SIZE_AURORA = exports.PAST_LOGS_BATCH_SIZE_ARBITRUM = exports.ONE_E18 = exports.BIG18 = exports.BIG12 = exports.BIG8 = exports.BIG6 = void 0;
const tslib_1 = require("tslib");
const BigNumber = require('bignumber.js');
exports.BIG6 = new BigNumber("1e6");
exports.BIG8 = new BigNumber("1e8");
exports.BIG12 = new BigNumber("1e12");
exports.BIG18 = new BigNumber("1e18");
exports.ONE_E18 = Math.pow(10, 18);
exports.PAST_LOGS_BATCH_SIZE_ARBITRUM = 2500;
exports.PAST_LOGS_BATCH_SIZE_AURORA = 2500;
exports.PAST_LOGS_BATCH_SIZE_AVALANCHE = 2500;
exports.PAST_LOGS_BATCH_SIZE_BOBA = 2500;
exports.PAST_LOGS_BATCH_SIZE_BSC = 2000;
exports.PAST_LOGS_BATCH_SIZE = 2500;
exports.PAST_LOGS_BATCH_SIZE_FANTOM = 2000;
exports.PAST_LOGS_BATCH_SIZE_HARMONY = 2500;
exports.PAST_LOGS_BATCH_SIZE_MOONRIVER = 2500;
exports.PAST_LOGS_BATCH_SIZE_POLYGON = 2500;
exports.LAST_GOOD_FXS_BURNED_SYNC_BLOCK = 12474737;
exports.LAST_GOOD_LOCKED_STAKES_SYNC_BLOCK = 11465581;
exports.LAST_GOOD_LOCKED_VEFXS_SYNC_BLOCK = 12377613;
function omit(key, obj) {
    const _a = obj, _b = key, omitted = _a[_b], rest = tslib_1.__rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    return rest;
}
exports.omit = omit;
exports.GraphTimeFramePack = {
    'All Time': 1576800000,
    '1 Year': 31556952,
    '6 Months': 15778476,
    '3 Months': 7889238,
    '1 Month': 2629746,
    '1 Week': 604800,
    '1 Day': 86400,
    '8 Hours': 28800,
    '1 Hour': 3600,
    '15 Minutes': 900,
};
exports.GraphTimeFramePackLowercased = {
    'all-time': 1576800000,
    '1-year': 31556952,
    '6-months': 15778476,
    '3-months': 7889238,
    '1-month': 2629746,
    '1-week': 604800,
    '1-day': 86400,
    '8-hours': 28800,
    '1-hour': 3600,
    '15-minutes': 900,
};
exports.LockedStakeBucketPack = {
    'Unlocked': { idx: 0, min: 0, max: 1 },
    '≤ 15 days': { idx: 1, min: 1, max: 1296000 },
    '15 - 30 Days': { idx: 2, min: 1296001, max: 2592000 },
    '30 - 60 Days': { idx: 3, min: 2592001, max: 5184000 },
    '60 - 90 Days': { idx: 4, min: 5184001, max: 7776000 },
    '90 Days - 180 Days': { idx: 5, min: 7776001, max: 15552000 },
    '180 Days - 1 Year': { idx: 6, min: 15552001, max: 31536000 },
    '1 Year - 2 Years': { idx: 7, min: 31536001, max: 63113904 },
    '2 Years - 3 Years': { idx: 8, min: 63113905, max: 94608000 },
    '3 Years - 4 Years': { idx: 9, min: 94608001, max: 900000000 },
};
exports.GraphTimeNumPointsPack = {
    'all-time': 1095,
    '1-year': 365,
    '6-months': 180,
    '3-months': 180,
    '1-month': 120,
    '1-week': 126,
    '1-day': 96,
    '8-hours': 96,
    '1-hour': 120,
    '15-minutes': 90,
};
exports.GraphTimeModulusPointsPack = {
    'all-time': 20,
    '1-year': 10,
    '6-months': 10,
    '3-months': 5,
    '1-month': 4,
    '1-week': 3,
    '1-day': 2,
    '8-hours': 1,
    '1-hour': 1,
    '15-minutes': 1,
};
exports.CollateralDetailsPack = {
    'yUSD': {
        name: 'LP-yCurve',
        dd_name: 'yCRV DAI+USDC+USDT+TUSD',
        decimals: 18
    },
    'USDC': {
        name: 'USDC',
        dd_name: 'USDC',
        decimals: 18
    },
    'USDT': {
        name: 'USDT',
        dd_name: 'USDT',
        decimals: 18
    },
};
exports.COLLATERAL_TYPES = Object.keys(exports.CollateralDetailsPack);
exports.StakeChoices = {
    '1Swap FRAX/1S3P': {
        lp_logo: '1swap',
        label: '1Swap FRAX/1S3P',
        chain: 'moonriver',
        external_contract: true,
        farming_link: 'https://1swap.fi/farms',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["1SWAP"]
    },
    'Aave FRAX Lending': {
        lp_logo: 'aave',
        label: 'Aave FRAX Lending',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://app.aave.com/reserve-overview/FRAX-0x853d955acef822db058eb8505911ed77f175b99e0xb53c1a33016b2dc2ff3653530bff1848a515c8c5',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"]
    },
    'ApeSwap canFRAX/BUSD': {
        lp_logo: 'apeswap',
        label: 'ApeSwap FRAX/BUSD',
        chain: 'bsc',
        external_contract: true,
        farming_link: 'https://apeswap.finance/farms',
        staking_enabled: true,
        pool_tokens: ["FRAX", "BUSD"],
        reward_tokens: ["BANANA"],
    },
    'ApeSwap canFXS/WBNB': {
        lp_logo: 'apeswap',
        label: 'ApeSwap FXS/BNB',
        chain: 'bsc',
        external_contract: true,
        farming_link: 'https://apeswap.finance/farms',
        staking_enabled: true,
        pool_tokens: ["FXS", "BNB"],
        reward_tokens: ["BANANA"],
    },
    'APY.Finance Curve FRAX': {
        lp_logo: 'apyfinance',
        label: 'APY.Finance Curve FRAX',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://dashboard.apy.finance/dashboard/portfolio',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        has_varied_apy: true
    },
    'Axial AC4D TSD/MIM/FRAX/DAI.e': {
        lp_logo: 'axial',
        label: 'Axial AC4D TSD/MIM/FRAX/DAI.e',
        chain: 'avalanche',
        external_contract: true,
        farming_link: 'https://app.axial.exchange/#/rewards/ac4d/deposit',
        staking_enabled: true,
        pool_tokens: ["TSD", "MIM", "FRAX", "DAI.e"],
        reward_tokens: ["FRAX", "AXIAL"],
        reward_token_bridge_types: ['canonical'],
    },
    'Beefy Finance [Avalanche]': {
        lp_logo: 'beefy_finance',
        label: 'Beefy Finance',
        chain: 'avalanche',
        external_contract: true,
        farming_link: 'https://app.beefy.finance/#/avax',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
        has_varied_apy: true
    },
    'Beefy Finance [BSC]': {
        lp_logo: 'beefy_finance',
        label: 'Beefy Finance',
        chain: 'bsc',
        external_contract: true,
        farming_link: 'https://app.beefy.finance/#/bsc',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["BANANA"],
        has_varied_apy: true
    },
    'Beefy Finance [Fantom]': {
        lp_logo: 'beefy_finance',
        label: 'Beefy Finance',
        chain: 'fantom',
        external_contract: true,
        farming_link: 'https://app.beefy.finance/#/fantom',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
        has_varied_apy: true
    },
    'Beefy Finance [Harmony]': {
        lp_logo: 'beefy_finance',
        label: 'Beefy Finance',
        chain: 'harmony',
        external_contract: true,
        farming_link: 'https://app.beefy.finance/#/harmony',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
        has_varied_apy: true
    },
    'Beefy Finance [Moonriver]': {
        lp_logo: 'beefy_finance',
        label: 'Beefy Finance',
        chain: 'moonriver',
        external_contract: true,
        farming_link: 'https://app.beefy.finance/#/moonriver',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
        has_varied_apy: true
    },
    'Beefy Finance [Polygon]': {
        lp_logo: 'beefy_finance',
        label: 'Beefy Finance',
        chain: 'polygon',
        external_contract: true,
        farming_link: 'https://app.beefy.finance/#/polygon',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
        has_varied_apy: true
    },
    'Convex d3pool': {
        lp_logo: 'convex',
        label: 'Convex d3pool',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://www.convexfinance.com/stake',
        staking_enabled: true,
        pool_tokens: ["FRAX", "FEI", "alUSD"],
        reward_tokens: ["CRV", "CVX"]
    },
    'Convex FRAX3CRV-f': {
        lp_logo: 'convex',
        label: 'Convex FRAX3CRV-f',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://www.convexfinance.com/stake',
        staking_enabled: true,
        pool_tokens: ["FRAX", "DAI", "USDC", "USDT"],
        reward_tokens: ["FXS", "CRV", "CVX"]
    },
    'Curve FRAX3CRV-f-2': {
        lp_logo: 'curve',
        slug: "Curve_FRAX3CRV_F_2",
        label: 'Curve FRAX3CRV-f V2 (Metapool)',
        chain: 'ethereum',
        info_link: 'https://curve.fi/frax/stats',
        add_liq_link: 'https://curve.fi/frax/deposit',
        trade_link: 'https://curve.fi/frax/',
        farming_link: 'https://curve.fi/frax/deposit',
        staking_enabled: true,
        external_contract: true,
        pool_tokens: ["FRAX", "DAI", "USDC", "USDT"],
        reward_tokens: ["FXS", "CRV"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "curve-dao-token"],
        version: 2
    },
    'Gelato Uniswap FRAX/DAI': {
        lp_logo: 'gelato',
        slug: "Gelato_Uniswap_FRAX_DAI",
        label: 'Gelato Uniswap FRAX/DAI',
        chain: 'ethereum',
        info_link: "https://www.sorbet.finance/#/pools/0xb1Cfdc7370550f5e421E1bf0BF3CADFaDF3C4141",
        add_liq_link: 'https://www.sorbet.finance/#/pools/0xb1Cfdc7370550f5e421E1bf0BF3CADFaDF3C4141/add',
        trade_link: 'https://www.sorbet.finance/#/limit-order?inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f',
        farming_link: 'https://app.frax.finance/staking#Gelato_Uniswap_FRAX_DAI',
        starting_block: 13388815,
        staking_enabled: true,
        vefxs_enabled: true,
        external_contract: false,
        pool_tokens: ["FRAX", "DAI"],
        reward_tokens: ["FXS"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share"],
        version: 101
    },
    'Hundred FRAX Lending [Arbitrum]': {
        lp_logo: 'hundred',
        label: 'Hundred FRAX Lending',
        chain: 'arbitrum',
        external_contract: true,
        farming_link: 'https://hundred.finance/',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX", "HND"],
        reward_token_bridge_types: ['canonical'],
    },
    'Hundred FRAX Lending [Fantom]': {
        lp_logo: 'hundred',
        label: 'Hundred FRAX Lending',
        chain: 'fantom',
        external_contract: true,
        farming_link: 'https://hundred.finance/',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX", "HND"],
        reward_token_bridge_types: ['canonical'],
    },
    'Impossible FRAX/IF': {
        lp_logo: 'impossible',
        slug: "Impossible_FRAX_IF",
        label: 'Impossible FRAX/IF',
        chain: 'bsc',
        info_link: 'https://info.impossible.finance/pair/0x5316e743816223b335764738021f3df7a17a25da',
        add_liq_link: 'https://swap.impossible.finance/#/add/0x29cED01C447166958605519F10DcF8b0255fB379/0xB0e1fc65C1a741b4662B813eB787d369b8614Af1',
        trade_link: 'https://swap.impossible.finance/#/swap?inputCurrency=0x29cED01C447166958605519F10DcF8b0255fB379&outputCurrency=0xB0e1fc65C1a741b4662B813eB787d369b8614Af1',
        farming_link: 'https://app.frax.finance/staking#Impossible_FRAX_IF',
        starting_block: 10073446,
        staking_enabled: false,
        external_contract: false,
        pool_tokens: ["FRAX", "IF"],
        reward_tokens: ["FXS", "IF"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "impossible-finance"],
        reward_token_bridge_types: ['anyFXS', null],
        version: 5
    },
    'Impossible FRAX/FXS': {
        lp_logo: 'impossible',
        slug: "Impossible_FRAX_FXS",
        label: 'Impossible FRAX/FXS',
        chain: 'bsc',
        info_link: 'https://info.impossible.finance/pair/0x13d80efd9f4ec6ef7279fe10124cebf58c0d07c2',
        add_liq_link: 'https://swap.impossible.finance/#/add/0x29cED01C447166958605519F10DcF8b0255fB379/0xDE2F075f6F14EB9D96755b24E416A53E736Ca363',
        trade_link: 'https://swap.impossible.finance/#/swap?inputCurrency=0x29cED01C447166958605519F10DcF8b0255fB379&outputCurrency=0xDE2F075f6F14EB9D96755b24E416A53E736Ca363',
        farming_link: 'https://app.frax.finance/staking#Impossible_FRAX_FXS',
        starting_block: 10064339,
        staking_enabled: false,
        external_contract: false,
        pool_tokens: ["FRAX", "FXS"],
        reward_tokens: ["FXS", "IF"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "impossible-finance"],
        reward_token_bridge_types: ['anyFXS', null],
        version: 5
    },
    'Lobis FXS Bonds': {
        lp_logo: 'lobis',
        label: 'Lobis FXS Bonds',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://app.lobis.finance/#/mints/fxs',
        staking_enabled: true,
        pool_tokens: ["FXS"],
        reward_tokens: ["LOBI"],
        has_varied_apy: true
    },
    'Market.xyz FRAX Lending': {
        lp_logo: 'marketxyz',
        label: 'Market.xyz FRAX Lending',
        chain: 'polygon',
        external_contract: true,
        farming_link: 'https://polygon.market.xyz/?filter=frax',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
    },
    'mStable FRAX/mUSD': {
        lp_logo: 'mstable',
        slug: "mStable_FRAX_mUSD",
        label: 'mStable FRAX/mUSD',
        chain: 'polygon',
        info_link: 'https://app.mstable.org/#/musd/pools',
        add_liq_link: 'https://app.mstable.org/#/musd/pools/0xb30a907084ac8a0d25dddab4e364827406fd09f0?network=polygon',
        trade_link: 'https://app.mstable.org/#/musd/exchange/swap',
        farming_link: 'https://app.frax.finance/staking#mStable_FRAX_mUSD',
        starting_block: 17439000,
        staking_enabled: true,
        external_contract: false,
        is_gauged: true,
        pool_tokens: ["FRAX", "mUSD"],
        reward_tokens: ["FXS", "MTA"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "meta"],
        reward_token_bridge_types: ['polyFXS', null],
        version: 5
    },
    'OlympusDAO FRAX Bonds': {
        lp_logo: 'olympus',
        label: 'OlympusDAO FRAX Bonds',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://app.olympusdao.finance/#/bonds',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        has_varied_apy: true
    },
    'Olympus Pro FRAX/WETH SLP': {
        lp_logo: 'olympus',
        label: 'Olympus Pro FRAX/WETH SLP',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://pro.olympusdao.finance/#/bond/frax_eth_sushi',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        has_varied_apy: true
    },
    'Pangolin FRAX/AVAX': {
        lp_logo: 'pangolin',
        label: 'Pangolin FRAX/AVAX',
        chain: 'avalanche',
        external_contract: true,
        farming_link: 'https://app.pangolin.exchange/#/png/AVAX/0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64/1',
        staking_enabled: true,
        pool_tokens: ["FRAX", "AVAX"],
        reward_tokens: ["PNG"]
    },
    'Rari FRAX Lending': {
        lp_logo: 'rari',
        label: 'Rari FRAX Lending',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://app.rari.capital/fuse?filter=frax',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        has_varied_apy: true
    },
    'Saber wFRAX/USDC': {
        lp_logo: 'saber',
        label: 'Saber wFRAX/USDC',
        chain: 'solana',
        external_contract: true,
        farming_link: 'https://app.saber.so/#/farms/frax/stake',
        staking_enabled: true,
        pool_tokens: ["FRAX", "USDC"],
        reward_tokens: ["SBR"]
    },
    'Saddle alUSD/FEI/FRAX/LUSD': {
        lp_logo: 'saddle',
        slug: "Saddle_alUSD_FEI_FRAX_LUSD",
        label: 'Saddle alUSD/FEI/FRAX/LUSD',
        chain: 'ethereum',
        info_link: 'https://saddle.exchange/#/pools',
        add_liq_link: 'https://saddle.exchange/#/pools/d4/deposit',
        trade_link: 'https://saddle.exchange/#/',
        farming_link: 'https://app.frax.finance/staking#Saddle_alUSD_FEI_FRAX_LUSD',
        starting_block: 1278245,
        staking_enabled: true,
        external_contract: false,
        pool_tokens: ["FRAX", "alUSD", "FEI", "LUSD"],
        reward_tokens: ["FXS", "TRIBE", "ALCX", "LQTY"],
        reward_token_decimals: [18, 18, 18, 18],
        reward_token_coingecko_slugs: ["frax-share", "tribe-2", "alchemix", "liquity"],
        version: 100
    },
    'Scream FRAX Lending': {
        lp_logo: 'scream',
        label: 'Scream FRAX Lending',
        chain: 'fantom',
        external_contract: true,
        farming_link: 'https://scream.sh/lend',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
    },
    'Solarbeam FRAX/aROME': {
        lp_logo: 'solarbeam',
        label: 'Solarbeam FRAX/aROME',
        chain: 'moonriver',
        external_contract: true,
        farming_link: 'https://app.solarbeam.io/farm',
        staking_enabled: true,
        pool_tokens: ["FRAX", "aROME"],
        reward_tokens: ["SOLAR"],
    },
    'Solarbeam FRAX/MOVR': {
        lp_logo: 'solarbeam',
        label: 'Solarbeam FRAX/MOVR',
        chain: 'moonriver',
        external_contract: true,
        farming_link: 'https://app.solarbeam.io/farm',
        staking_enabled: true,
        pool_tokens: ["FRAX", "MOVR"],
        reward_tokens: ["SOLAR"],
    },
    'SpiritSwap FRAX/FTM': {
        lp_logo: 'spiritswap',
        label: 'SpiritSwap FRAX/FTM',
        chain: 'fantom',
        external_contract: true,
        farming_link: 'https://app.spiritswap.finance/#/farms',
        staking_enabled: false,
        pool_tokens: ["FRAX", "FTM"],
        reward_tokens: ["SPIRIT"]
    },
    'SpiritSwap FRAX/FXS': {
        lp_logo: 'spiritswap',
        slug: "SpiritSwap_FRAX_FXS",
        label: 'SpiritSwap FRAX/FXS',
        chain: 'fantom',
        info_link: 'https://info.spiritswap.finance/pair/0x100fcf27c87d1cc7b8d6c28b69b84a359e4fd377',
        add_liq_link: 'https://swap.spiritswap.finance/#/add/0x82f8cb20c14f134fe6ebf7ac3b903b2117aafa62/0xaf319e5789945197e365e7f7fbfc56b130523b33',
        trade_link: 'https://swap.spiritswap.finance/#/swap/0x5Cc61A78F164885776AA610fb0FE1257df78E59B',
        farming_link: 'https://app.frax.finance/staking#SpiritSwap_FRAX_FXS',
        starting_block: 14456599,
        staking_enabled: false,
        external_contract: false,
        pool_tokens: ["FRAX", "FXS"],
        reward_tokens: ["FXS"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share"],
        reward_token_bridge_types: ['anyFXS'],
        version: 5,
        is_soon: false
    },
    'SpiritSwap/Ola FRAX Lending': {
        lp_logo: 'scream',
        label: 'SpiritSwap/Ola FRAX Lending',
        chain: 'fantom',
        external_contract: true,
        farming_link: 'https://app.ola.finance/networks/0x892701d128d63c9856A9Eb5d967982F78FD3F2AE/markets',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"],
        reward_token_bridge_types: ['canonical'],
    },
    'StakeDAO sdETH-FraxPut': {
        lp_logo: 'stakedao',
        slug: "StakeDAO_sdETH-FraxPut",
        label: 'StakeDAO sdETH-FraxPut',
        chain: 'ethereum',
        info_link: 'https://stakedao.org/0x0000000000000000000000000000000000000000/strategies/option',
        add_liq_link: 'https://curve.fi/frax/deposit',
        trade_link: 'https://stakedao.org/0x0000000000000000000000000000000000000000/strategies/option',
        farming_link: 'https://app.frax.finance/staking#StakeDAO_sdETH-FraxPut',
        starting_block: 13574614,
        staking_enabled: true,
        external_contract: false,
        vefxs_enabled: true,
        is_gauged: true,
        pool_tokens: ["FRAX", "DAI", "USDC", "USDT"],
        reward_tokens: ["FXS", "SDT"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "stake-dao"],
        version: 101
    },
    'StakeDAO sdFRAX3CRV-f': {
        lp_logo: 'stakedao',
        slug: "StakeDAO_sdFRAX3CRV-f",
        label: 'StakeDAO sdFRAX3CRV-f',
        chain: 'ethereum',
        info_link: 'https://stakedao.org/0x0000000000000000000000000000000000000000/strategies',
        add_liq_link: 'https://curve.fi/frax/deposit',
        trade_link: 'https://stakedao.org/0x0000000000000000000000000000000000000000/strategies',
        farming_link: 'https://app.frax.finance/staking#StakeDAO_sdFRAX3CRV-f',
        starting_block: 13225432,
        staking_enabled: true,
        external_contract: false,
        vefxs_enabled: true,
        is_gauged: true,
        pool_tokens: ["FRAX", "DAI", "USDC", "USDT"],
        reward_tokens: ["FXS", "SDT"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "stake-dao"],
        version: 101
    },
    'Sushi FRAX/ETH': {
        lp_logo: 'sushiswap',
        label: 'Sushi FRAX/ETH',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://app.sushi.com/farm',
        staking_enabled: true,
        pool_tokens: ["FRAX", "ETH"],
        reward_tokens: ["SUSHI"]
    },
    'Sushi FRAX/ETH [Harmony]': {
        lp_logo: 'sushiswap',
        label: 'Sushi FRAX/ETH',
        chain: 'harmony',
        external_contract: true,
        farming_link: 'https://app.sushi.com/farm',
        staking_enabled: true,
        pool_tokens: ["FRAX", "ETH"],
        reward_tokens: ["SUSHI", "ONE"]
    },
    'Sushi FRAX/FXS [Polygon]': {
        lp_logo: 'sushiswap',
        label: 'Sushi FRAX/FXS',
        chain: 'polygon',
        external_contract: true,
        farming_link: 'https://app.sushi.com/farm',
        staking_enabled: true,
        pool_tokens: ["FRAX", "FXS"],
        reward_tokens: ["SUSHI", "MATIC"]
    },
    'Sushi FRAX/USDC [Moonriver]': {
        lp_logo: 'sushiswap',
        label: 'Sushi FRAX/USDC',
        chain: 'moonriver',
        external_contract: true,
        farming_link: 'https://app.sushi.com/farm',
        staking_enabled: true,
        pool_tokens: ["FRAX", "USDC"],
        reward_tokens: ["SUSHI", "MOVR"]
    },
    'Sushi FRAX/SUSHI': {
        lp_logo: 'sushiswap',
        slug: "Sushi_FRAX_SUSHI",
        label: 'Sushi FRAX/SUSHI',
        chain: 'ethereum',
        info_link: 'https://analytics.sushi.com/pairs/0xe06f8d30ac334c857fc8c380c85969c150f38a6a',
        add_liq_link: 'https://app.sushi.com/swap#/add/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2/0x853d955acef822db058eb8505911ed77f175b99e',
        trade_link: 'https://app.sushi.com/swap#/swap?inputCurrency=0x6b3595068778dd592e39a122f4f5a5cf09c90fe2&outputCurrency=0x853d955acef822db058eb8505911ed77f175b99e',
        farming_link: 'https://app.frax.finance/staking#Sushi_FRAX_SUSHI',
        starting_block: 13013617,
        staking_enabled: true,
        external_contract: false,
        vefxs_enabled: true,
        is_gauged: true,
        pool_tokens: ["FRAX", "SUSHI"],
        reward_tokens: ["FXS", "SUSHI"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "sushi"],
        version: 101,
        is_soon: false
    },
    'Tokemak FXS Staking': {
        lp_logo: 'tokemak',
        label: 'Tokemak FXS Staking',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://www.tokemak.xyz/',
        staking_enabled: true,
        pool_tokens: ["FXS"],
        reward_tokens: ["TOKE"],
    },
    'Uniswap FRAX/USDC': {
        lp_logo: 'uniswap',
        slug: "Uniswap_FRAX_USDC",
        label: 'Uniswap FRAX/USDC',
        chain: 'ethereum',
        info_link: "https://v2.info.uniswap.org/pair/0x97c4adc5d28a86f9470c70dd91dc6cc2f20d2d4d",
        add_liq_link: 'https://app.uniswap.org/#/add/v2/0x853d955acef822db058eb8505911ed77f175b99e/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        trade_link: 'https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        farming_link: 'https://app.frax.finance/staking#Uniswap_FRAX_USDC',
        starting_block: 11465735,
        staking_enabled: false,
        external_contract: false,
        is_migratable_to_v3: false,
        pool_tokens: ["FRAX", "USDC"],
        reward_tokens: ["FXS"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share"],
        version: 1
    },
    'Uniswap V3 FRAX/agEUR': {
        lp_logo: 'uniswap_v3',
        slug: "Uniswap_V3_FRAX_agEUR",
        label: 'Uniswap V3 FRAX/agEUR',
        chain: 'ethereum',
        info_link: "https://info.uniswap.org/#/pools/0x8ce5796ef6b0c5918025bcf4f9ca908201b030b3",
        add_liq_link: 'https://app.uniswap.org/#/add/0x853d955acef822db058eb8505911ed77f175b99e/0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8/500',
        trade_link: 'https://app.uniswap.org/#/swap?inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8',
        farming_link: 'https://app.frax.finance/staking#Uniswap_V3_FRAX_agEUR',
        starting_block: 13715882,
        staking_enabled: true,
        external_contract: false,
        vefxs_enabled: true,
        is_gauged: true,
        pair_token0_decimals: 18,
        pair_token1_decimals: 18,
        pool_tokens: ["FRAX", "agEUR"],
        reward_tokens: ["FXS", "FRAX", "agEUR"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share", "frax", "ageur"],
        version: 1000,
    },
    'Uniswap V3 FRAX/DAI': {
        lp_logo: 'uniswap_v3',
        slug: "Uniswap_V3_FRAX_DAI",
        label: 'Uniswap V3 FRAX/DAI',
        chain: 'ethereum',
        info_link: "https://info.uniswap.org/#/pools/0x97e7d56a0408570ba1a7852de36350f7713906ec",
        add_liq_link: 'https://app.uniswap.org/#/add/0x853d955acef822db058eb8505911ed77f175b99e/0x6B175474E89094C44Da98b954EedeAC495271d0F/500',
        trade_link: 'https://app.uniswap.org/#/swap?inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=0x6B175474E89094C44Da98b954EedeAC495271d0F',
        farming_link: 'https://app.frax.finance/staking#Uniswap_V3_FRAX_DAI',
        starting_block: 12934415,
        staking_enabled: true,
        external_contract: false,
        vefxs_enabled: true,
        is_gauged: true,
        pair_token0_decimals: 18,
        pair_token1_decimals: 18,
        pool_tokens: ["FRAX", "DAI"],
        reward_tokens: ["FXS", "FRAX", "DAI"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share", "frax", "dai"],
        version: 1000,
    },
    'Uniswap V3 FRAX/USDC': {
        lp_logo: 'uniswap_v3',
        slug: "Uniswap_V3_FRAX_USDC",
        label: 'Uniswap V3 FRAX/USDC',
        chain: 'ethereum',
        info_link: "https://info.uniswap.org/#/pools/0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52",
        add_liq_link: 'https://app.uniswap.org/#/add/0x853d955acef822db058eb8505911ed77f175b99e/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48/500',
        trade_link: 'https://app.uniswap.org/#/swap?inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        farming_link: 'https://app.frax.finance/staking#Uniswap_V3_FRAX_USDC',
        starting_block: 12829216,
        staking_enabled: true,
        external_contract: false,
        vefxs_enabled: true,
        is_gauged: true,
        pair_token0_decimals: 18,
        pair_token1_decimals: 6,
        pool_tokens: ["FRAX", "USDC"],
        reward_tokens: ["FXS", "FRAX", "USDC"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share", "frax", "usd-coin"],
        version: 1000,
        is_soon: false
    },
    'Uniswap FRAX/WETH': {
        lp_logo: 'uniswap',
        slug: "Uniswap_FRAX_WETH",
        label: 'Uniswap FRAX/WETH',
        chain: 'ethereum',
        info_link: "https://v2.info.uniswap.org/pair/0xfd0a40bc83c5fae4203dec7e5929b446b07d1c76",
        add_liq_link: 'https://app.uniswap.org/#/add/v2/0x853d955acef822db058eb8505911ed77f175b99e/ETH',
        trade_link: 'https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=ETH',
        farming_link: 'https://app.frax.finance/staking#Uniswap_FRAX_WETH',
        starting_block: 11465735,
        staking_enabled: false,
        external_contract: false,
        pool_tokens: ["FRAX", "WETH"],
        reward_tokens: ["FXS"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share"],
        version: 1
    },
    'Uniswap FRAX/FXS': {
        lp_logo: 'uniswap',
        slug: "Uniswap_FRAX_FXS",
        label: 'Uniswap FRAX/FXS',
        chain: 'ethereum',
        info_link: "https://v2.info.uniswap.org/pair/0xe1573b9d29e2183b1af0e743dc2754979a40d237",
        add_liq_link: 'https://app.uniswap.org/#/add/v2/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0/0x853d955acef822db058eb8505911ed77f175b99e',
        trade_link: 'https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0&outputCurrency=0x853d955acef822db058eb8505911ed77f175b99e',
        farming_link: 'https://app.frax.finance/staking#Uniswap_FRAX_FXS',
        starting_block: 11465739,
        staking_enabled: true,
        external_contract: false,
        pool_tokens: ["FRAX", "FXS"],
        reward_tokens: ["FXS"],
        reward_token_decimals: [18],
        reward_token_coingecko_slugs: ["frax-share"],
        version: 1
    },
    'Uniswap FRAX/IQ': {
        lp_logo: 'uniswap',
        slug: "Uniswap_FRAX_IQ",
        label: 'Uniswap FRAX/IQ',
        chain: 'ethereum',
        info_link: "https://v2.info.uniswap.org/pair/0xd6c783b257e662ca949b441a4fcb08a53fc49914",
        add_liq_link: 'https://app.uniswap.org/#/add/v2/0x853d955acef822db058eb8505911ed77f175b99e/0x579cea1889991f68acc35ff5c3dd0621ff29b0c9',
        trade_link: 'https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=0x579cea1889991f68acc35ff5c3dd0621ff29b0c9',
        farming_link: 'https://app.frax.finance/staking#Uniswap_FRAX_IQ',
        starting_block: 12512549,
        staking_enabled: true,
        vefxs_enabled: true,
        external_contract: false,
        pool_tokens: ["FRAX", "IQ"],
        reward_tokens: ["FXS", "IQ"],
        reward_token_decimals: [18, 18],
        reward_token_coingecko_slugs: ["frax-share", "everipedia"],
        version: 3
    },
    'Uniswap FRAX/OHM': {
        lp_logo: 'uniswap',
        slug: "Uniswap_FRAX_OHM",
        label: 'Uniswap FRAX/OHM',
        chain: 'ethereum',
        info_link: "https://v2.info.uniswap.org/pair/0x2dce0dda1c2f98e0f171de8333c3c6fe1bbf4877",
        add_liq_link: 'https://app.uniswap.org/#/add/v2/0x853d955acef822db058eb8505911ed77f175b99e/0x383518188c0c6d7730d91b2c03a03c837814a899',
        trade_link: 'https://app.uniswap.org/#/swap?use=V2&inputCurrency=0x853d955acef822db058eb8505911ed77f175b99e&outputCurrency=0x383518188c0c6d7730d91b2c03a03c837814a899',
        farming_link: 'https://app.frax.finance/staking#Uniswap_FRAX_OHM',
        starting_block: 12563575,
        staking_enabled: false,
        vefxs_enabled: true,
        external_contract: false,
        pool_tokens: ["FRAX", "OHM"],
        reward_tokens: ["FXS", "OHM"],
        reward_token_decimals: [18, 9],
        reward_token_coingecko_slugs: ["frax-share", "olympus"],
        version: 4
    },
    'Vesper Orbit FRAX': {
        lp_logo: 'vesper',
        label: 'Vesper Orbit FRAX',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://orbit.vesper.finance/eth/0xc14900dFB1Aa54e7674e1eCf9ce02b3b35157ba5',
        staking_enabled: true,
        pool_tokens: ["FRAX"],
        reward_tokens: ["FRAX"]
    },
    'Yearn crvFRAX Vault (V3)': {
        lp_logo: 'yearn',
        label: 'Yearn crvFRAX Vault (V3)',
        chain: 'ethereum',
        external_contract: true,
        farming_link: 'https://yearn.finance/#/vault/0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139',
        staking_enabled: true,
        pool_tokens: ["FRAX", "DAI", "USDC", "USDT"],
        reward_tokens: ["FRAX3CRV-f"]
    },
};
exports.GovernanceHistoryCodes = {
    "Created": 0,
    "Active": 1,
    "Rejected": 2,
    "Succeeded": 3,
    "Queued": 4,
    "Executed": 5
};
const govHistStringFromCode = (code) => {
    const theKeys = Object.keys(exports.GovernanceHistoryCodes);
    for (let i = 0; i < theKeys.length; i++) {
        const key = theKeys[i];
        if (exports.GovernanceHistoryCodes[key] == code)
            return key;
    }
    return null;
};
exports.govHistStringFromCode = govHistStringFromCode;
exports.CONTRACT_ADDRESSES = {
    ethereum: {
        main: {
            FRAX: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
            FXS: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
            FXB: "",
            vesting: "NOT_DEPLOYED_YET",
            veFXS: "0xc8418aF6358FFddA74e09Ca9CC3Fe03Ca6aDC5b0",
            veFXS_whitelist_checker: "",
            veFXS_boost: "0x59e132164Ec2e48b0714EB6abdb10225Df44dA0e",
            veFXS_boost_delegation_proxy: "0xb4EB45443D525149410Ee69400c0956A7e89b82e"
        },
        canonicals: {
            FRAX: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
            FXS: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0"
        },
        weth: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        oracles: {},
        oracles_other: {
            combo_oracle: "0xbdCB57c9d35e8D41babCBcA67416ee6622274caf",
            combo_oracle_univ2_univ3: "0xD13c9a29eF6c5ADc7b43BBd5854B07bB9b099862",
        },
        retired_oracles: {
            FXS_USDC: "0x1F70Af31D041f9C183E23EC6809c04eb8CA006a4",
            FXS_WETH: "0x3B11DA52030420c663d263Ad4415a8A02E5f8cf8",
            FRAX_FXS: "0x4b85bD29f71b364ae6183C9721Ae5f596E7Bfd3d",
            FRAX_USDC: "0x2E45C589A9F301A2061f6567B9F432690368E3C6",
            FRAX_WETH: "0x9b1A56A2E7164c43384448d82253781c1318A77E",
            USDC_WETH: "0x69B9E922ecA72Cda644a8e32B8427000059388c6",
        },
        pid_related: {
            pid_controller: "0x6de667F424E2b1b8fD39fC2e1b9a14c0103E9879",
            reserve_tracker: "0x7215F84FE2f2F1726fFb42da923f3F04A72CF5E8"
        },
        investments: {
            "yearn_yUSDC_V2": "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9",
            "aave_aUSDC_Pool": "0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9",
            "aave_aUSDC_Token": "0xBcca60bB61934080951369a648Fb03DF4F96263C",
            "aave_aFRAX_Token": "0xd4937682df3C8aEF4FE912A96A74121C0829E664",
            'aave_incentives_controller': "0xd784927Ff2f95ba542BfC824c8a8a98F3495f6b5",
            "compound_cUSDC": "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
            "compound_controller": "0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B",
            "cream_crFRAX": "0xb092b4601850E23903A42EaCBc9D8A0EeC26A4d5",
            "fnx_FPT_FRAX": "0x39ad661bA8a7C9D3A7E4808fb9f9D5223E22F763",
            "fnx_FPT_B": "0x7E605Fb638983A448096D82fFD2958ba012F30Cd",
            'fnx_IntegratedStake': "0x23e54F9bBe26eD55F93F19541bC30AAc2D5569b2",
            'fnx_MinePool': "0x4e6005396F80a737cE80d50B2162C0a7296c9620",
            'fnx_TokenConverter': "0x955282b82440F8F69E901380BeF2b603Fba96F3b",
            'fnx_ManagerProxy': "0xa2904Fd151C9d9D634dFA8ECd856E6B9517F9785",
            'fnx_CFNX': "0x9d7beb4265817a4923FAD9Ca9EF8af138499615d",
        },
        collaterals: {
            DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            FEI: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
            GUSD: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
            LUSD: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
            sUSD: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
            USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            USDC_V2: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            USDP: "0x1456688345527bE1f37E9e627DA0837D6f08C925",
            USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
            wUST: "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
        },
        governance: "0xd74034C6109A23B6c7657144cAcBbBB82BDCB00E",
        bond_issuers: {
            issuer_v1: ""
        },
        pools: {
            USDC: "0x3C2982CA260e870eee70c423818010DfeF212659",
            USDC_V2: "0x1864Ca3d47AaB98Ee78D11fc9DCC5E7bADdA1c0d",
            USDT: "0x7d3FCd3825AE54E8E8FFD3d0ce95882330d54968",
            V3: "0x2fE065e6FFEf9ac95ab39E5042744d695F560729"
        },
        rari_pools: {
            "Tetranode's Locker (#6)": "0x1531C1a63A169aC75A2dAAe399080745fa51dE44",
            "ChainLinkGod's / Tetranode's Up Only Pool (#7)": "0x6313c160b329db59086df28ed2bf172a82f0d9d1",
            "Frax & Reflexer Stable Asset Pool (#9)": "0x0f43a7e3f7b529015B0517D0D9Aa9b95701fd2Cb",
            "Olympus Pool Party Frax (#18)": "0x3e5c122ffa75a9fe16ec0c69f7e9149203ea1a5d",
            "IndexCoop Pool (#19)": "0x64E6aF978138732aef99C0648c195B12A6bc2A38",
            "Harvest FARMstead (#24)": "0x0A6eAfaA84188A146749D7864bB20E63bD16ea2A",
            "Token Mass Injection Pool (#26)": "0x2e818c80844d35c8e1667ceca03f31074ef6bb46",
            "Stake DAO Pool (#27)": "0x9de558FCE4F289b305E38ABe2169b75C626c114e",
            "NFTX Pool (#31)": "0x1BA12ae1FCFadd08FA37Db849Ef4b6e11e435357",
            "Fraximalist Money Market (#36)": "0x5e116a4521c99324f344eb7c7bfe1f78e3226493"
        },
        uniswap_other: {
            router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
        },
        uniswap_v3: {
            UniswapV3Factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
            NonfungiblePositionManager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
            SwapRouter: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
        },
        pricing: {
            swap_to_price: "0xa61cBe7E326B13A8dbA11D00f42531BE704DF51B",
            frax_oracle_wrapper: "0x2A6ddD9401B14d0443d0738B8a78fd5B99829A80",
            fxs_oracle_wrapper: "0xeE0F15e5Ffc105EBb3d1368cf84F43b40caB3480",
            chainlink_eth_usd: "0xBa6C6EaC41a24F9D39032513f66D738B3559f15a",
            chainlink_fxs_usd: "0x679a15fe8B2108fdA30f292C92abCDE3a1246324"
        },
        bridges: {
            frax: {
                arbitrum: "0x183D0dC5867c01bFB1dbBc41d6a9d3dE6e044626",
                aurora: "0x23Ddd3e3692d1861Ed57EDE224608875809e127f",
                avalanche: "0x820A9eb227BF770A9dd28829380d53B76eAf1209",
                boba: "0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00",
                bsc: "0x533e3c0e6b48010873B947bddC4721b1bDFF9648",
                ethereum: "0x4f60a160D8C2DDdaAfe16FCC57566dB84D674BD6",
                fantom: "0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE",
                harmony: "0x2dCCDB493827E15a5dC8f8b72147E6c4A5620857",
                moonriver: "0x10c6b61DbF44a083Aec3780aCF769C77BE747E23",
                polygon: "0xA0c68C638235ee32657e8f720a23ceC1bFc77C77",
                solana: "0x3ee18B2214AFF97000D974cf647E7C347E8fa585"
            },
            fxs: {
                arbitrum: "0x183D0dC5867c01bFB1dbBc41d6a9d3dE6e044626",
                aurora: "0x23Ddd3e3692d1861Ed57EDE224608875809e127f",
                avalanche: "0x820A9eb227BF770A9dd28829380d53B76eAf1209",
                boba: "0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00",
                bsc: "0x533e3c0e6b48010873B947bddC4721b1bDFF9648",
                ethereum: "0x685b63CFE0179b3EFb70A01dCb1D648549AA192d",
                fantom: "0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE",
                harmony: "0x2dCCDB493827E15a5dC8f8b72147E6c4A5620857",
                moonriver: "0x10c6b61DbF44a083Aec3780aCF769C77BE747E23",
                polygon: "0xA0c68C638235ee32657e8f720a23ceC1bFc77C77",
                solana: "0x3ee18B2214AFF97000D974cf647E7C347E8fa585"
            },
            collateral: {
                arbitrum: "0xcEe284F754E854890e311e3280b767F80797180d",
                aurora: "0x23Ddd3e3692d1861Ed57EDE224608875809e127f",
                avalanche: "0xE78388b4CE79068e89Bf8aA7f218eF6b9AB0e9d0",
                boba: "0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00",
                bsc: "0x533e3c0e6b48010873B947bddC4721b1bDFF9648",
                fantom: "0xC564EE9f21Ed8A2d8E7e76c085740d5e4c5FaFbE",
                harmony: "0x2dCCDB493827E15a5dC8f8b72147E6c4A5620857",
                moonriver: "0x10c6b61DbF44a083Aec3780aCF769C77BE747E23",
                polygon: "0xA0c68C638235ee32657e8f720a23ceC1bFc77C77",
                solana: "0x3ee18B2214AFF97000D974cf647E7C347E8fa585"
            },
            liquidity_bridgers: {
                arbitrum: {
                    anySwap: "0xddf6b5B2BA110a0267BffB86AeAbFe2637cb8375"
                },
                aurora: {},
                avalanche: {
                    anySwap: "0xBA5478A712b5EA898AF03206ab4c7E0608C3e69D"
                },
                boba: {},
                bsc: {
                    anySwap: "0x4572B68296A23B4C66696FAd177c50CBc35c532F"
                },
                fantom: {
                    anySwap: "0x8575FFE80b94fe58c8e0c735E11658A760109f53"
                },
                harmony: {},
                moonriver: {
                    anySwap: "0xc7F48Fb6Dbb6F8A3Eed90553017cDf5725Dc44ac"
                },
                polygon: {
                    maticBridge: "0x6e1A844AFff1aa2a8ba3127dB83088e196187110"
                },
                solana: {
                    wormhole_v2: "0xF3a21b5d9E11eECA3a50BEb654276987164AbC8d"
                }
            }
        },
        misc: {
            timelock: "0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA",
            migration_helper: "0xe16723A08Ae054a8F20BDc0395389569011e78D6",
            mint_utilities: "0xE054C1ab5D548E0144ab3F89a8f5809137819906",
            staking_utilities: "0xE4de6E1DF1FE135D6462554d0Fd36A14d787f689",
            investor_amo_V1: "0xEE5825d5185a1D512706f9068E69146A54B6e076",
            investor_amo: "0xB8315Af919729c823B2d996B1A6DDE381E7444f1",
            lending_amo: "0x9507189f5B6D820cd93d970d67893006968825ef",
            curve_amo_V1: "0xbd061885260F176e05699fED9C5a4604fc7F2BDC",
            curve_amo_V2: "0xD103FEf74D05FbC20B5184FE85c7187735355DB3",
            curve_amo: "0x72170Cdc48C33a6AE6B3E83CD387ca3Fb9105da2",
            curve_amo_admin: "0x900909C07c2761d84C5d863FF5905102916DF69C",
            fxs_1559_amo: "0x9C6a04871D11b33645ab592f68C41bb2B41F51EE",
            fxs_1559_amo_v2: "0xC80C48862E4254F37047235298eDb6AA35717C24",
            fxs_1559_amo_v3: "0xb524622901b3f7b5DeA6501E9830700C847C7DC5",
            stakedao_amo: "0x375278D3C65f29C1A90E8550888f1439cFeFe465",
            ohm_amo: "0x5699d20732a2EFa9A895EF04bb210aa751C4dB96",
            ohm_amo_admin: "0xE53d45ABe10Ce20427D20c5a1b6360Fa5BA0cE0A",
            convex_amo: "0x49ee75278820f409ecd67063D8D717B38d66bd71",
            convex_amo_admin: "0xE53d45ABe10Ce20427D20c5a1b6360Fa5BA0cE0A",
            rari_amo: "0x96665d63c1B53f8335e3c9287Ee255f306C93c45",
            fxs_1559_amo_v2_admin: "0xCaa487D113ad1C34Ce128c4f3a2A437614C6a692",
            frax_gauge_v2: "0x72e158d38dbd50a483501c24f792bdaaa3e7d55c",
            crvFRAX_vault: "0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139",
            multisig: "0xFa27873EA2F0eA9DcD2052848C4A7F8ADE8a3936",
            vefxs_yield_distributor: "0x19a0a70a68fbC604Bf20A03b787df8f7AC1d50f0",
            vefxs_yield_distributor_v2: "0x62C4cf364078C98fA08AfDB4D3d8D87e780Ebd45",
            vefxs_yield_distributor_v3: "0xed2647Bbf875b2936AAF95a3F5bbc82819e3d3FE",
            vefxs_yield_distributor_v4: "0xc6764e58b36e26b08Fd1d2AeD4538c02171fA872",
            frax3crv_curve_rewards_distributor_eoa: "0x73f9f84b04584227b4f0baffd8b37d6d0c11a23c",
            frax3crv_curve_fxs_distributor: "0xBBbAf1adf4d39B2843928CCa1E65564e5ce99ccC",
            uniV2_to_uniV3_migrator_address: "0x7b50137E8996A1717a6D97a0527e4c5D2D133405",
            migration_bundle_utils: "0x239c957d42343B3d91FABc7c16E7F1e30Bc32E5B",
            bundle_utils: "0xD1a7b80a954e56bfd7bd889aF6e2BE8674719F5d",
            vefxs_smart_wallet_checker: "0x53c13BA8834a1567474b19822aAD85c6F90D9f9F",
            frax_gauge_controller: "0x44ade9AA409B0C29463fF7fcf07c9d3c939166ce",
            frax_gauge_rewards_distributor: "0x278dC748edA1d8eFEf1aDFB518542612b49Fcd34",
            uniV3_liquidity_amo: "0x3814307b86b54b1d8e7B2Ac34662De9125F8f4E6",
            amo_minter_old: "0x36a0B6a5F7b318A2B4Af75FFFb1b51a5C78dEB8C",
            amo_minter: "0xcf37B62109b537fa0Cb9A90Af4CA72f6fb85E241",
            curve_metapool_locker: "0x70F55767B11c047C8397285E852919F5f6c8DC60",
            curve_metapool_locker_2: "0xE4BD0461AE7fdc76c61CE286a80c9B55d83B204a",
            aave_amo: "0x66635DC1EdEfF19e839f152a67278151Aa6e1B61",
            cvx_locker_amo: "0x7038C406e7e2C9F81571557190d26704bB39B8f3",
            token_tracker_amo: "0x3F702a8F6c9f9F7ABdfEA67f89d33F18e0368600",
            token_tracker_v2: "0x37336AD1F3A145C710247E6a14C9AcC7f34D09eE",
            manual_token_tracker_amo: "0xEc8672dd770D59FaD9a811591a5Edd40e8F6A413",
            msig_helper: "0x977eaDb6fa9b8E1a2A950CcDE1A75a7b527a8cBB",
            mim_convex_amo: "0x31183a2CCe8d1BFBBFE140Ea1A1264A454Fc821E",
            crosschain_liquidity_tracker: "",
        },
        libraries: {
            UniswapV2OracleLibrary: "0xeB85Dd2374a44F80342AcF8010d585Bda32B77a0",
            UniswapV2Library: "0xC805D4126C3Ac9d0AD7bb94c3D5cD72E3CbCd6f6",
            FraxPoolLibrary: "0xA11B9C88e4Bf89aD9A70f5d408ffB5A6d5FEb6A4",
            FraxPoolLibrary_V2: "0xe1C3218134E7c69f3443bbd96A5851d193224f78",
        },
        reward_tokens: {
            aave: "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
            anyswap: "0xf99d58e463A2E07e5692127302C20A191861b4D6",
            comp: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
            curve_dao: "0xd533a949740bb3306d119cc777fa900ba034cd52",
            cvx: "0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b",
            cvxCRV: "0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7",
            fnx: "0xeF9Cd7882c067686691B6fF49e650b43AFBBCC6B",
            iq: "0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9",
            ohm: "0x383518188C0C6d7730D91b2c03a03C837814a899",
            sdt: "0x73968b9a57c6e53d41345fd57a6e6ae27d6cdb2f",
            stk_aave: "0x4da27a545c0c5b758a6ba100e3a049001de870f5",
            sushi: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
            tribe: "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
            weth: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
        },
        bearer_tokens: {
            "3CRV_ERC20": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
            "3CRV_Pool": "0xbEbc44782C7dB0a1A60Cb6fe97d0b483032FF1C7",
            aFRAX: "0xd4937682df3C8aEF4FE912A96A74121C0829E664",
            aUSDC: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
            cAAVE: "0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c",
            cUSDC: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
            cvxgusd3CRV_free: "0x15c2471ef46Fa721990730cfa526BcFb45574576",
            "FRAX3CRV-f": "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
            "fUSDC-18": "0x6f95d4d251053483f41c8718C30F4F3C404A8cf2",
            gusd3CRV: "0xd2967f45c4f384deea880f807be904762a3dea07",
            saddleD4: "0xd48cF4D7FB0824CC8bAe055dF3092584d0a1726A",
            saddleD4_Pool: "0xC69DDcd4DFeF25D8a793241834d4cc4b3668EAD6",
            "sdFRAX3CRV-f": "0x5af15DA84A4a6EDf2d9FA6720De921E1026E37b7",
            tFXS: "0xadf15ec41689fc5b6dca0db7c53c9bfe7981e655",
            yvUSDC: "0xa354f35829ae975e850e23e9615b11da1b3dc4de",
        },
        saddle_pools: {
            'Saddle alUSD/FEI/FRAX/LUSD': "0xC69DDcd4DFeF25D8a793241834d4cc4b3668EAD6"
        },
        uni_v3_pools: {
            NOTE: "Call getPool here (Factory) to find it: 0x1F98431c8aD98523631AE4a59f267346ea31F984",
            NOTE2: "Do hardhat verify with the v1.0.0 uniswap-v3-core fork",
            'Uniswap V3 FRAX/agEUR': "0x8ce5796ef6B0c5918025bCf4f9CA908201B030b3",
            'Uniswap V3 FRAX/DAI': "0x97e7d56A0408570bA1a7852De36350f7713906ec",
            'Uniswap V3 FRAX/USDC': "0xc63B0708E2F7e69CB8A1df0e1389A98C35A76D52",
            'Uniswap V3 FRAX/WETH': "0x92c7b5ce4cb0e5483f3365c1449f21578ee9f21a",
        },
        investor_custodian: "0x5180db0237291A6449DdA9ed33aD90a38787621c",
        multisigs: {
            "Community": "0x63278bF9AcdFC9fA65CFa2940b89A34ADfbCb4A1",
            "Team": "0x8D4392F55bC76A046E443eb3bab99887F4366BB0",
            "Investors": "0xa95f86fE0409030136D6b82491822B3D70F890b3",
            "Treasury": "0x9AA7Db8E488eE3ffCC9CdFD4f2EaECC8ABeDCB48",
            "Advisors": "0x874a873e4891fB760EdFDae0D26cA2c00922C404",
            "Comptrollers": "0xB1748C79709f4Ba2Dd82834B8c82D4a505003f27",
        },
        pair_tokens: {
            "Gelato Uniswap FRAX/DAI": "0xb1Cfdc7370550f5e421E1bf0BF3CADFaDF3C4141",
            'Uniswap FRAX/WETH': "0xFD0A40Bc83C5faE4203DEc7e5929B446b07d1C76",
            'Uniswap FRAX/USDC': "0x97C4adc5d28A86f9470C70DD91Dc6CC2f20d2d4D",
            'Uniswap V3 FRAX/agEUR': "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
            'Uniswap V3 FRAX/DAI': "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
            'Uniswap V3 FRAX/USDC': "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
            'Uniswap V3 FRAX/WETH': "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
            'Uniswap FRAX/FXS': "0xE1573B9D29e2183B1AF0e743Dc2754979A40D237",
            'Uniswap FXS/WETH': "0xecBa967D84fCF0405F6b32Bc45F4d36BfDBB2E81",
            'Uniswap FRAX/IQ': "0xd6c783b257e662ca949b441a4fcb08a53fc49914",
            'Uniswap FRAX/OHM': "0x2dce0dda1c2f98e0f171de8333c3c6fe1bbf4877",
            'StakeDAO sdETH-FraxPut': "0x839A989bE40f2D60f00beEB648903732c041CBd7",
            'StakeDAO sdFRAX3CRV-f': "0x5af15DA84A4a6EDf2d9FA6720De921E1026E37b7",
            'Sushi FRAX/SUSHI': "0xe06F8d30AC334c857Fc8c380C85969C150f38A6A",
            'Curve d3pool': "0xBaaa1F5DbA42C3389bDbc2c9D2dE134F5cD0Dc89",
            'Curve FRAX3CRV-f-2': "0xd632f22692fac7611d2aa1c0d552930d43caed3b",
            'Curve MIM3CRV': "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
            'Saddle alUSD/FEI/FRAX/LUSD': "0xd48cF4D7FB0824CC8bAe055dF3092584d0a1726A"
        },
        staking_contracts: {
            "Gelato Uniswap FRAX/DAI": "0xcdfc491804A420b677f8e788B5157856910E2F6f",
            'Uniswap FRAX/WETH': "0xD875628B942f8970De3CcEaf6417005F68540d4f",
            'Uniswap FRAX/USDC': "0xa29367a3f057F3191b62bd4055845a33411892b6",
            'Uniswap V3 FRAX/agEUR': "0xf8caEd1943B15B877D7105B9906a618c154f69E8",
            'Uniswap V3 FRAX/DAI': "0xF22471AC2156B489CC4a59092c56713F813ff53e",
            'Uniswap V3 FRAX/USDC': "0x3EF26504dbc8Dd7B7aa3E97Bc9f3813a9FC0B4B0",
            'Uniswap V3 FRAX/WETH': "",
            'Uniswap FRAX/FXS': "0xda2c338350a0E59Ce71CDCED9679A3A590Dd9BEC",
            'Uniswap FXS/WETH': "0xDc65f3514725206Dd83A8843AAE2aC3D99771C88",
            'Uniswap FRAX/IQ': "0xF37057823910653a554d996B49E3399DC87fAE1b",
            'Uniswap FRAX/OHM': "0xfC77A420f56Dec53e3b91D7FC936902e132335FF",
            'StakeDAO sdETH-FraxPut': "0x0A53544b2194Dd8Ebc62c779043fc0624705BB56",
            'StakeDAO sdFRAX3CRV-f': "0xEB81b86248d3C2b618CcB071ADB122109DA96Da2",
            'Sushi FRAX/SUSHI': "0xb4Ab0dE6581FBD3A02cF8f9f265138691c3A7d5D",
            'Sushi FXS/WETH': "",
            'Saddle alUSD/FEI/FRAX/LUSD': "0x0639076265e9f88542C91DCdEda65127974A5CA5"
        },
        external_farm_tokens: {
            "1Swap FRAX/1S3P": "",
            "Aave FRAX Lending": "",
            "APY.Finance Curve FRAX": "",
            "Axial AC4D TSD/MIM/FRAX/DAI.e": "0x4da067E13974A4d32D342d86fBBbE4fb0f95f382",
            "Beefy Finance [Avalanche]": "",
            "Beefy Finance [BSC]": "",
            "Beefy Finance [Fantom]": "",
            "Beefy Finance [Harmony]": "",
            "Beefy Finance [Polygon]": "",
            "Beefy Finance [Moonriver]": "",
            "Convex FRAX3CRV-f": "",
            "Convex d3pool": "",
            "Curve FRAX3CRV-f-2": "",
            "Hundred FRAX Lending [Arbitrum]": "0xb1c4426C86082D91a6c097fC588E5D5d8dD1f5a8",
            "Hundred FRAX Lending [Fantom]": "0xb4300e088a3AE4e624EE5C71Bc1822F68BB5f2bc",
            "Lobis FXS Bonds": "",
            "Market.xyz FRAX Lending": "",
            "OlympusDAO FRAX Bonds": "",
            "Olympus Pro FRAX/WETH SLP": "",
            "Pangolin FRAX/AVAX": "0x55152E05202AE58fDab26b20c6Fd762F5BCA797c",
            "Rari FRAX Lending": "",
            "Saber wFRAX/USDC": "",
            "Scream FRAX Lending": "",
            "Solarbeam FRAX/aROME": "",
            "Solarbeam FRAX/MOVR": "",
            "SpiritSwap FRAX/FTM": "0x0eC0E1629E776272FA3E55548D4A656BE0EEdcF4",
            "SpiritSwap/Ola FRAX Lending": "0x88c05534566f3bd6b6d704c9259408ff1f1a3f00",
            "Sushi FRAX/ETH": "0xeC8C342bc3E07F05B9a782bc34e7f04fB9B44502",
            "Sushi FRAX/ETH [Harmony]": "",
            "Sushi FRAX/FXS [Polygon]": "0xd53a56ae0f48c9a03660cd36c2e4ae20493a1eca",
            "Sushi FRAX/USDC [Moonriver]": "",
            "Tokemak FXS Staking": "",
            "Vesper Orbit FRAX": "0xc14900dFB1Aa54e7674e1eCf9ce02b3b35157ba5",
            "Yearn crvFRAX Vault (V3)": "",
        },
        middleman_gauges: {
            'mStable FRAX/mUSD': "0x3e14f6EEDCC5Bc1d0Fc7B20B45eAE7B1F74a6AeC",
            'Sushi FRAX/FXS': "",
            'SpiritSwap FRAX/FXS': "0xebF993690F65B23862E10F489656529ac06A27B8"
        }
    },
    arbitrum: {
        chain_id: 42161,
        main: {
            FRAX: "0x667fd83e24ca1d935d36717d305d54fa0cac991c",
            FXS: "0xc19281f22a075e0f10351cd5d6ea9f0ac63d4327",
        },
        canonicals: {
            FRAX: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
            FXS: "0x9d2F299715D94d8A7E6F5eaa8E654E8c74a988A7"
        },
        bridge_tokens: {
            anyFRAX: "0x667fd83e24ca1d935d36717d305d54fa0cac991c",
            anyFXS: "0xc19281f22a075e0f10351cd5d6ea9f0ac63d4327",
            synFRAX: "0x85662fd123280827e11C59973Ac9fcBE838dC3B4"
        },
        collaterals: {
            arbiUSDC: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
            arbiUSDT: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9"
        },
        bridges: {
            anyFRAX: "0x667fd83e24ca1d935d36717d305d54fa0cac991c",
            anyFXS: "0xc19281f22a075e0f10351cd5d6ea9f0ac63d4327",
            arbiUSDC: "0x5288c571Fd7aD117beA99bF60FE0846C4E84F933"
        },
        bridge_backers: {
            anySwap: "0xddf6b5B2BA110a0267BffB86AeAbFe2637cb8375"
        },
        oracles: {
            single_assets: {
                FXS: "0xdb9e3464a27fd3A36C0DedD8A1841dEC7cd0151D"
            },
            cross_chain_oracle: "0xe5fd90e47EF7CbBD92139a22a7041071E2B9a474"
        },
        oracles_other: {
            combo_oracle: "0xd85884908F6477c90147936AAa130Aa3B284Efd6",
            combo_oracle_univ2_univ3: "0x37F7865568d9cb30791583cA404E0B23eF05CF21",
        },
        uniswap: {
            v2_router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
            v3_factory: "0x1F98431c8aD98523631AE4a59f267346ea31F984",
            v3_nft_manager: "0xC36442b4a4522E871399CD717aBDD847Ab11FE88",
            v3_router: "0xE592427A0AEce92De3Edee1F18E0157C05861564",
        },
        amos: {
            curve: "0x62544Bd5da87F51934C09cD6464757ACecaf8e49",
            hundred_lending: "0xE19671022a3972084bF0E842fCEC6043dDda25e3",
            sushiswap_liquidity: "0x5D83f657959F916D72a33DDF53BFb7EcD7Ef1507",
        },
        reward_tokens: {
            weth: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
        },
        bearer_tokens: {
            FRAX2pool: "0xf07d553B195080F84F582e88ecdD54bAa122b279",
            hFRAX: "0xb1c4426C86082D91a6c097fC588E5D5d8dD1f5a8",
        },
        pair_tokens: {
            "Sushi canFRAX/canFXS": "0xfb5DB4f55Bb97A608f6EE50864104457FA04DA4f",
            "Sushi canFRAX/WETH": "0xaebfda10b251d650126830b952ee74b4a599f71f",
            "Sushi canFRAX/arbiUSDC": "0x8286a9881CEe20E71ac1215f8D39De6853Dd9A8F",
            "Sushi canFXS/arbiUSDC": "0xC1C8136A948e6332db36E90aDD6fb004871176A2",
        },
        staking_contracts: {}
    },
    aurora: {
        chain_id: 1313161554,
        main: {
            FRAX: "",
            FXS: "",
        },
        canonicals: {
            FRAX: "",
            FXS: ""
        },
        bridge_tokens: {
            rnbwFRAX: "",
            rnbwFXS: "",
            rnbwUSDC: "",
        },
        collaterals: {},
        bridges: {},
        bridge_backers: {},
        oracles: {
            single_assets: {
                FRAX: "",
                FXS: ""
            },
            cross_chain_oracle: ""
        },
        oracles_other: {
            combo_oracle: "",
            combo_oracle_univ2_univ3: "",
        },
        uniswap: {
            v2_router: "",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        amos: {},
        reward_tokens: {},
        pair_tokens: {},
        staking_contracts: {}
    },
    avalanche: {
        chain_id: 43114,
        main: {
            FRAX: "0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98",
            FXS: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
        },
        canonicals: {
            FRAX: "0xD24C2Ad096400B6FBcd2ad8B24E7acBc21A1da64",
            FXS: "0x214DB107654fF987AD859F34125307783fC8e387",
        },
        bridge_tokens: {
            anyFRAX: "0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98",
            anyFXS: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
            synFRAX: "0xcc5672600B948dF4b665d9979357bEF3af56B300"
        },
        collaterals: {
            DAI: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
            MIM: "0x130966628846BFd36ff31a822705796e8cb8C18D",
            TSD: "0x4fbf0429599460D327BD5F55625E30E4fC066095",
            "USDC.e": "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664"
        },
        bridges: {
            anyFRAX: "0xDC42728B0eA910349ed3c6e1c9Dc06b5FB591f98",
            anyFXS: "0xD67de0e0a0Fd7b15dC8348Bb9BE742F3c5850454",
            "USDC.e": "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664"
        },
        bridge_backers: {
            anySwap: "0xBA5478A712b5EA898AF03206ab4c7E0608C3e69D"
        },
        oracles: {
            single_assets: {
                FRAX: "0xbcD78D895c01d206e692B56Eb0415f6ADF2a8Dc3",
                FXS: "0x1c16d93514bE03D433aF16Bc05821D89118fb8A8"
            },
            cross_chain_oracle: "0x4E8211823087Bd498277E10178fB0FE5C0e24d87"
        },
        oracles_other: {
            combo_oracle: "0x06EC24263cd9c626e34b1f05E1e07a6aCa5fBe67",
            combo_oracle_univ2_univ3: "0xdB016dF0FCeCEFbef7D3Ff0a853265d04a6F5B30",
        },
        uniswap: {
            v2_router: "0xE54Ca86531e17Ef3616d22Ca28b0D458b6C89106",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        amos: {
            axial: "0x81C9e3327e620e74e41cF14b2FD7319084E6a246",
            pangolin_liquidity: "0x4c1D334d18b8EDD15d45E241aa165aB835c5Fe5e",
        },
        reward_tokens: {
            snob: "0xC38f41A296A4493Ff429F1238e030924A1542e50",
            wavax: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7"
        },
        bearer_tokens: {
            "Axial AC4D TSD/MIM/FRAX/DAI.e": "0x4da067E13974A4d32D342d86fBBbE4fb0f95f382",
        },
        cross_chain_rewarders: {},
        misc_pools: {
            snowball_s4d_swapflashloan: "0xA0bE4f05E37617138Ec212D4fB0cD2A8778a535F"
        },
        pair_tokens: {
            "Pangolin canFRAX/canFXS": "0xe0CC7ed0666B29e60a21aF8636bBC69b21eDc434",
            "Pangolin canFRAX/WAVAX": "0x0ce543c0f81ac9aaa665ccaae5eec70861a6b559",
            "Pangolin canFRAX/USDC.e": "0x0c8249757b8d66cB2b6155281A5e4f8F53C94c05",
            "Pangolin canFXS/USDC.e": "0x8614F7ca1f4b08Ef2C158a3027EA55fAA8384aC8",
            "Pangolin FRAX/AVAX": "0x0ce543c0f81ac9aaa665ccaae5eec70861a6b559",
            "Pangolin FXS/AVAX": "0xd538a741c6782cf4e21e951cda39327c50c51087",
        },
        staking_contracts: {
            "Pangolin FRAX/AVAX": "0x1f806f7C8dED893fd3caE279191ad7Aa3798E928",
        }
    },
    boba: {
        chain_id: 288,
        main: {
            FRAX: "0xAb2AF3A98D229b7dAeD7305Bb88aD0BA2c42f9cA",
            FXS: "0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00",
        },
        canonicals: {
            FRAX: "0x7562F525106F5d54E891e005867Bf489B5988CD9",
            FXS: "0xae8871A949F255B12704A98c00C2293354a36013"
        },
        bridge_tokens: {
            anyFRAX: "0x0dCb0CB0120d355CdE1ce56040be57Add0185BAa",
            anyFXS: "0xABd380327Fe66724FFDa91A87c772FB8D00bE488",
            bobaFRAX: "0xAb2AF3A98D229b7dAeD7305Bb88aD0BA2c42f9cA",
            bobaFXS: "0xdc1664458d2f0B6090bEa60A8793A4E66c2F1c00",
        },
        collaterals: {
            bobaUSDC: "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc"
        },
        bridges: {
            anyFRAX: "0x0dCb0CB0120d355CdE1ce56040be57Add0185BAa",
            anyFXS: "0xABd380327Fe66724FFDa91A87c772FB8D00bE488",
            bobaFRAX: "0x3256bd6fc8b5fa48db95914d0df314465f3f7879",
            bobaFXS: "0x3256bd6fc8b5fa48db95914d0df314465f3f7879",
            bobaUSDC: "0x3256bd6fc8b5fa48db95914d0df314465f3f7879",
        },
        bridge_backers: {
            bobaGateway: "0x4828D4496Ff8dA2f5c1E7217Dc282b5C69B83263",
        },
        oracles: {
            single_assets: {
                FRAX: "",
                FXS: ""
            },
            cross_chain_oracle: "0xA8303990D90919da61CbAcACcaBb0D1b2EFe75a1"
        },
        oracles_other: {
            combo_oracle: "",
            combo_oracle_univ2_univ3: "",
        },
        uniswap: {
            v2_router: "",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        amos: {},
        reward_tokens: {},
        pair_tokens: {
            "OolongSwap canFRAX/canFXS": "0x32ae2FB6312A02ca8eEF2A183514aAc11Ee6F195",
            "OolongSwap canFRAX/WETH": "0xB0BC608946EbB5D0cdF9e54e387FA20656577dd6",
            "OolongSwap canFRAX/USDC": "0x0355206EF12935669dD7Ce793B642A0488C67e87",
        },
        staking_contracts: {}
    },
    bsc: {
        chain_id: 56,
        main: {
            FRAX: "0x29cED01C447166958605519F10DcF8b0255fB379",
            FXS: "0xDE2F075f6F14EB9D96755b24E416A53E736Ca363",
        },
        canonicals: {
            FRAX: "0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40",
            FXS: "0xe48A3d7d0Bc88d552f730B62c006bC925eadB9eE"
        },
        bridge_tokens: {
            anyFRAX_V5: "0xdd03dbed9abdb125f1bdd465caadbefdff4f7524",
            anyFRAX: "0x29cED01C447166958605519F10DcF8b0255fB379",
            anyFXS: "0x70523d78a74f5533768075283bcb473ca01a8a4b",
            binFXS: "0xDE2F075f6F14EB9D96755b24E416A53E736Ca363",
        },
        collaterals: {
            BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
            USDC: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"
        },
        bridges: {
            anyFRAX_V5: "0xdd03dbed9abdb125f1bdd465caadbefdff4f7524",
            anyFRAX: "0x29cED01C447166958605519F10DcF8b0255fB379",
            anyFXS: "0x70523d78a74f5533768075283bcb473ca01a8a4b",
        },
        bridge_backers: {
            anySwap: "0x4572B68296A23B4C66696FAd177c50CBc35c532F"
        },
        oracles: {
            single_assets: {
                FRAX: "0x6A9Eda6a49FfbC919FD193b04422D66Df40f8350",
                FXS: "0x8BED357875b881290004fFA49561e8833d288A90"
            },
            cross_chain_oracle: "0xdB7Ee361784756947C529BFA8f54c7e5D8B43F3e"
        },
        oracles_other: {
            combo_oracle: "0x86eB739D27A5cCfBE6d41a38FBd8B6923fAe3213",
            combo_oracle_univ2_univ3: "0xEC0C58b7d8d19858d4a0099a4850B1cC61EBa0F3",
        },
        uniswap: {
            v2_router: "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        amos: {
            apeswap_liquidity: "0xD900397B25Cb25043C9d850c3ECfaEe1884de470",
            planet_finance_lending: ""
        },
        reward_tokens: {
            BANANA: "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
            CAKE: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
            IF: "0xB0e1fc65C1a741b4662B813eB787d369b8614Af1",
            WBNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        },
        pair_tokens: {
            'Impossible FRAX/IF': "0x5316e743816223b335764738021f3df7a17a25da",
            'Impossible FRAX/FXS': "0x13d80efd9f4ec6ef7279fe10124cebf58c0d07c2",
            "ApeSwap canFRAX/canFXS": "0x489c8fF79245f14AEEE9520d28209844790cB979",
            "ApeSwap canFRAX/WBNB": "0x16BDb03E6074759943149eBB1526DDfD1AA5fc56",
            "ApeSwap canFRAX/BUSD": "0x5292600758A090490D34367d4864ed6291D254fe",
            "ApeSwap canFRAX/USDC": "0x885BE9bCbCdcB70c59F56A78ae64A820e0448589",
            "ApeSwap canFXS/USDC": "0x84f2781E4E60f97D2963260A7b20D883F04F0d20",
            "ApeSwap canFXS/WBNB": "0x8210D92a8951d50de3D46AC0ee39cb5E2C14e18A",
        },
        staking_contracts: {
            "ApeSwap canFRAX/BUSD": "0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9",
            "ApeSwap canFXS/WBNB": "0x5c8D727b265DBAfaba67E050f2f739cAeEB4A6F9",
            'Impossible FRAX/IF': "0x5e1F728C0123f7e8B237F61D0105bf9CBd8867B5",
            'Impossible FRAX/FXS': "0x5BE579e5fFF39a958E6269C6D011cd5f21e2cc32",
        }
    },
    fantom: {
        chain_id: 250,
        main: {
            FRAX: "0xaf319E5789945197e365E7f7fbFc56B130523B33",
            FXS: "0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
        },
        canonicals: {
            FRAX: "0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355",
            FXS: "0x7d016eec9c25232b01F23EF992D98ca97fc2AF5a",
        },
        bridge_tokens: {
            anyFRAX_V5: "0xBDba76fA2659c33ffCc2B0bc134c3A2c8a3Aa94d",
            anyFRAX: "0xaf319E5789945197e365E7f7fbFc56B130523B33",
            anyFXS_V5: "0x410A7bf502414B2f0cAAd204de5782077AC6478F",
            anyFXS: "0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
            anyUSDC: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
            synFRAX: "0x1852F70512298d56e9c8FDd905e02581E04ddb2a"
        },
        collaterals: {
            DAI: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
            anyUSDC: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"
        },
        bridges: {
            anyFRAX_V5: "0xBDba76fA2659c33ffCc2B0bc134c3A2c8a3Aa94d",
            anyFRAX: "0xaf319E5789945197e365E7f7fbFc56B130523B33",
            anyFXS_V5: "0x410A7bf502414B2f0cAAd204de5782077AC6478F",
            anyFXS: "0x82F8Cb20c14F134fe6Ebf7aC3B903B2117aAfa62",
            anyUSDC: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"
        },
        bridge_backers: {
            anySwap: "0x8575FFE80b94fe58c8e0c735E11658A760109f53"
        },
        oracles: {
            single_assets: {
                FXS: "0x2C37fb628b35dfdFD515d41B0cAAe11B542773C3"
            },
            cross_chain_oracle: "0xD41c352bcF599C4C3C7b516eA005ADb2dB219f2c"
        },
        oracles_other: {
            combo_oracle: "0xde606CB6Ff5d897Ad8396C6fd9C830D1B81Aca13",
            combo_oracle_univ2_univ3: "0x4aF1C4dFe82C20481EA07755b200c29dD285E175",
        },
        uniswap: {
            v2_router: "0x16327E3FbDaCA3bcF7E38F5Af2599D2DDc33aE52",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        amos: {
            curve: "0x442A3c0B86981e33b28011428d6A752eD983b81a",
            scream: "0x51E6D09d5A1EcF8BE035BBCa82F77BfeC3c7672A",
            spirit_ola_lending: "0x8dbc48743a05A6e615D9C39aEBf8C2b157aa31eA",
            spiritswap_liquidity: "0x48F0856e0E2D06fBCed5FDA10DD69092a500646B",
        },
        reward_tokens: {
            curve: "0x442A3c0B86981e33b28011428d6A752eD983b81a",
            scream: "0xe0654C8e6fd4D733349ac7E09f6f23DA256bF475",
            xscream: "0xe3D17C7e840ec140a7A51ACA351a482231760824",
            spirit: "0x5Cc61A78F164885776AA610fb0FE1257df78E59B",
            inspirit: "0x2FBFf41a9efAEAE77538bd63f1ea489494acdc08",
            wftm: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"
        },
        bearer_tokens: {
            FRAX2pool: "0x7a656B342E14F745e2B164890E88017e27AE7320",
            oFRAX: "0x88c05534566f3bD6b6D704c9259408fF1F1a3F00",
            scFRAX: "0x4E6854EA84884330207fB557D1555961D85Fc17E"
        },
        cross_chain_rewarders: {
            "SpiritSwap FRAX/FXS": "0xebF993690F65B23862E10F489656529ac06A27B8"
        },
        pair_tokens: {
            "SpiritSwap canFRAX/canFXS": "0x7a2aD237e389De505DE7a89768143337E516C6Ce",
            "SpiritSwap canFRAX/FTM": "0x7ed0cddb9bb6c6dfea6fb63e117c8305479b8d7d",
            "SpiritSwap canFRAX/anyUSDC": "0x1478aec7896e40ae5fb858c77d389f0b3e6cbc5d",
            "SpiritSwap canFXS/anyUSDC": "0xb269a9969a437e778a8bfdb48a720ad366742554",
            "SpiritSwap FRAX/FXS": "0x100FcF27C87D1cc7b8D6c28b69b84A359e4fd377"
        },
        staking_contracts: {
            "SpiritSwap FRAX/FXS": "0x21cE9F4bCe3Ec48f34cE9073a5102bEEd965f381"
        },
    },
    harmony: {
        chain_id: 1666600000,
        main: {
            FRAX: "0xeb6c08ccb4421b6088e581ce04fcfbed15893ac3",
            FXS: "0x775d7816afbef935ea9c21a3ac9972f269a39004",
        },
        canonicals: {
            FRAX: "0xFa7191D292d5633f702B0bd7E3E3BcCC0e633200",
            FXS: "0x0767D8E1b05eFA8d6A301a65b324B6b66A1CC14c",
        },
        bridge_tokens: {
            "1FRAX": "0xeb6c08ccb4421b6088e581ce04fcfbed15893ac3",
            "1FXS": "0x775d7816afbef935ea9c21a3ac9972f269a39004",
        },
        collaterals: {
            "1USDC": "0x985458e523db3d53125813ed68c274899e9dfab4"
        },
        bridges: {
            "1FRAX": "0x2fbbcef71544c461edfc311f42e3583d5f9675d1",
            "1FXS": "0x2fbbcef71544c461edfc311f42e3583d5f9675d1",
            "1USDC": "0x2fbbcef71544c461edfc311f42e3583d5f9675d1"
        },
        bridge_backers: {
            harmony_bridge: "0xF3A60f85CB6C560188A434e8F2a134f3E967d8b8"
        },
        oracles: {
            single_assets: {},
            cross_chain_oracle: "0x564C2244eE788054570386294A920133E0605d02"
        },
        oracles_other: {
            combo_oracle: "",
            combo_oracle_univ2_univ3: "",
        },
        uniswap: {
            v2_router: "",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        reward_tokens: {
            sushi: "0xbec775cb42abfa4288de81f387a9b1a3c4bc552a",
            wone: "0xcf664087a5bb0237a0bad6742852ec6c8d69a27a"
        },
        cross_chain_rewarders: {},
        pair_tokens: {
            "Sushi FRAX/FXS [Harmony]": "0x944e4e8bbd2877678a0c8ffe3dd82d7ecee72f4f",
            "Sushi canFRAX/canFXS": "0x9eee8923c021c6d40e8643b1abc2ec316602cecc",
            "Sushi canFRAX/1USDC": "0x29fc6e830ca8586a68dff325f6d2349fb58be951",
            "Sushi canFXS/1USDC": "0x08a96238149a0baf6afafe7af57c2359c9bb8a73",
        },
        staking_contracts: {
            "Sushi FRAX/FXS [Harmony]": ""
        }
    },
    moonriver: {
        chain_id: 1285,
        main: {
            FRAX: "0x965f84D915a9eFa2dD81b653e3AE736555d945f4",
            FXS: "0x338726dd694dB9e2230eC2bB8624a2d7F566C96d",
        },
        canonicals: {
            FRAX: "0x1A93B23281CC1CDE4C4741353F3064709A16197d",
            FXS: "0x6f1D1Ee50846Fcbc3de91723E61cb68CFa6D0E98"
        },
        bridge_tokens: {
            anyFRAX: "0x965f84D915a9eFa2dD81b653e3AE736555d945f4",
            anyFXS: "0x338726dd694dB9e2230eC2bB8624a2d7F566C96d",
            synFRAX: "0xE96AC70907ffF3Efee79f502C985A7A21Bce407d"
        },
        collaterals: {
            anyUSDC: "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
            USDT: "0xB44a9B6905aF7c801311e8F4E76932ee959c663C"
        },
        bridges: {
            anyFRAX: "0x10c6b61DbF44a083Aec3780aCF769C77BE747E23",
            anyFXS: "0x10c6b61DbF44a083Aec3780aCF769C77BE747E23",
            anyUSDC: "0x10c6b61DbF44a083Aec3780aCF769C77BE747E23"
        },
        bridge_backers: {
            anySwap: "0xc7F48Fb6Dbb6F8A3Eed90553017cDf5725Dc44ac"
        },
        oracles: {
            single_assets: {
                FXS: "0x1BeF261C4718D0dcCBA707bF191B821067231a53"
            },
            cross_chain_oracle: "0xBCe6f81b8D154B8DF09D287d05826F2B34b71bE4"
        },
        oracles_other: {
            combo_oracle: "0xAB3d2a00c6FaCB1cdB3f39Aa9E6519e808808F41",
            combo_oracle_univ2_univ3: "0x02d03DA641DD18FD9A0624CB2b4377e6Ebedee83",
        },
        uniswap: {
            v2_router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        multisigs: {
            "Comptrollers": "0x2bBbE751E8C36CD6c92767776067f8Dd3A21941f",
        },
        amos: {
            one_to_one_amm: "0x915BCaA2D1DE2a65aeeF66F4dDf20E3C48B01705",
            sushiswap_liquidity: "0xB63E6D5143bba8F2CEe95308c3CE4791B4d280f9"
        },
        reward_tokens: {
            wmovr: "0x98878B06940aE243284CA214f92Bb71a2b032B8A"
        },
        pair_tokens: {
            "Solarbeam FRAX/aROME": "0xcf06cFB361615C49403B45a5E56E3B7da3462EEA",
            "Solarbeam FRAX/MOVR": "0x2cc54b4A3878e36E1C754871438113C1117a3ad7",
            "Sushi FRAX/USDC [Moonriver]": "0x310C4d18640aF4878567c4A31cB9cBde7Cd234A3",
            "Sushi canFRAX/canFXS": "0xC5147A6E773343aFE527249a26EF16AFc6a0013F",
            "Sushi canFRAX/anyUSDC": "0x310C4d18640aF4878567c4A31cB9cBde7Cd234A3",
            "Sushi canFRAX/WMOVR": "0x756057872D1Ad41C703B68e12701D27874fbe533",
            "Sushi canFXS/anyUSDC": "0xc0EAB66DaDC825c95cA1951A2B02BC56073Fc7B2",
        },
        staking_contracts: {}
    },
    polygon: {
        chain_id: 137,
        main: {
            FRAX: "0x104592a158490a9228070E0A8e5343B499e125D0",
            FXS: "0x3e121107F6F22DA4911079845a470757aF4e1A1b",
        },
        canonicals: {
            FRAX: "0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89",
            FXS: "0x1a3acf6D19267E2d3e7f898f42803e90C9219062",
        },
        bridge_tokens: {
            anyFRAX: "0xfE952465773bE3802eAc343C89aD351C77c00ab1",
            polyFRAX: "0x104592a158490a9228070E0A8e5343B499e125D0",
            anyFXS: "0x0452DD4d9B5b0Be57b9E98b825051833f20271ac",
            polyFXS: "0x3e121107F6F22DA4911079845a470757aF4e1A1b",
            synFRAX: "0x48A34796653aFdAA1647986b33544C911578e767"
        },
        collaterals: {
            polyDAI: "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            polyUSDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
            polyUSDT: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
        },
        bridges: {
            anyFRAX: "0xfE952465773bE3802eAc343C89aD351C77c00ab1",
            polyFRAX: "0x104592a158490a9228070E0A8e5343B499e125D0",
            anyFXS: "0x0452DD4d9B5b0Be57b9E98b825051833f20271ac",
            polyFXS: "0x3e121107F6F22DA4911079845a470757aF4e1A1b",
            polyUSDC: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        },
        bridge_backers: {
            matic_bridge: "0x6e1A844AFff1aa2a8ba3127dB83088e196187110"
        },
        oracles: {
            single_assets: {},
            cross_chain_oracle: "0x2ED4af887CD65F17079D3989a3Fb5414f92b9e57"
        },
        oracles_other: {
            combo_oracle: "0x932aac463081dA5b2D5904E55c1F984bDC884048",
            combo_oracle_univ2_univ3: "0x0D6EeBE86bF972Cb3e18A3D9126dF0Bfb52e7C66",
        },
        uniswap: {
            v2_router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
            v3_factory: "0x0000000000000000000000000000000000000000",
            v3_nft_manager: "0x0000000000000000000000000000000000000000",
            v3_router: "0x0000000000000000000000000000000000000000",
        },
        rari_pools: {
            "Index Coop Pool (#2)": "0x164835016E1590EE91Eb479c4Eeb1249779856aa",
            "Green Leverage Locker (#5)": "0xdc546C7CDEbCef7C2123500328feeE15f67F330e",
        },
        amos: {
            curve: "0x0eBA9254301B972f8a6A6bB2D576b2B1e0017C18",
            market_xyz_liquidity: "0x2182d5Bcc9110594d49530CA3EDAaBFd3C302E6e",
            sushiswap_liquidity: "0xBF667807Ff4d431E2aa77c50497434646F190Bfa",
        },
        reward_tokens: {
            mta: "0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0",
            sushi: "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
            wmatic: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"
        },
        bearer_tokens: {
            FRAX3pool: "0x5e5A23b52Cb48F5E70271Be83079cA5bC9c9e9ac",
        },
        pair_tokens: {
            'mStable FRAX/mUSD': "0xB30a907084AC8a0d25dDDAB4E364827406Fd09f0",
            "Sushi canFRAX/canFXS": "0xDf45B5B68d9dC84173DD963c763AeA8CAD3E24A6",
            "Sushi canFRAX/WMATIC": "0xe7c714dd3dd70ee04eb69a856655765454e77c88",
            "Sushi canFRAX/polyUSDC": "0x82D5BcC22856a3316f993340662D6253b3bC3f76",
            "Sushi canFXS/polyUSDC": "0xF850c261AdC576E6713D14af590a40d55936a982",
        },
        staking_contracts: {
            'mStable FRAX/mUSD': "0xc425Fd9Ed3C892d849C9E1a971516da1C1B29696",
        }
    },
    solana: {
        chain_id: 0,
        canonicals: {
            FRAX: "CTvtF8nqinnAN9peAErqMwuy3Z5TzpE5gzc8sbEDm9xt",
            FXS: "9PeoydLMMh6Zwj1H3uKsUw6oqAjVrKA1MwnycsmqYuZs"
        },
        bridge_tokens: {
            wFRAX_V1: "8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU",
            wFRAX: "FR87nWEUxVgerFGhZM8Y4AggKGLnaXswr1Pd8wZ4kZcp",
            wFXS_V1: "",
            wFXS: "6LX8BhMQ4Sy2otmAWj7Y5sKd9YTVVUgfMsBzT6B9W7ct",
        },
        wallets: {
            utility: {
                address: "8j9SUvwDE4gXjgJuooVNcNB5aZV3w7JiL6YALa5CYF1U",
                assoc_token_acct: {
                    FRAX: "ByNKo79zN7eNXaaA6eWRTLo3WSFtmhCKQmpsjgU62XoX",
                    FXS: "97diyVeE1FkudjdudgvQiQzxNnxVv7vQRiDNZAyT2n2H",
                    wFRAX: "FVsEDz8aesnfX6i4jAY1m738uPZzmLWhCQkyZwfToydY",
                    wFXS: "5czoF2yzeAbFzNBGpAdrT76XWG1EQjdo7WatSfhX4etD",
                    "Saber wFRAX/USDC": "Cm5319Jj9XgeBwX8VCVut6xZxKnN1W63UumDq9HE9yt9"
                },
            }
        },
        pair_tokens: {
            "Saber wFRAX/USDC": "FRXsjEv4jF3r72FgbCXu8uLbPoZGLmCmg3EN1S3cfC4x"
        }
    },
};
exports.INVESTOR_ALLOCATIONS = {
    'Aave_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "aFRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
    ],
    'AxialAMO': [
        { title: "TSD", big_base: exports.BIG18, symbol: 'TSD' },
        { title: "MIM", big_base: exports.BIG18, symbol: 'MIM' },
        { title: "FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "DAI", big_base: exports.BIG18, symbol: 'DAI' },
        { title: "Free AC4D", big_base: exports.BIG18, symbol: 'AC4D' },
        { title: "Deposited AC4D", big_base: exports.BIG18, symbol: 'AC4D' },
        { title: "Total AC4D USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'Convex_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX withdrawable from LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Collateral withdrawable from LP", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Subtotal Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "FRAX3CRV-2-f Free and Owned", big_base: exports.BIG18, symbol: 'FRAX3CRV' },
        { title: "FRAX3CRV-2-f Total Supply", big_base: exports.BIG18, symbol: 'FRAX3CRV' },
        { title: "3CRV Withdrawable", big_base: exports.BIG18, symbol: '3CRV' },
        { title: "FRAX3CRV Value in Vault", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'CROSS_CHAIN_BRIDGE_BACKER': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Lent FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Lent FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS [USD VALUE]", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
        { title: "Lent Collateral", big_base: exports.BIG6, symbol: 'Collat' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'Collat' },
        { title: "Total Collateral [USD VALUE]", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'CCFrax1to1AMM': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free collat, native precision", big_base: exports.BIG6, symbol: 'Collat' },
        { title: "Free collat, E18", big_base: exports.BIG18, symbol: 'Collat' },
        { title: "Total USD Value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'Curve_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX withdrawable from LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Collateral withdrawable from LP", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Subtotal Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "FRAX3CRV-2-f Free and Owned", big_base: exports.BIG18, symbol: 'FRAX3CRV' },
        { title: "FRAX3CRV-2-f Total Supply", big_base: exports.BIG18, symbol: 'FRAX3CRV' },
        { title: "3CRV Withdrawable", big_base: exports.BIG18, symbol: '3CRV' },
        { title: "FRAX3CRV Value in Vault", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'CurveAMO_ARBI': [
        { title: "FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "USDC", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "USDC USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "USDT", big_base: exports.BIG6, symbol: 'USDT' },
        { title: "USDT USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "2pool gauge", big_base: exports.BIG18, symbol: '2pool gauge' },
        { title: "2pool gauge USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "2pool", big_base: exports.BIG18, symbol: '2pool' },
        { title: "2pool USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FRAX2pool", big_base: exports.BIG18, symbol: 'FRAX2pool' },
        { title: "FRAX2pool USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'CurveAMO_FTM': [
        { title: "FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "DAI", big_base: exports.BIG18, symbol: 'DAI' },
        { title: "USDC", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "USDC USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "2pool gauge", big_base: exports.BIG18, symbol: '2pool gauge' },
        { title: "2pool gauge USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "2pool", big_base: exports.BIG18, symbol: '2pool' },
        { title: "2pool USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FRAX2pool", big_base: exports.BIG18, symbol: 'FRAX2pool' },
        { title: "FRAX2pool USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'CurveAMO_POLY': [
        { title: "FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "DAI", big_base: exports.BIG18, symbol: 'DAI' },
        { title: "DAI USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "USDC", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "USDC USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "USDT", big_base: exports.BIG6, symbol: 'USDT' },
        { title: "USDT USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "3pool gauge", big_base: exports.BIG18, symbol: '3pool gauge' },
        { title: "3pool gauge USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "3pool", big_base: exports.BIG18, symbol: '3pool' },
        { title: "3pool USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FRAX3pool", big_base: exports.BIG18, symbol: 'FRAX3pool' },
        { title: "FRAX3pool USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'CurveMetapoolLockerAMO': [
        { title: "Free LP", big_base: exports.BIG18, symbol: 'LP' },
        { title: "Staked LP in the vault", big_base: exports.BIG18, symbol: 'LP' },
        { title: "Free + Staked LP", big_base: exports.BIG18, symbol: 'LP' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Free Collateral, in E18", big_base: exports.BIG18, symbol: 'USDC' },
        { title: "Total USD Value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'Investor_V1': [
        { title: "Unallocated", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "yearn", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "AAVE", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Compound", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Total", big_base: exports.BIG6, symbol: 'USDC' }
    ],
    'Investor_AMO_V3': [
        { title: "Unallocated", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "yearn", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "AAVE", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Compound", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Total", big_base: exports.BIG6, symbol: 'USDC' }
    ],
    'Lending_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "crFRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX Total", big_base: exports.BIG18, symbol: 'FRAX' },
    ],
    'MIM_Convex_AMO': [
        { title: "Unallocated MIM", big_base: exports.BIG18, symbol: 'MIM' },
        { title: "MIM withdrawable from LP", big_base: exports.BIG18, symbol: 'MIM' },
        { title: "Total MIM", big_base: exports.BIG18, symbol: 'MIM' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Collateral withdrawable from LP", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "MIM3CRV Free and Owned", big_base: exports.BIG18, symbol: 'MIM3CRV' },
        { title: "MIM3CRV Total Supply", big_base: exports.BIG18, symbol: 'MIM3CRV' },
        { title: "3CRV Withdrawable", big_base: exports.BIG18, symbol: '3CRV' },
        { title: "MIM3CRV Value in Vault", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'RARI_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX in Pools", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
    ],
    'OHM_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "OHM Value", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "sOHM Value", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Bonded OHM Value", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total USD Value", big_base: exports.BIG18, symbol: 'FRAX' },
    ],
    'PangolinLiquidityAMO': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX in LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free FXS USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FXS in LP", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "FXS in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Free Collateral USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Collateral in LP", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Collateral in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Total Collateral USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in all LPs", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in entire AMO", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'LIQUIDITY_BRIDGER': [
        { title: "Unbridged FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Bridged FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Unbridged FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Bridged FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Unbridged Collateral", big_base: exports.BIG18, symbol: 'Collat' },
        { title: "Bridged Collateral", big_base: exports.BIG18, symbol: 'Collat' },
        { title: "Total Collateral", big_base: exports.BIG18, symbol: 'Collat' },
        { title: "Total USD Value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'MSIG_HELPER': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Lent FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Lent FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free Collateral", big_base: exports.BIG18, symbol: 'Collat' },
        { title: "Lent Collateral", big_base: exports.BIG18, symbol: 'Collat' },
        { title: "Total Collateral", big_base: exports.BIG18, symbol: 'Collat' },
        { title: "Total USD Value", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'ScreamAMO': [
        { title: "Free canFRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free scFRAX", big_base: exports.BIG8, symbol: 'scFRAX' },
        { title: "Free scFRAX, E18", big_base: exports.BIG18, symbol: 'scFRAX' },
        { title: "scFRAX USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value", big_base: exports.BIG18, symbol: 'FRAX' },
    ],
    'SpiritSwapLiquidityAMO': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX in LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free FXS USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FXS in LP", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "FXS in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Free Collateral USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Collateral in LP", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Collateral in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Total Collateral USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in all LPs", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in entire AMO", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'StakeDAO_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX withdrawable from LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Collateral withdrawable from LP", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Subtotal Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'USDC' },
        { title: "FRAX3CRV-2-f Free and Owned", big_base: exports.BIG18, symbol: 'FRAX3CRV' },
        { title: "FRAX3CRV-2-f Total Supply", big_base: exports.BIG18, symbol: 'FRAX3CRV' },
        { title: "3CRV Withdrawable", big_base: exports.BIG18, symbol: '3CRV' },
        { title: "FRAX3CRV Value in Vault", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'SushiSwapLiquidityAMO_HARM': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX in LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free FXS USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FXS in LP", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "FXS in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Free Collateral USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Collateral in LP", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Collateral in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Total Collateral USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in all LPs", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in entire AMO", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'SushiSwapLiquidityAMO_ARBI': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX in LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free FXS USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FXS in LP", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "FXS in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Free Collateral USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Collateral in LP", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Collateral in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Total Collateral USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in all LPs", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in entire AMO", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'SushiSwapLiquidityAMO_POLY': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "FRAX in LP", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free FXS USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "FXS in LP", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "FXS in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Total FXS USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Free Collateral USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Collateral in LP", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Collateral in LP USD value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total Collateral", big_base: exports.BIG6, symbol: 'Collateral' },
        { title: "Total Collateral USD Value", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in all LPs", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total USD Value in entire AMO", big_base: exports.BIG18, symbol: 'USD' },
    ],
    'UniV3_Liquidity_AMO': [
        { title: "Unallocated FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Unallocated Collateral E18", big_base: exports.BIG18, symbol: 'USD' },
        { title: "Total FRAX as Liquidity", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Total Value", big_base: exports.BIG18, symbol: 'USD' },
    ],
};
exports.INVESTOR_REWARDS = {
    'Convex_AMO': [
        { title: "CRV claimable", big_base: exports.BIG18, symbol: 'CRV' },
        { title: "CVX claimable", big_base: exports.BIG18, symbol: 'CVX' },
        { title: "cvxCRV claimable", big_base: exports.BIG18, symbol: 'cvxCRV' },
        { title: "FXS claimable", big_base: exports.BIG18, symbol: 'FXS' },
    ],
    'Curve_AMO': [
        { title: "CRV", big_base: exports.BIG18, symbol: 'CRV' }
    ],
    'Investor_V1': [
        { title: "COMP", big_base: exports.BIG18, symbol: 'COMP' }
    ],
    'Investor_AMO_V3': [
        { title: "COMP", big_base: exports.BIG18, symbol: 'COMP' },
        { title: "stkAAVE", big_base: exports.BIG18, symbol: 'stkAAVE' },
        { title: "AAVE", big_base: exports.BIG18, symbol: 'AAVE' }
    ],
    'MIM_Convex_AMO': [
        { title: "CRV claimable", big_base: exports.BIG18, symbol: 'CRV' },
        { title: "CVX claimable", big_base: exports.BIG18, symbol: 'CVX' },
        { title: "cvxCRV claimable", big_base: exports.BIG18, symbol: 'cvxCRV' },
        { title: "SPELL claimable", big_base: exports.BIG18, symbol: 'SPELL' },
    ],
    'Lending_AMO': [
        { title: "FNX", big_base: exports.BIG18, symbol: 'FNX' }
    ],
    'ScreamAMO': [
        { title: "Free SCREAM", big_base: exports.BIG18, symbol: 'SCREAM' },
        { title: "Unclaimed SCREAM", big_base: exports.BIG18, symbol: 'SCREAM' },
        { title: "Free xSCREAM", big_base: exports.BIG18, symbol: 'xSCREAM' },
        { title: "SCREAM value of xSCREAM", big_base: exports.BIG18, symbol: 'xSCREAM' },
        { title: "Total SCREAM equivalents", big_base: exports.BIG18, symbol: 'SCREAM' }
    ],
};
exports.TOKEN_BALANCES = {
    'CROSS_CHAIN_BRIDGE_BACKER': [
        { title: "Free anyFRAX", big_base: exports.BIG18, symbol: 'anyFRAX' },
        { title: "Free canFRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free anyFXS", big_base: exports.BIG18, symbol: 'anyFXS' },
        { title: "Free canFXS", big_base: exports.BIG18, symbol: 'canFXS' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
    ],
    'ScreamAMO': [
        { title: "Free canFRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free scFRAX", big_base: exports.BIG8, symbol: 'scFRAX' },
    ],
    'PangolinLiquidityAMO': [
        { title: "Free canFRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free canFXS", big_base: exports.BIG18, symbol: 'canFXS' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
    ],
    'SpiritSwapLiquidityAMO': [
        { title: "Free canFRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free canFXS", big_base: exports.BIG18, symbol: 'canFXS' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
    ],
    'SushiSwapLiquidityAMO_HARM': [
        { title: "Free canFRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free canFXS", big_base: exports.BIG18, symbol: 'canFXS' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
    ],
    'SushiSwapLiquidityAMO_POLY': [
        { title: "Free canFRAX", big_base: exports.BIG18, symbol: 'canFRAX' },
        { title: "Free canFXS", big_base: exports.BIG18, symbol: 'canFXS' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
    ],
    'LIQUIDITY_BRIDGER': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
    ],
    'MSIG_HELPER': [
        { title: "Free FRAX", big_base: exports.BIG18, symbol: 'FRAX' },
        { title: "Free FXS", big_base: exports.BIG18, symbol: 'FXS' },
        { title: "Free Collateral", big_base: exports.BIG6, symbol: 'Collat' },
    ],
};
//# sourceMappingURL=constants.js.map