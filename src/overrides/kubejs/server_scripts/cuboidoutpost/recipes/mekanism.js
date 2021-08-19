// priority: 0

onEvent('recipes', e => {

  // allow metallurgic infuser to use Cuboid furnaces in recipe
  e.shaped('mekanism:metallurgic_infuser', [
    'IFI',
    'ROR',
    'IFI'
  ], {
    I: '#forge:ingots/iron',
    F: '#cuboidmod:furnaces',
    R: 'minecraft:redstone',
    O: '#forge:ingots/osmium'
  })

})