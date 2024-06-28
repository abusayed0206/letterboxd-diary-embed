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

			/* Grid layout for all devices */
			@media (max-width: 600px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(4, 1fr);
				}
			}

			@media (min-width: 601px) {
				#letterboxd-embed-tc {
					grid-template-columns: repeat(8, 1fr);
				}
			}
		</style>

		<div id="letterboxd-embed-tc">
			${diaryList
				.map((diary) => html`
					<div class="letterboxd-embed-tc-poster">
						<a href="${diary.uri}" target="_blank">
							<img src="${diary.film?.image?.large ?? ''}" alt="${diary.film.title} poster" />
						</a>
					</div>
				`)
				.join('')}
		</div>
	`;
}
