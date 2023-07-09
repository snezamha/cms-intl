import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['fa', 'en' , 'de'],
  defaultLocale: 'fa'
});
 
export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
