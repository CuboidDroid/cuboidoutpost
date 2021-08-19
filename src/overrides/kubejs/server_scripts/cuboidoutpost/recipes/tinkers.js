events.listen('recipes', event => {

    // Ore Melting

    event.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/notsogudium" },
        "result": { "fluid": "kubejs:molten_notsogudium", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_notsogudium",
            "amount": 48
          }
        ]
    })

    event.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/kudbebedda" },
        "result": { "fluid": "kubejs:molten_kudbebedda", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_kudbebedda",
            "amount": 48
          }
        ]
    })

    event.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/notarfbadium" },
        "result": { "fluid": "kubejs:molten_notarfbadium", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_notarfbadium",
            "amount": 48
          }
        ]
    })

    event.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/wikidium" },
        "result": { "fluid": "kubejs:molten_wikidium", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_wikidium",
            "amount": 48
          }
        ]
    })

    event.custom({
        "type": "tconstruct:ore_melting",
        "ingredient": { "tag": "forge:ores/thatldu" },
        "result": { "fluid": "kubejs:molten_thatldu", "amount": 144 },
        "temperature": 700,
        "time": 85,
        "byproducts": [
          {
            "fluid": "kubejs:molten_thatldu",
            "amount": 48
          }
        ]
    })

    // Melting - Cuboid Ingots

    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notsogudium_ingot"},"result": {"fluid": "kubejs:molten_notsogudium","amount": 144},"temperature": 700,"time": 10})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:kudbebedda_ingot"},"result": {"fluid": "kubejs:molten_kudbebedda","amount": 144},"temperature": 800,"time": 15})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notarfbadium_ingot"},"result": {"fluid": "kubejs:molten_notarfbadium","amount": 144},"temperature": 850,"time": 20})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:wikidium_ingot"},"result": {"fluid": "kubejs:molten_wikidium","amount": 144},"temperature": 900,"time": 25})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:thatldu_ingot"},"result": {"fluid": "kubejs:molten_thatldu","amount": 144},"temperature": 950,"time": 30})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:carbon_nanotube"},"result": {"fluid": "kubejs:fullerine_fluid","amount": 144},"temperature": 400,"time": 10})

    // Melting - Cuboid Dusts

    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notsogudium_dust"},"result": {"fluid": "kubejs:molten_notsogudium","amount": 144},"temperature": 700,"time": 10})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:kudbebedda_dust"},"result": {"fluid": "kubejs:molten_kudbebedda","amount": 144},"temperature": 800,"time": 15})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notarfbadium_dust"},"result": {"fluid": "kubejs:molten_notarfbadium","amount": 144},"temperature": 850,"time": 20})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:wikidium_dust"},"result": {"fluid": "kubejs:molten_wikidium","amount": 144},"temperature": 900,"time": 25})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:thatldu_dust"},"result": {"fluid": "kubejs:molten_thatldu","amount": 144},"temperature": 950,"time": 10})

    // Melting - Cuboid Blocks

    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notsogudium_block"},"result": {"fluid": "kubejs:molten_notsogudium","amount": 1296},"temperature": 700,"time": 90})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:kudbebedda_block"},"result": {"fluid": "kubejs:molten_kudbebedda","amount": 1296},"temperature": 800,"time": 135})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:notarfbadium_block"},"result": {"fluid": "kubejs:molten_notarfbadium","amount": 1296},"temperature": 850,"time": 180})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:wikidium_block"},"result": {"fluid": "kubejs:molten_wikidium","amount": 1296},"temperature": 900,"time": 225})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:thatldu_block"},"result": {"fluid": "kubejs:molten_thatldu","amount": 1296},"temperature": 950,"time": 270})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "cuboidmod:carbon_nanotube_block"},"result": {"fluid": "kubejs:fullerine_fluid","amount": 1296},"temperature": 400,"time": 90})

    // Molten Cuboid Materials To Blocks

    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_notsogudium","amount": 1296},"result": "cuboidmod:notsogudium_block","cooling_time": 160})
    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_kudbebedda","amount": 1296},"result": "cuboidmod:kudbebedda_block","cooling_time": 170})
    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_notarfbadium","amount": 1296},"result": "cuboidmod:notarfbadium_block","cooling_time": 180})
    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_wikidium","amount": 1296},"result": "cuboidmod:wikidium_block","cooling_time": 190})
    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_thatldu","amount": 1296},"result": "cuboidmod:thatldu_block","cooling_time": 200})
    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:fullerine_fluid","amount": 1296},"result": "cuboidmod:carbon_nanotube_block","cooling_time": 60})

    // Molten Cuboid Materials To Items

    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_notsogudium","amount": 144},"result": "cuboidmod:notsogudium_ingot","cooling_time": 160})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_kudbebedda","amount": 144},"result": "cuboidmod:kudbebedda_ingot","cooling_time": 170})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_notarfbadium","amount": 144},"result": "cuboidmod:notarfbadium_ingot","cooling_time": 180})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_wikidium","amount": 144},"result": "cuboidmod:wikidium_ingot","cooling_time": 190})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:molten_thatldu","amount": 144},"result": "cuboidmod:thatldu_ingot","cooling_time": 200})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast" },"cast_consumed": false,"fluid": {"name": "kubejs:fullerine_fluid","amount": 144},"result": "cuboidmod:carbon_nanotube","cooling_time": 60})

    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_notsogudium","amount": 144},"result": "cuboidmod:notsogudium_ingot","cooling_time": 160})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_kudbebedda","amount": 144},"result": "cuboidmod:kudbebedda_ingot","cooling_time": 170})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_notarfbadium","amount": 144},"result": "cuboidmod:notarfbadium_ingot","cooling_time": 180})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_wikidium","amount": 144},"result": "cuboidmod:wikidium_ingot","cooling_time": 190})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:molten_thatldu","amount": 144},"result": "cuboidmod:thatldu_ingot","cooling_time": 200})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_sand_cast" },"cast_consumed": true,"fluid": {"name": "kubejs:fullerine_fluid","amount": 144},"result": "cuboidmod:carbon_nanotube","cooling_time": 60})

    // Alloys

    event.custom({"type": "tconstruct:alloy","inputs": [
        {"name": "kubejs:fullerine_fluid","amount": 144},
        {"name": "kubejs:molten_thatldu","amount": 144},
        {"name": "tconstruct:molten_iron","amount": 144}],
        "result": {"fluid": "tconstruct:molten_osmium","amount": 432},"temperature": 975})

    /*
    // Molten Overworld Matter

    event.custom({"type": "tconstruct:alloy","inputs": [{"name": "kubejs:organic_fluid","amount": 500},{"name": "tconstruct:molten_tin","amount": 144},{"name": "tconstruct:molten_clay","amount": 250}],
    "result": {"fluid": "kubejs:molten_overworld_matter","amount": 1000},"temperature": 800})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:overworld_matter"},"result": {"fluid": "kubejs:molten_overworld_matter","amount": 50},"temperature": 250,"time": 50})

    event.custom({"type": "tconstruct:melting","ingredient": {"item": "kubejs:ender_ingot"},"result": {"fluid": "tconstruct:molten_ender","amount": 144},"temperature": 1400,"time": 300})

    // Molten to blocks
    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "kubejs:molten_overworld_matter","amount": 50},"result": "kubejs:overworld_matter","cooling_time": 80})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:carved_pumpkin" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_iron","amount": 5184},"result": "kubejs:iron_golem","cooling_time": 600})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:diorite" },"cast_consumed": true,"fluid": {"name": "minecraft:milk","amount": 100},"result": "quark:marble","cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:stone" },"cast_consumed": true,"fluid": {"name": "minecraft:lava","amount": 100},"result": "quark:brimstone","cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:stone" },"cast_consumed": true,"fluid": {"name": "minecraft:water","amount": 100},"result": "quark:slate","cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:granite" },"cast_consumed": true,"fluid": {"name": "minecraft:water","amount": 100},"result": "quark:jasper","cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:smooth_stone" },"cast_consumed": true,"fluid": {"name": "minecraft:lava","amount": 100},"result": "quark:basalt","cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "minecraft:andesite" },"cast_consumed": true,"fluid": {"name": "minecraft:water","amount": 100},"result": "quark:limestone","cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": 'kubejs:map' },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_ender","amount": 1296},"result": 'kubejs:map2',"cooling_time": 200})

    //Molten To Items

    event.custom({"type": "tconstruct:casting_table","cast": {"item": "morered:red_alloy_ingot" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_gold","amount": 288},"result": 'thermal:rf_coil',"cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "exnihilosequentia:mesh_flint" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_iron","amount": 1296},"result": 'exnihilosequentia:mesh_iron',"cooling_time": 100})
    event.custom({"type": "tconstruct:casting_basin","cast": {"item": "exnihilosequentia:mesh_emerald" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_netherite","amount": 2592},"result": 'exnihilosequentia:mesh_netherite',"cooling_time": 1000})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:redstone" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_obsidian","amount": 250},"result": 'fluxnetworks:flux_dust',"cooling_time": 100})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:ender_pearl" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_blaze","amount": 50},"result": 'minecraft:ender_eye',"cooling_time": 100})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "minecraft:bone" },"cast_consumed": true,"fluid": {"name": "tconstruct:molten_obsidian","amount": 500},"result": 'tconstruct:necrotic_bone',"cooling_time": 100})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": 'tconstruct:ingot_cast' },"cast_consumed": false,"fluid": {"name": "tconstruct:molten_ender","amount": 144},"result": 'kubejs:ender_ingot',"cooling_time": 100})

    //Ingot Fix

    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:ingot_cast"},"fluid": {"name": "tconstruct:molten_copper","amount": 144},"result": "mekanism:ingot_copper","cooling_time": 50})
    event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/ingot"},"fluid": {"name": "tconstruct:molten_copper","amount": 144},"cast_consumed": true,"result": "mekanism:ingot_copper","cooling_time": 50})
    event.custom({"type": "tconstruct:casting_table","cast": {"item": "tconstruct:nugget_cast"},"fluid": {"name": "tconstruct:molten_copper","amount": 16},"result": "mekanism:nugget_copper","cooling_time": 17})
    event.custom({"type": "tconstruct:casting_table","cast": {"tag": "tconstruct:casts/single_use/nugget"},"fluid": {"name": "tconstruct:molten_copper","amount": 16},"cast_consumed": true,"result": "mekanism:nugget_copper","cooling_time": 17})
    event.custom({"type": "tconstruct:casting_basin","fluid": {"name": "tconstruct:molten_copper","amount": 1296},"result": "mekanism:block_copper","cooling_time": 150})

    //Crude Oil

    event.custom({"type": "tconstruct:melting","ingredient": {"item": "minecraft:coal"},"result": {"fluid": "thermal:crude_oil","amount": 80},"temperature": 200,"time": 350})
    event.custom({"type": "tconstruct:melting","ingredient": {"item": "tinycoal:tinycoal"},"result": {"fluid": "thermal:crude_oil","amount": 10},"temperature": 200,"time": 350})

    //event.custom({"type": "tconstruct:casting_basin","conditions": [{"value": {"tag": "forge:storage_blocks/aluminum","type": "forge:tag_empty" },"type": "forge:not"}],"fluid": {"name": "tconstruct:molten_aluminum","amount": 1296},"result": {"tag": "forge:storage_blocks/aluminum"},"cooling_time": 141})


    //Blast Furnace Fix

    event.custom({"type": "tconstruct:melting","ingredient": [{"item": "minecraft:hopper"},{"item": "minecraft:minecart"}],"result": {"fluid": "tconstruct:molten_iron","amount": 720},"temperature": 800,"time": 134}).id('tconstruct:smeltery/melting/metal/iron/ingot_5')

    */

})