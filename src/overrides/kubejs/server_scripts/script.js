// priority: 0

/*	
	Scripts that get loaded every time server resources reload - Used for 
	modifying recipes, tags, loot tables, and handling server events 
	(Can be reloaded with /reload)
*/

console.info('Cuboid Outpost - Server resources loaded')

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

// Listen to player login event
onEvent('player.logged_in', function (event) {
	// Check if player doesn't have "starting_items" gamestage yet
	if (!event.hasGameStage('starting_items')) {
	    // Add the gamestage
	    event.addGameStage('starting_items')
	    // Give some items to player
	    event.player.give('ftbquests:book')
	}
})