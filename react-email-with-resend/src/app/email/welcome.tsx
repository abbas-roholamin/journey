import {
  Button,
  CodeBlock,
  CodeInline,
  Column,
  Container,
  dracula,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Markdown,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function Welcome({ name }: { name: string }) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Welcome Email</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Container>
        <Heading>{name}, welcome to Resend</Heading>
        <Heading as="h2" mt={2}>
          Lorem ipsum
        </Heading>
        <Button
          href="https://example.com"
          style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
          target="_blank"
        >
          Click here
        </Button>
        <CodeBlock
          code={'console.log("hello world");'}
          lineNumbers // add this so that there are line numbers beside each code line
          theme={dracula}
          language="javascript"
        />

        <CodeInline>@react-email/code-inline</CodeInline>

        <Row>
          <Column>A</Column>
          <Column>B</Column>
          <Column>C</Column>
        </Row>

        <Hr />

        <Section>
          <Row>
            <Column>A</Column>
          </Row>
          <Row>
            <Column>B</Column>
          </Row>
          <Row>
            <Column>C</Column>
          </Row>
        </Section>

        <Img src="cat.jpg" alt="Cat" width="300" height="300" />
        <Link href="https://example.com">Example</Link>

        <Markdown
          markdownCustomStyles={{
            h1: { color: "red" },
            h2: { color: "blue" },
            codeInline: { background: "grey" },
          }}
          markdownContainerStyles={{
            padding: "12px",
            border: "solid 1px black",
          }}
        >{`# Hello, World!`}</Markdown>

        {/* OR */}

        <Markdown children={`# This is a ~~strikethrough~~`} />

        <Preview>Email preview text</Preview>

        <Tailwind
          config={{
            theme: {
              extend: {
                colors: {
                  brand: "#007291",
                },
              },
            },
          }}
        >
          <Button
            href="https://example.com"
            className="bg-brand px-3 py-2 font-medium leading-4 bg-sky-600 text-white"
          >
            Click me
          </Button>
        </Tailwind>

        <Text>Lorem ipsum</Text>
      </Container>
    </Html>
  );
}
