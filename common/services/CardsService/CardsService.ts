import {ICardsService} from './ICardsService';
import {ICard} from '../../models/ICard';
import {CardRarityEnum} from '../../models/CardRarityEnum';

export default class CardsService implements ICardsService {

 private cards: ICard[] = [
    {
        'name': 'The Tidecaller',
        'cost': 3,
        'attack': 1,
        'hp': 3,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'tidecaller.png',
        'selected': false
    },
    {
        'name': 'Silver Hand Horse',
        'cost': 2,
        'attack': 3,
        'hp': 2,
        'rarity': CardRarityEnum.RARE,
        'image': 'silver-hand-horse.png',
        'selected': false
    },
    {
        'name': 'Lord Falconcrest',
        'cost': 7,
        'attack': 5,
        'hp': 7,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'lord-falconcrest.png',
        'selected': false
    },
    {
        'name': 'Ancestors Emperor',
        'cost': 8,
        'attack': 4,
        'hp': 10,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'ancestors-emperor.png',
        'selected': false
    },
    {
        'name': 'Blood Mage',
        'cost': 4,
        'attack': 4,
        'hp': 4,
        'rarity': CardRarityEnum.EPIC,
        'image': 'blood-mage.png',
        'selected': false
    },
    {
        'name': 'Etheral Manipulator',
        'cost': 5,
        'attack': 3,
        'hp': 3,
        'rarity': CardRarityEnum.EPIC,
        'image': 'etheral-manipulator.png',
        'selected': false
    },
    {
        'name': 'Zorchal the Shadowseer',
        'cost': 6,
        'attack': 6,
        'hp': 7,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'zorchal-the-shadowseer.png',
        'selected': false
    },
    {
        'name': 'Bounty Hunter',
        'cost': 2,
        'attack': 2,
        'hp': 1,
        'rarity': CardRarityEnum.EPIC,
        'image': 'bounty-hunter.png',
        'selected': false
    },
    {
        'name': 'Transform',
        'cost': 5,
        'attack': 0,
        'hp': 0,
        'rarity': CardRarityEnum.RARE,
        'image': 'transform.png',
        'selected': false
    },
    {
        'name': 'Burning Blademaster',
        'cost': 6,
        'attack': 4,
        'hp': 7,
        'rarity': CardRarityEnum.RARE,
        'image': 'burning-blademaster.png',
        'selected': false
    },
    {
        'name': 'Mass Teleport',
        'cost': 9,
        'attack': 0,
        'hp': 0,
        'rarity': CardRarityEnum.RARE,
        'image': 'mass-teleport.png',
        'selected': false
    },
    {
        'name': 'High Overlord Saufang',
        'cost': 13,
        'attack': 6,
        'hp': 8,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'high-overlord-saufang.png',
        'selected': false
    },
    {
        'name': 'Fungal Giant',
        'cost': 20,
        'attack': 8,
        'hp': 8,
        'rarity': CardRarityEnum.EPIC,
        'image': 'fungal-giant.png',
        'selected': false
    },
    {
        'name': 'Silver Hand Commander',
        'cost': 6,
        'attack': 4,
        'hp': 5,
        'rarity': CardRarityEnum.COMMON,
        'image': 'silver-hand-commander.png',
        'selected': false
    },
    {
        'name': 'Barador Wildhammer',
        'cost': 5,
        'attack': 4,
        'hp': 4,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'barador-wildhammer.png',
        'selected': false
    },
    {
        'name': 'Mana Channeler',
        'cost': 4,
        'attack': 3,
        'hp': 5,
        'rarity': CardRarityEnum.EPIC,
        'image': 'mana-chaneller.png',
        'selected': false
    },
    {
        'name': 'Forsaken Far-eyes',
        'cost': 2,
        'attack': 2,
        'hp': 2,
        'rarity': CardRarityEnum.RARE,
        'image': 'forsaken-fareyes.png',
        'selected': false
    },
    {
        'name': 'Grace',
        'cost': 1,
        'attack': 0,
        'hp': 0,
        'rarity': CardRarityEnum.COMMON,
        'image': 'grace.png',
        'selected': false
    },
    {
        'name': 'Chained Ruby Drake',
        'cost': 4,
        'attack': 6,
        'hp': 6,
        'rarity': CardRarityEnum.COMMON,
        'image': 'chained-ruby-drake.png',
        'selected': false
    },
    {
        'name': 'Archmade Khadgar',
        'cost': 7,
        'attack': 5,
        'hp': 7,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'archmage-khadgar.png',
        'selected': false
    },
    {
        'name': 'Deathbringer Saurfang',
        'cost': 5,
        'attack': 5,
        'hp': 5,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'deathbringer-saurfang.png',
        'selected': false
    },
    {
        'name': 'Balaena',
        'cost': 8,
        'attack': 6,
        'hp': 8,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'balaena.png',
        'selected': false
    },
    {
        'name': 'Dread Captain DeMeza',
        'cost': 8,
        'attack': 6,
        'hp': 8,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'dread-captain-demeza.png',
        'selected': false
    },
    {
        'name': 'Remulos',
        'cost': 5,
        'attack': 3,
        'hp': 7,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'remulos.png',
        'selected': false
    },
    {
        'name': 'Northrend Scholar',
        'cost': 3,
        'attack': 2,
        'hp': 3,
        'rarity': CardRarityEnum.COMMON,
        'image': 'northrend-scholar.png',
        'selected': false
    },
    {
        'name': 'Greenskin Ambusher',
        'cost': 5,
        'attack': 6,
        'hp': 4,
        'rarity': CardRarityEnum.COMMON,
        'image': 'greenskin-ambusher.png',
        'selected': false
    },
    {
        'name': 'Sneaky Scoundrel',
        'cost': 5,
        'attack': 5,
        'hp': 5,
        'rarity': CardRarityEnum.RARE,
        'image': 'sneaky-scoundrel.png',
        'selected': false
    },
    {
        'name': 'Keeper of Time',
        'cost': 4,
        'attack': 3,
        'hp': 3,
        'rarity': CardRarityEnum.RARE,
        'image': 'keeper-of-time.png',
        'selected': false
    },
    {
        'name': 'Pyromaniac',
        'cost': 5,
        'attack': 5,
        'hp': 5,
        'rarity': CardRarityEnum.EPIC,
        'image': 'pyromaniac.png',
        'selected': false
    },
    {
        'name': 'Chicken Transmutator',
        'cost': 6,
        'attack': 6,
        'hp': 7,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'chicken-transmutator.png',
        'selected': false
    },
    {
        'name': 'Cho\'gall',
        'cost': 5,
        'attack': 5,
        'hp': 4,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'chogall.png',
        'selected': false
    },
    {
        'name': 'Nielas Aran',
        'cost': 5,
        'attack': 6,
        'hp': 4,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'nielas-aran.png',
        'selected': false
    },
    {
        'name': 'Arkaeda, the Recaller',
        'cost': 9,
        'attack': 9,
        'hp': 8,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'arkaeda-the-recaller.png',
        'selected': false
    },
    {
        'name': 'Stag of Malorne',
        'cost': 3,
        'attack': 3,
        'hp': 3,
        'rarity': CardRarityEnum.EPIC,
        'image': 'stag-of-malorne.png',
        'selected': false
    },
    {
        'name': 'Witherbark Defender',
        'cost': 4,
        'attack': 3,
        'hp': 5,
        'rarity': CardRarityEnum.RARE,
        'image': 'witherbark-defender.png',
        'selected': false
    },
    {
        'name': 'Drek\'Thar',
        'cost': 5,
        'attack': 4,
        'hp': 6,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'drekthar.png',
        'selected': false
    },
    {
        'name': 'Dezco the Sunwalker',
        'cost': 6,
        'attack': 5,
        'hp': 5,
        'rarity': CardRarityEnum.LEGENDARY,
        'image': 'dezco-the-sunwalker.png',
        'selected': false
    }
];

    public get(): ICard[] {
        return this.cards;
    }
}
