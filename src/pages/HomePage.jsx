import { RootLayout } from '../layout';
import { MoviesCategories } from '../components/MoviesCategories';
import { genres } from '../data/genres';

export const HomePage = () => {

    return (
        <RootLayout>
            {
                genres.map((genre) => (
                    <MoviesCategories genre={genre} />
                ))
            }

        </RootLayout>
    )
}
