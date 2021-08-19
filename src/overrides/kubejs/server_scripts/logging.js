//priority: 9999

// Note to self: change to true for release

var isRelease = false

settings.logAddedRecipes = !isRelease
settings.logRemovedRecipes = !isRelease
settings.logSkippedRecipes = false
settings.logErroringRecipes = !isRelease