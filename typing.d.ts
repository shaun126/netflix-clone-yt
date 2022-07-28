export interface Genre {
	id: number;
	name: string;
}

export interface Movie {
	title: string;
	backdrop_path: string;
	media_type?: string;
	first_air_date: string;
	original_language: string;
	name: string;
	original_name: string;
	origin_country: string[];
	original_title: string;
	overview: string;
	poster_path: string;
	release_date?: string;

	id: number;
	genre_ids: number[];
	popularity: number;
	vote_average: number;
	vote_count: number;
}

export interface Element {
	type: 'Bloopers' | 'Featurette' | 'Behind the Scenes' | 'Clip' | 'Trailer' | 'Teaser';
}
