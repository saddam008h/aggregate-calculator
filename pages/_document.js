import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-orange-100'>
        <Main />
        <NextScript />

        <script src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"></script>
      </body>
    </Html>
  )
}
