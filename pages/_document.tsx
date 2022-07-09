import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head />
        <body className="bg-background-1 antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
