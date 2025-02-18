import { useTranslation } from 'react-i18next';
import { Button } from '~/components/ui/button';
import { Lock, Puzzle, Code2, Cloud, Download, GitBranch, RefreshCw } from 'lucide-react';

export default function Product() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center gap-8 pb-12">
            {/* Hero Section */}
            <section className="flex w-full justify-center bg-gradient-to-b from-secondary/20 to-background py-20">
                <div className="container max-w-4xl flex-col space-y-6 text-center">
                    <h1 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent">
                        {t('product.hero.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground">{t('product.hero.subtitle')}</p>
                    <div className="flex flex-col items-center gap-2">
                        <Button size="lg" className="gap-2" disabled>
                            <Download className="h-4 w-4" />
                            {t('product.download')}
                        </Button>
                        <p className="text-sm text-muted-foreground">* {t('product.comingSoon')}</p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container max-w-6xl space-y-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="space-y-4 rounded-lg border p-6 transition-colors hover:bg-accent/50">
                        <Lock className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-semibold">{t('product.features.security.title')}</h3>
                        <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                            {t('product.features.security.items', { returnObjects: true }).map((item: string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4 rounded-lg border p-6 transition-colors hover:bg-accent/50">
                        <Puzzle className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-semibold">{t('product.features.plugins.title')}</h3>
                        <p className="text-muted-foreground">{t('product.features.plugins.description')}</p>
                    </div>

                    <div className="space-y-4 rounded-lg border p-6 transition-colors hover:bg-accent/50">
                        <Code2 className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-semibold">{t('product.features.openness.title')}</h3>
                        <ul className="list-disc space-y-2 pl-4 text-muted-foreground">
                            {t('product.features.openness.items', { returnObjects: true }).map((item: string) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Sync Section */}
                <div className="flex flex-col items-center gap-8 rounded-xl bg-secondary/20 p-8 md:flex-row">
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold">{t('product.sync.title')}</h2>
                        <p className="text-muted-foreground">{t('product.sync.description')}</p>
                        <div className="flex gap-4">
                            <Button variant="outline" className="gap-2">
                                <Cloud className="h-4 w-4" />
                                {t('product.sync.cloud')}
                            </Button>
                            <Button variant="outline" className="gap-2">
                                <GitBranch className="h-4 w-4" />
                                {t('product.sync.selfhosted')}
                            </Button>
                        </div>
                    </div>
                    <div className="flex h-64 flex-1 items-center justify-center rounded-lg border-2 border-dashed bg-muted/50">
                        <RefreshCw className="h-24 w-24 text-muted-foreground/50" />
                    </div>
                </div>
            </section>
        </div>
    );
}
