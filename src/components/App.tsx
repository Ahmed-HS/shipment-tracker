import { Header } from './Header'
import { AntdWrapper } from './AntdWrapper'
import trucksImage from '@assets/trucks.png'
import { TrackingPage } from '../features/tracking/TrackingPage'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@services/api'
import '../localization/localization'
export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <AntdWrapper>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="grow flex flex-col items-center">
                        <TrackingPage />
                    </main>
                    <footer
                        className="mt-16 h-[180px] w-full bg-contain bg-repeat-x"
                        style={{
                            backgroundImage: `url(${trucksImage})`
                        }}
                    ></footer>
                </div>
            </AntdWrapper>
        </QueryClientProvider>
    )
}
