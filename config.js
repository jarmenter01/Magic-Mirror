/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "0.0.0.0", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: [], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 12,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},

		{
			module: "MMM-MyStandings",
			position: "top_right",
			config: {
				updateInterval: 10 * 60 * 1000, // every 10 minutes
				rotateInterval: 5 * 1 * 1000, // every 5 seconds
				sports: [
					{ league: "NBA", groups: ["Southwest"] },
					// { league: "MLB", groups: ["American League West"] },
					{ league: "NFL", groups: ["NFC East"] },
					{ league: "NHL", groups: ["Central Division"] },
					{ league: "MLS", groups: ["Western Conference"] },
					{ league: "NCAAF", groups: ["SEC - West"] }

				],
				nameStyle: "short",
				showLogos: true,
				useLocalLogos: true,
				showByDivision: true,
				fadeSpeed: 2000,
				}
		},
{
			module: "MMM-MMM-CollegeFootballTop25",
			position: "top_right",
			config: {
				// all config options are optional
			headerText: 'College Football Top 25 Teams',
			teamsToShowAtATime: 25,
			// possible columns: 
			// 'rank', 'name', 'conference', 
			// 'record', 'previous_rank', 'rank_change', 'points'
			columnOrder: ['rank', 'name', 'record', 'rank_change'],
			showPollWeekAndDate: true,
			showColumnHeaders: true,
			textClass: 'xsmall',
			colorRankChange: false,
			maxTeamNameLength: 16,
			maxConferenceNameLength: 10,
				}
		},

		{
			module: "MMM-MyScoreboard",
			position: "lower_third",
			classes: "default everyone",
			header: "My Scoreboard",
			config: {
				showLeagueSeparators: true,
				colored: true,
				viewStyle: "mediumLogos",
				rolloverHours: "20",
				sports: [
				{
				league: "NBA",
				teams: ["DAL"]
				},
				{
				league: "NHL",
				teams: ["DAL"]
				},
				{
				league: "MLB",
				teams: ["TEX"]
				},
				{
				league: "NFL",
				teams: ["DAL"],
				groups: ["NFC East"]
				},
				{
				league: "MLS",
				teams: ["DAL"]
				},
				{
				league: "NCAAF",
				teams: ["TA&M", "@T25"]
				}

				]
			
			}
		},


		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"

		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics"
					}
				],
				maximumNumberOfDays: 30
			}
		},


		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "Dallas",
				locationID: "4684888",  //ID from http://bulk.openweathermap.org/sample/; unzip the gz file and find your city
				appid: "cacba27b510978bb81a1ba81003bcfaa"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "Dallas",
				locationID: "4684888",  //ID from https://openweathermap.org/city
				appid: "cacba27b510978bb81a1ba81003bcfaa"
			}
		},

		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},

	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
