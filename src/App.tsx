import { Routes, Route, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './components/theme-toggle';
import { LanguageToggle } from './components/language-toggle';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { MyNavLink } from './components/my-nav-link';
import { Footer } from './components/footer';

function PageHandler() {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page');

    switch (page) {
        case 'privacy':
            return <PrivacyPolicy />;
        default:
            return <Home />;
    }
}

function App() {
    const { t } = useTranslation();

    return (
        <div className="flex min-h-screen flex-col">
            <nav className="relative flex items-center justify-between border-b p-4">
                <div className="absolute left-1/2 flex -translate-x-1/2 gap-4">
                    <MyNavLink to="" label={t('home')} />
                    <MyNavLink to="?page=privacy" label={t('privacy-policy')} />
                </div>

                <div className="ml-auto flex gap-2">
                    <ThemeToggle />
                    <LanguageToggle />
                </div>
            </nav>

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<PageHandler />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;
