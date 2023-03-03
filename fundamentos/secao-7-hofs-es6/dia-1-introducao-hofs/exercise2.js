const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => Math.round(Math.random() * (dragon.strength -15) + 15);

const warDmg = () => Math.round(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength);

const mageTurn = () => {
  const obj = {
    dmg: null,
    manaSpent: null,
  }
  if (mage.mana < 15) {
    obj.dmg = 'Não possui mana suficiente';
    obj.manaSpent = 0;
    return obj;
  }
  mage.mana -= 15;
  obj.manaSpent = 15;
  obj.dmg = Math.round(Math.random() * (mage.intelligence) + mage.intelligence);

  return obj
}

