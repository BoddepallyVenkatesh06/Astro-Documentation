import { DocSearchDictionary } from '../translation-checkers';

export default DocSearchDictionary({
	button: 'Suchen',
	placeholder: 'Dokumentation durchsuchen',
	shortcutLabel: 'Drücke / zum Suchen',
	resultsFooterLede:
		'Auf der Suche nach einer Astro-Integration oder einer Vorlage? Brauchst du mehr Hilfe?',
	resultsFooterIntegrations: 'Verzeichnis der Astro-Intergrationen',
	resultsFooterThemes: 'Galerie mit Astro-Vorlagen',
	resultsFooterDiscord: 'Tritt unserem Discord bei',
	modal: {
		searchBox: {
			resetButtonTitle: 'Suchanfrage löschen',
			resetButtonAriaLabel: 'Suchanfrage löschen',
			cancelButtonText: 'Abbrechen',
			cancelButtonAriaLabel: 'Abbrechen',
		},
		startScreen: {
			recentSearchesTitle: 'Neuliche Suchanfragen',
			noRecentSearchesText: 'Keine neulichen Suchanfragen',
			saveRecentSearchButtonTitle: 'Diese Suchanfrage speichern',
			removeRecentSearchButtonTitle: 'Diese Suchanfrage aus dem Verlauf entfernen',
			favoriteSearchesTitle: 'Favoriten',
			removeFavoriteSearchButtonTitle: 'Diese Suchanfrage aus den Favoriten entfernen',
		},
		errorScreen: {
			titleText: 'Fehler beim Abrufen der Ergebnisse',
			helpText: 'Du solltest den Status deiner Internetverbindung überprüfen',
		},
		footer: {
			selectText: 'zum Auswählen',
			selectKeyAriaLabel: 'Eingabetaste',
			navigateText: 'zum Navigieren',
			navigateUpKeyAriaLabel: 'Pfeiltaste nach oben',
			navigateDownKeyAriaLabel: 'Pfeiltaste nach unten',
			closeText: 'zum Schließen',
			closeKeyAriaLabel: 'Escapetaste',
			searchByText: 'Suche von',
		},
		noResultsScreen: {
			noResultsText: 'Keine Ergebnisse gefunden für',
			suggestedQueryText: 'Versuche es mit der Suche nach',
			reportMissingResultsText: 'Glaubst du, einen Fehler gefunden zu haben?',
			reportMissingResultsLinkText: 'Lass es uns wissen',
		},
	},
});
