// priority: 0

onEvent('recipes', e => {

  // remove tinkers smelting recipes that would give
  // early access to iron

  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/axes'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/boots'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/bucket'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/chestplate'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/crossbow'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/helmet'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/horse_armor'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_1'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_2'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_4'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/ingot_5'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/lantern'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/leggings'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/small'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/tripwire'})
  e.remove({id: 'tconstruct:smeltery/melting/metal/iron/weapon'})

  // remove minecraft recipes that would give
  // early access to iron
  e.remove({id: 'minecraft:iron_nugget_from_blasting'})
  e.remove({id: 'minecraft:iron_nugget_from_smelting'})

})