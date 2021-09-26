// Listen to item tag event
onEvent('item.tags', event => {
    event.add('forge:storage_blocks', 'kubejs:platinum_block')
    event.add('forge:storage_blocks/platinum', 'kubejs:platinum_block')
    
    //event.add('forge:ingots', 'kubejs:platinum_ingot')
    //event.add('forge:ingots/platinum', 'kubejs:platinum_ingot')
    
    event.add('forge:nuggets', 'kubejs:platinum_nugget')
    event.add('forge:nuggets/platinum', 'kubejs:platinum_nugget')

})