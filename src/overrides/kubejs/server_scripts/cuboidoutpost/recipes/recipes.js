// priority: 0

onEvent('recipes', e => {
    // helper functions

    const crushing = (name) => {
        e.recipes.create.crushing({
          ingredients: [
            { item: 'cuboidmod:' + name + '_chunk' }
          ],
          results: [
            { item: 'cuboidmod:' + name + '_dust', count: 2 },
            { item: 'cuboidmod:' + name + '_dust', count: 1, chance: 0.5 }
          ]
        })

        e.recipes.thermal.pulverizer([
            '2x cuboidmod:' + name + '_dust',
            Item.of('cuboidmod:silica_dust').withChance(0.5)
          ],             
          'cuboidmod:' + name + '_chunk')

        e.recipes.mekanism.crushing('2x cuboidmod:' + name + '_dust', 'cuboidmod:' + name + '_chunk')
    }

    const cuboid_ores = [
        'notsogudium', 'kudbebedda', 'notarfbadium', 'wikidium', 'thatldu'
    ]

    cuboid_ores.forEach((name) => {
        // custom ores
        crushing(name)
    })

    // ZINC dust
    e.recipes.thermal.pulverizer(
      ['2x cuboidmod:zinc_dust'],
      '#forge:ores/zinc'
    )

    e.recipes.mekanism.crushing(
      '2x cuboidmod:zinc_dust',
      '#forge:ores/zinc'
    )

    e.smelting('1x create:zinc_ingot', 'cuboidmod:zinc_dust')

    // cobalt dust
    e.recipes.thermal.pulverizer(
      ['2x cuboidmod:cobalt_dust'],
      '#forge:ores/cobalt'
    )

    e.recipes.mekanism.crushing(
      '2x cuboidmod:cobalt_dust',
      '#forge:ores/cobalt'
    )

    e.smelting('1x tconstruct:cobalt_ingot', 'cuboidmod:cobalt_dust')

    // initial molecular recycler recipe
    e.shaped('cuboidmod:molecular_recycler', [
      'FHF',
      'TCT',
      'REP'
    ], {
      H: 'minecraft:hopper',
      F: 'cuboidmod:notsogudium_furnace',
      T: 'cuboidmod:notsogudium_crafting_table',
      C: 'thermal:machine_centrifuge',
      R: 'cuboidmod:notsogudium_singularity_resource_generator',
      E: 'mekanism:advanced_energy_cube',
      P: '#cuboidmod:quantum_singularities'
    })

    // subsequent molecular recycler recipe
    e.shaped('cuboidmod:molecular_recycler', [
      'FHF',
      'TCT',
      'REP'
    ], {
      H: 'minecraft:hopper',
      F: 'cuboidmod:notarfbadium_furnace',
      T: 'cuboidmod:notarfbadium_crafting_table',
      C: 'cuboidmod:notsogudium_singularity_power_generator',
      R: 'cuboidmod:notarfbadium_singularity_resource_generator',
      E: 'minecraft:redstone_block',
      P: '#cuboidmod:quantum_singularities'
    })

    // initial quantum transmutation chamber recipe
    e.shaped('cuboidmod:quantum_transmutation_chamber', [
      ' H ',
      'RAR',
      'QFQ'
    ], {
      H: 'minecraft:hopper',
      R: 'minecraft:redstone',
      A: 'appliedenergistics2:controller',
      F: 'thermal:machine_furnace',
      Q: '#cuboidmod:quantum_singularities'
    })

    e.custom({
      type: 'cuboidmod:transmuting',
      base: {
        item: 'cuboidmod:rotten_apple'
      },
      addition: {
        item: 'cuboidmod:protein_fiber'
      },
      result: {
        item: 'exnihilosequentia:silkworm',
        count: 6
      },
      work_ticks: 120,
      energy: 3000
    })

    // substitute with additional 5% chance apple drops instead
    e.custom({
      type: 'exnihilosequentia:crook',
      results: [
        {
          chance: 0.05,
          item: 'minecraft:apple',
          count: 1
        }
      ],
      input: {
        tag: 'minecraft:leaves'
      }
    })

    // shears
    e.shaped('minecraft:shears', [
      ' I',
      'I ',
    ], {
      I: '#cuboidmod:ingots'
    })

    // drying cupboard recipe
    e.shaped('cuboidmod:drying_cupboard', [
      'PLP',
      'EAE',
      'ALA'
    ], {
      P: 'minecraft:dark_oak_planks',
      L: 'minecraft:dark_oak_log',
      E: 'mekanism:energy_tablet',
      A: 'mekanism:alloy_infused'
    })

    // piston recipe
    e.shaped('minecraft:piston', [
      'PPP',
      'STS',
      'SRS'
    ], {
      P: '#minecraft:planks',
      S: '#forge:stone',
      T: 'cuboidmod:thatldu_ingot',
      R: 'minecraft:redstone'
    })

    // flint and steel recipe
    e.shapeless('minecraft:flint_and_steel', [
      'minecraft:flint',
      '#cuboidmod:ingots'
    ])

    // compass
    e.shaped('minecraft:compass', [
      ' W ',
      'WRW',
      ' W '
    ], {
      W: 'cuboidmod:wikidium_ingot',
      R: 'minecraft:redstone'
    })

    e.custom({
      type: 'cuboidmod:transmuting',
      base: {
        item: 'cuboidmod:wikidium_chunk'
      },
      addition: {
        item: 'minecraft:iron_nugget'
      },
      result: {
        item: 'thermal:iron_dust',
        count: 1
      },
      work_ticks: 300,
      energy: 3000
    })

    // Slime
    e.shapeless('minecraft:slime_ball', [
      'minecraft:lime_dye',
      'kubejs:albumen'
    ])

    // eumus furnace recipe
    e.shaped('cuboidmod:eumus_furnace', [
      'EEE',
      'E E',
      'EEE'
    ], {
      E: 'endergetic:eumus'
    })

})