import { Diary } from 'letterboxd-api';

const html = (strings: TemplateStringsArray, ...values: any) => String.raw({ raw: strings }, ...values);

export default function diaryView(diaryList: Diary[], username: string): string {
	return html`
		<style>
			#letterboxd-embed-tc {
				display: grid;
				width: 100%;
				gap: 0;
			}

			.letterboxd-embed-tc-poster img {
				width: 100%;
				height: auto;
				display: block;
			}

			/* Grid layout for various devices */

			/* Extra small devices (max-width: 320px) - 3 columns */
			@media (max-width: 320px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(3, 1fr);
				}
			}

			/* Small devices (max-width: 420px) - 4 columns */
			@media (max-width: 420px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(4, 1fr);
				}
			}

			/* Small devices (max-width: 600px) - 5 columns */
			@media (max-width: 600px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(4, 1fr);
				}
			}

			/* Small devices (min-width: 600px) - 5 columns */
			@media (min-width: 600px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(4, 1fr);
				}
			}

			/* Tablets and small laptops (min-width: 768px) - 7 columns */
			@media (min-width: 768px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(6, 1fr);
				}
			}

			/* Medium laptops (min-width: 992px) - 9 columns */
			@media (min-width: 992px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(7, 1fr);
				}
			}

			/* Large screens (min-width: 1200px) - 12 columns */
			@media (min-width: 1200px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(10, 1fr);
				}
			}
		</style>

		<div id="letterboxd-embed-tc">
			${diaryList
				.map(
					(diary) => html`
						<div class="letterboxd-embed-tc-poster">
							<a href="${diary.uri}" target="_blank">
								<img src="${diary.film?.image?.large ?? ''}" alt="${diary.film.title} poster" />
							</a>
						</div>
					`
				)
				.join('')}
		</div>
	`;
}
