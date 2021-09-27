// priority: 0

onEvent('recipes', e => {

  // add in crafting recipe for compressed crushed andesite
  e.shaped('excompressum:compressed_crushed_andesite', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'exnihilosequentia:crushed_andesite'
  })

  e.shapeless('9x exnihilosequentia:crushed_andesite', ['excompressum:compressed_crushed_andesite'])

  // add in crafting recipe for compressed crushed diorite
  e.shaped('excompressum:compressed_crushed_diorite', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'exnihilosequentia:crushed_diorite'
  })

  e.shapeless('9x exnihilosequentia:crushed_diorite', ['excompressum:compressed_crushed_diorite'])

  // add in crafting recipe for compressed crushed granite
  e.shaped('excompressum:compressed_crushed_granite', [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'exnihilosequentia:crushed_granite'
  })

  e.shapeless('9x exnihilosequentia:crushed_granite', ['excompressum:compressed_crushed_granite'])

})