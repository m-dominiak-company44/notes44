import { useTranslation } from 'react-i18next';
import { Lock, Cloud, ChevronDown, Database, Shield, Mail, ListChecks, HardDrive, ShieldCheck, Key } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '~/components/ui/collapsible';

export default function Privacy() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center gap-8 pb-12">
            {/* Hero Section */}
            <section className="flex w-full justify-center bg-gradient-to-b from-secondary/20 to-background py-20">
                <div className="container max-w-4xl flex-col space-y-6 text-center">
                    <h1 className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-5xl font-bold leading-tight tracking-tight text-transparent">
                        {t('privacy.title')}
                    </h1>
                    <p className="text-xl text-muted-foreground">{t('privacy.subtitle')}</p>
                </div>
            </section>

            {/* Policy Content */}
            <div className="container max-w-6xl space-y-8 text-lg">
                {/* Introduction */}
                <section className="space-y-4 rounded-lg border p-6">
                    <h2 className="flex items-center gap-2 text-2xl font-semibold">
                        <ListChecks className="h-6 w-6 text-primary" />
                        {t('privacy.introduction.title')}
                    </h2>
                    <p className="text-muted-foreground">{t('privacy.introduction.content')}</p>
                </section>

                {/* Data Collection */}
                <Collapsible className="rounded-lg border p-6">
                    <CollapsibleTrigger className="flex w-full items-center justify-between">
                        <h2 className="flex items-center gap-2 text-xl font-semibold">
                            <Database className="h-5 w-5 text-primary" />
                            {t('privacy.dataCollection.title')}
                        </h2>
                        <ChevronDown className="h-5 w-5" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                        <SubSection title={t('privacy.dataCollection.local.title')}>
                            <ul className="list-disc space-y-2 pl-6">
                                {(t('privacy.dataCollection.local.items', { returnObjects: true }) as string[]).map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </SubSection>

                        <SubSection title={t('privacy.dataCollection.login.title')}>
                            <ul className="list-disc space-y-2 pl-6">
                                {(t('privacy.dataCollection.login.items', { returnObjects: true }) as string[]).map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </SubSection>
                    </CollapsibleContent>
                </Collapsible>

                {/* Google Drive */}
                <section className="rounded-lg border p-6">
                    <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                        <Cloud className="h-5 w-5 text-primary" />
                        {t('privacy.googleDrive.title')}
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>{t('privacy.googleDrive.description')}</p>
                        <ul className="list-disc space-y-2 pl-6">
                            {(t('privacy.googleDrive.items', { returnObjects: true }) as string[]).map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Data Storage */}
                <Collapsible className="rounded-lg border p-6">
                    <CollapsibleTrigger className="flex w-full items-center justify-between">
                        <h2 className="flex items-center gap-2 text-xl font-semibold">
                            <HardDrive className="h-5 w-5 text-primary" />
                            {t('privacy.dataStorage.title')}
                        </h2>
                        <ChevronDown className="h-5 w-5" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                        <SubSection title={t('privacy.dataStorage.local.title')}>
                            <p className="text-muted-foreground">{t('privacy.dataStorage.local.description')}</p>
                        </SubSection>

                        <SubSection title={t('privacy.dataStorage.sync.title')}>
                            <p className="text-muted-foreground">{t('privacy.dataStorage.sync.description')}</p>
                        </SubSection>
                    </CollapsibleContent>
                </Collapsible>

                {/* App Permissions */}
                <section className="rounded-lg border p-6">
                    <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                        <Key className="h-5 w-5 text-primary" />
                        {t('privacy.permissions.title')}
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>{t('privacy.permissions.description')}</p>
                        <ul className="list-disc space-y-2 pl-6">
                            {(t('privacy.permissions.items', { returnObjects: true }) as string[]).map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Security */}
                <section className="rounded-lg border p-6">
                    <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        {t('privacy.security.title')}
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                        <ul className="list-disc space-y-2 pl-6">
                            {(t('privacy.security.items', { returnObjects: true }) as string[]).map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* User Rights */}
                <section className="rounded-lg border p-6">
                    <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                        <Shield className="h-5 w-5 text-primary" />
                        {t('privacy.userRights.title')}
                    </h2>
                    <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
                        {(t('privacy.userRights.items', { returnObjects: true }) as string[]).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                </section>

                {/* Contact & Policy Changes */}
                <div className="grid gap-8 md:grid-cols-2">
                    <section className="rounded-lg border p-6">
                        <h2 className="mb-4 text-xl font-semibold">{t('privacy.contact.title')}</h2>
                        <p className="text-muted-foreground">{t('privacy.contact.content')}</p>
                    </section>

                    <section className="rounded-lg border p-6">
                        <h2 className="mb-4 text-xl font-semibold">{t('privacy.policyChanges.title')}</h2>
                        <p className="text-muted-foreground">{t('privacy.policyChanges.content')}</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="space-y-2">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <div className="text-gray-600 dark:text-gray-300">{children}</div>
        </section>
    );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="ml-4 space-y-1">
            <h3 className="text-lg font-medium">{title}</h3>
            <div className="text-gray-500 dark:text-gray-400">{children}</div>
        </div>
    );
}
