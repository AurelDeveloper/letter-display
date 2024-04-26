import RootLayout from './layout'
import Posts from '@/app/posts/page'
import { Theme } from '@radix-ui/themes';

export default function Page() {
    return (
        <RootLayout>
            <Theme>
                <Posts/>
            </Theme>
        </RootLayout>
    )
}
