import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="dark bg-layer-1 text-text antialiased">
          <Main />
          <NextScript />
          <svg height="0">
            <defs>
              <LinearGradient name="peach" />
              <LinearGradient name="sky" />
              <LinearGradient name="lime" />
              <LinearGradient name="dusk" />
              <LinearGradient name="cotton-candy" />
              <LinearGradient name="wild-apple" />
              <LinearGradient name="fresh-mint" />
              <LinearGradient name="grape-gummy" withVia />
            </defs>
          </svg>
        </body>
      </Html>
    );
  }
}

function LinearGradient({
  name,
  withVia,
}: {
  name: string;
  withVia?: boolean;
}) {
  return (
    <linearGradient id={`gradient-${name}`}>
      <stop offset="0%" style={{ stopColor: `var(--gradient-${name}-from)` }} />
      {withVia ? (
        <stop
          offset="50%"
          style={{ stopColor: `var(--gradient-${name}-via)` }}
        />
      ) : null}
      <stop offset="100%" style={{ stopColor: `var(--gradient-${name}-to)` }} />
    </linearGradient>
  );
}
