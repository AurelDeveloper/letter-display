import RootLayout from './layout'
import WideCards from '../components/cards/WideCards'
import LargeCards from '../components/cards/LargeCards'
import RankedCards from '../components/cards/RankedCards'
import MidCards from '../components/cards/MidCards'
import { Theme } from '@radix-ui/themes';

export default function Page() {
    return (
        <RootLayout>
            <Theme>

                <WideCards />
            </Theme>
        </RootLayout>
    )
}
