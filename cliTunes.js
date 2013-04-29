/*
 * Windows Script for controlling Apple iTunes via the command line
 *
 * Usage: wscript.exe cliTunes.js OP
 
 * Valid Ops (case-insensitive): Next[Track] / Prev[ious[Track]] / Play / Pause / Stop
 */
var ALIASES = {
		"prev"          : "PreviousTrack",
		"previous"      : "PreviousTrack",
		"previoustrack" : "PreviousTrack",
		"next"          : "NextTrack",
		"nexttrack"     : "NextTrack",
		"stop"          : "Stop",
		"play"          : "Play",
		"pause"         : "Pause"
		};
var iTunesApp = WScript.CreateObject("iTunes.Application"),
	op = WScript.Arguments.Item(0);
if (iTunesApp && op) iTunesApp[ALIASES[op.toLowerCase()]]();