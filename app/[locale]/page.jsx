import { useTranslations } from 'next-intl';

export default function Home({ params }) {
  const t = useTranslations('Home');
  return (
    <main className=' my-8 p-8 flex flex-col gap-8 container mx-auto'>
      <div className=' bg-base-100 flex flex-col gap-8 p-4 rounded-md'>
        <div>{t('title')}</div>
        <div>{t('desc')}</div>
      </div>
    </main>
  );
}
